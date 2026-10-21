// "Write it yourself" grammar check for the hosted site. The app sends its checker prompt; this asks Gemini for the JSON reply.
// Deploy as an Edge Function named `check` (JWT verification on, so only signed-in families can use it)
// and set the secret GEMINI_API_KEY. GEMINI_MODEL is optional.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async req => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return json({ error: "GEMINI_API_KEY is not set" }, 500);
  const { prompt } = await req.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt || prompt.length > 12000) return json({ error: "bad prompt" }, 400);

  const model = Deno.env.get("GEMINI_MODEL") || "gemini-2.5-flash";
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json", temperature: 0.2 },
    }),
  });
  if (!r.ok) return json({ error: "gemini " + r.status, detail: (await r.text()).slice(0, 500) }, r.status === 429 ? 429 : 502);
  const out = await r.json();
  const text = (out.candidates?.[0]?.content?.parts || []).map((p: { text?: string }) => p.text || "").join("");
  try {
    return json(JSON.parse(text.replace(/^```(json)?\s*|\s*```$/g, "")));
  } catch {
    return json({ error: "reply was not JSON" }, 502);
  }
});
