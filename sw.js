// Makes the site installable and usable offline. Same-origin GETs go to the network first, so a deploy shows up on the next
// load, and a copy is kept for when there is no connection. Other origins (Supabase, Google Fonts) are left to the browser.
const CACHE = 'naucimo-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin || req.headers.has('range')) return;
  e.respondWith(fetch(req).then(res => {
    if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' })
    .then(hit => hit || (req.mode === 'navigate' ? caches.match('./') : undefined))
    .then(hit => hit || Response.error())));
});
