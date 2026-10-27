// Hosted-site stand-in for the artifact runtime (window.claude.use), loaded only by the GitHub Pages build.
// "db" syncs the profiles collection through Supabase after a one-time email sign-in per device;
// "sample" sends the "Write it yourself" grammar check to the Supabase function `check`.
// Without config.js values, or if the learner skips sign-in, both return null and the app keeps progress on the device.
(() => {
  const cfg = window.NAUCIMO_SUPABASE || {};
  if (!cfg.url || !cfg.key || !window.supabase) return;
  const sb = window.supabase.createClient(cfg.url, cfg.key, { auth: { persistSession: true, detectSessionInUrl: true } });
  const SKIP_KEY = "naucimo:sync-skip";
  const skipped = () => { try { return +localStorage.getItem(SKIP_KEY) > Date.now(); } catch { return false; } };

  async function session() {
    const { data } = await sb.auth.getSession();
    return data.session;
  }

  // Sign-in sheet: email link via Supabase Auth. Resolves with a session, or null if the learner chooses "Not now".
  function askSignIn() {
    return new Promise(resolve => {
      const wrap = document.createElement("div");
      wrap.setAttribute("role", "dialog");
      wrap.style.cssText = "position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.35);font-family:Inter,system-ui,sans-serif";
      wrap.innerHTML = `<form style="background:var(--surface,#fff);color:var(--ink,#121212);width:100%;max-width:480px;border-radius:24px 24px 0 0;padding:24px 20px calc(24px + env(safe-area-inset-bottom));box-sizing:border-box">
        <h2 style="margin:0 0 6px;font-weight:600;font-size:1.3rem">Sync your family's progress</h2>
        <p style="margin:0 0 16px;color:var(--muted,#6f6f6a);line-height:1.45">Sign in with the family email once on this device, and everyone's progress follows you to every phone and computer.</p>
        <input type="email" required autocomplete="email" placeholder="Family email" style="width:100%;box-sizing:border-box;font:inherit;padding:14px 16px;border-radius:14px;border:1px solid var(--line,#e1e1dc);background:var(--surface-2,#f2f2ef);color:inherit">
        <p data-msg aria-live="polite" style="margin:10px 0 0;min-height:1.2em;color:var(--muted,#6f6f6a)"></p>
        <div style="display:flex;gap:10px;margin-top:12px">
          <button type="button" data-skip style="flex:1;font:inherit;padding:14px;border-radius:999px;border:1px solid var(--line,#e1e1dc);background:transparent;color:inherit">Not now</button>
          <button type="submit" style="flex:1;font:inherit;font-weight:600;padding:14px;border-radius:999px;border:0;background:var(--ink,#121212);color:var(--bg,#fff)">Email me a link</button>
        </div></form>`;
      const form = wrap.querySelector("form"), msg = wrap.querySelector("[data-msg]"), input = wrap.querySelector("input");
      const done = s => { wrap.remove(); resolve(s); };
      wrap.querySelector("[data-skip]").onclick = () => { try { localStorage.setItem(SKIP_KEY, Date.now() + 7 * 864e5); } catch {} done(null); };
      form.onsubmit = async e => {
        e.preventDefault();
        msg.textContent = "Sending…";
        const { error } = await sb.auth.signInWithOtp({ email: input.value.trim(), options: { emailRedirectTo: location.origin + location.pathname } });
        msg.textContent = error ? "That didn't work: " + error.message : "Check your email and open the link on this device. You can close this.";
      };
      // Opening the link in another tab signs this one in too.
      sb.auth.onAuthStateChange((_e, s) => { if (s && wrap.isConnected) done(s); });
      document.body.append(wrap);
    });
  }

  // The subset of the artifact db API the app uses: collection("profiles").onSnapshot and doc("profiles/<id>").set/delete.
  function profilesDb(uid) {
    const rows = new Map(), listeners = [];
    const emit = () => {
      const snap = { docs: [...rows].map(([id, data]) => ({ id, data: () => data })) };
      for (const [cb] of listeners) cb(snap);
    };
    async function reload() {
      const { data, error } = await sb.from("profiles").select("id,data");
      if (error) { for (const [, fail] of listeners) fail && fail(error); return; }
      rows.clear();
      for (const r of data) rows.set(r.id, r.data);
      emit();
    }
    let channel = null;
    function listen() {
      if (channel) return;
      channel = sb.channel("profiles-" + uid)
        .on("postgres_changes", { event: "*", schema: "public", table: "profiles", filter: "family_id=eq." + uid }, ch => {
          if (ch.eventType === "DELETE") rows.delete(ch.old.id);
          else rows.set(ch.new.id, ch.new.data);
          emit();
        })
        .subscribe();
      // Phones drop the live connection while asleep, so catch up whenever the app comes back.
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reload(); });
    }
    const docRef = path => {
      const id = path.split("/")[1];
      return {
        async set(data) {
          const { error } = await sb.from("profiles").upsert({ family_id: uid, id, data, updated: data.updated || Date.now() });
          if (error) throw error;
        },
        async delete() {
          const { error } = await sb.from("profiles").delete().eq("id", id);
          if (error) throw error;
        },
      };
    };
    return {
      doc: docRef,
      collection: () => ({
        onSnapshot(cb, fail) { listeners.push([cb, fail]); listen(); reload(); return () => {}; },
      }),
    };
  }

  const checker = {
    async json(prompt) {
      const { data, error } = await sb.functions.invoke("check", { body: { prompt } });
      if (error) {
        // Keep the function's own reason (e.g. "gemini 404" or "GEMINI_API_KEY is not set") so the app can show it.
        const status = error.context?.status, body = await error.context?.json?.().catch(() => null);
        const detail = [status, body?.error, typeof body?.detail === "string" ? body.detail.slice(0, 160) : ""].filter(Boolean).join(" · ") || error.message;
        throw Object.assign(new Error(error.message), { code: status === 429 ? "rate_limited" : "failed", detail });
      }
      return data;
    },
  };

  let dbP = null;
  window.claude = {
    use(name) {
      if (name === "db") {
        return (dbP = dbP || (async () => {
          let s = await session();
          if (!s && !skipped()) s = await askSignIn();
          return s ? profilesDb(s.user.id) : null;
        })());
      }
      // Checked only after the sign-in above, so the grammar check is for signed-in families only.
      if (name === "sample") return session().then(s => (s ? checker : null));
      return Promise.resolve(null);
    },
  };
})();
