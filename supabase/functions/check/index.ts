// "Write it yourself" grammar check, dictionary lookups and Tomo for the hosted site. The app sends its prompt; this asks Gemini for the JSON reply.
// Deploy as an Edge Function named `check` (JWT verification on, so only signed-in families can use it)
// and set the secret GEMINI_API_KEY. GEMINI_MODEL is optional. If a model is retired (404), out of free quota (429),
// overloaded (500/503) or too slow (no reply within its time limit), the next one is tried.
// Speed: thinking is turned off (it made a check take a minute or more), and each model gets at most PER_MODEL_MS.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const MODELS = [Deno.env.get("GEMINI_MODEL"), "gemini-flash-latest", "gemini-2.5-flash", "gemini-flash-lite-latest", "gemini-2.0-flash"].filter(Boolean) as string[];
const PER_MODEL_MS = 15000, TOTAL_MS = 40000;
// Gemini 3 models take a thinking level ("minimal" is the fastest); 2.5 models take a budget, where 0 turns thinking off.
// 2.0 models have no thinking. If a model refuses the setting (400), it is asked again without it.
const thinking = (model: string) =>
  /gemini-2\.0/.test(model) ? null : /gemini-3/.test(model) ? { thinkingLevel: "minimal" } : { thinkingBudget: 0 };

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "GEMINI_API_KEY is not set" }, 500);
  const { prompt } = await req.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt || prompt.length > 12000) return json({ error: "bad prompt" }, 400);

  const t0 = Date.now();
  const ask = (model: string, think: object | null) =>
    fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", temperature: 0.2, maxOutputTokens: 4096, ...(think ? { thinkingConfig: think } : {}) },
      }),
      signal: AbortSignal.timeout(Math.max(1000, Math.min(PER_MODEL_MS, TOTAL_MS - (Date.now() - t0)))),
    });

  let r: Response | null = null, used = "";
  for (const model of MODELS) {
    if (Date.now() - t0 > TOTAL_MS - 2000) break;
    const m0 = Date.now();
    try {
      const think = thinking(model);
      r = await ask(model, think);
      if (r.status === 400 && think) {
        console.error("gemini 400 from", model, "with thinking settings - asking again without them:", (await r.text()).slice(0, 200));
        r = await ask(model, null);
      }
    } catch (e) {
      console.error(model, "gave no reply after", Date.now() - m0, "ms (" + (e as Error).name + ") - trying the next model");
      r = null;
      continue;
    }
    used = model;
    if (![404, 429, 500, 503].includes(r.status)) break;
    console.error("gemini", r.status, "from", model, "after", Date.now() - m0, "ms - trying the next model");
  }
  if (!r) return json({ error: "gemini timeout", detail: "No model replied within " + Math.round(TOTAL_MS / 1000) + " s" }, 504);
  if (!r.ok) {
    const detail = (await r.text()).slice(0, 500);
    console.error("gemini", r.status, detail); // shows in the function's Logs tab
    return json({ error: "gemini " + r.status, detail }, r.status === 429 ? 429 : 502);
  }
  const out = await r.json();
  console.log(used, "replied in", Date.now() - t0, "ms"); // Logs tab: how long each check took
  const text = (out.candidates?.[0]?.content?.parts || []).filter((p: { thought?: boolean }) => !p.thought).map((p: { text?: string }) => p.text || "").join("");
  try {
    return json(JSON.parse(text.replace(/^\s*```(json)?\s*|\s*```\s*$/g, "")));
  } catch {
    console.error("reply was not JSON:", text.slice(0, 500));
    return json({ error: "reply was not JSON", detail: text.slice(0, 200) }, 502);
  }
});
