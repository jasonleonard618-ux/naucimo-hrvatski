// "Write it yourself" grammar check and dictionary lookups for the hosted site. The app sends its prompt; this asks Gemini for the JSON reply.
// Deploy as an Edge Function named `check` (JWT verification on, so only signed-in families can use it)
// and set the secret GEMINI_API_KEY. GEMINI_MODEL is optional; if a model is retired (404), the next one is tried.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const MODELS = [Deno.env.get("GEMINI_MODEL"), "gemini-flash-latest", "gemini-2.5-flash", "gemini-2.0-flash"].filter(Boolean) as string[];

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "GEMINI_API_KEY is not set" }, 500);
  const { prompt } = await req.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt || prompt.length > 12000) return json({ error: "bad prompt" }, 400);

  let r: Response | null = null;
  for (const model of MODELS) {
    r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", temperature: 0.2 },
      }),
    });
    if (r.status !== 404) break;
    console.error("gemini model not found:", model);
  }
  if (!r!.ok) {
    const detail = (await r!.text()).slice(0, 500);
    console.error("gemini", r!.status, detail); // shows in the function's Logs tab
    return json({ error: "gemini " + r!.status, detail }, r!.status === 429 ? 429 : 502);
  }
  const out = await r!.json();
  const text = (out.candidates?.[0]?.content?.parts || []).filter((p: { thought?: boolean }) => !p.thought).map((p: { text?: string }) => p.text || "").join("");
  try {
    return json(JSON.parse(text.replace(/^\s*```(json)?\s*|\s*```\s*$/g, "")));
  } catch {
    console.error("reply was not JSON:", text.slice(0, 500));
    return json({ error: "reply was not JSON", detail: text.slice(0, 200) }, 502);
  }
});
