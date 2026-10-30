# Naučimo Hrvatski

A family Croatian learning web app: daily lessons, spaced review, conversations, grammar and pronunciation, with recorded audio.

Live site: https://jasonleonard618-ux.github.io/naucimo-hrvatski/

The site is built from the app's source with `tools/build-site.sh` (in the project files), which adds the document head the original artifact host supplied and loads `sync.js`.

## Progress sync and grammar check (Supabase)
`sync.js` stands in for the artifact runtime. With `config.js` filled in, each device signs in once with the family email (an email link), and learners' progress is stored in the Supabase table `profiles`, one row per learner, readable only by that family's account (row-level security). With `config.js` empty, or after "Not now", progress stays in the browser.

"Write it yourself" calls the Supabase Edge Function `check` (`supabase/functions/check/index.ts`), which passes the app's checker prompt to Google Gemini with a key kept as a Supabase secret, never in the page. Only signed-in families can call it.

Speed: the function turns Gemini's "thinking" off (with it on, a check took 1-2 minutes), gives each model 15 s before trying the next, and gives up after 40 s; the app stops waiting at 50 s and falls back to comparing with the model answer. Each successful call logs "<model> replied in N ms" in Edge Functions → check → Logs.

Setup, once:
1. Create a Supabase project. In SQL Editor, run `supabase/setup.sql`.
2. Authentication → URL Configuration: set Site URL to the live site address above.
3. Project Settings → API: put the Project URL and the anon (publishable) key in `config.js`.
4. Edge Functions → Deploy a new function → Via editor: name it `check`, paste `supabase/functions/check/index.ts`, deploy.
5. Edge Functions → Secrets: add `GEMINI_API_KEY` (from https://aistudio.google.com/apikey).

Free-plan notes: Supabase pauses a project after about a week with no use (data is kept; resume it from the dashboard), and its built-in email sends only a few sign-in emails per hour.
