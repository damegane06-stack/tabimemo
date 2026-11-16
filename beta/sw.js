// タビメモ β版 専用 Service Worker
// 担当範囲は /beta/ の中だけ。本番のキャッシュ（tabimemo-v*）は読みも書きも消しもしない。
const CACHE = 'tabimemo-beta-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() =>
        caches.open(CACHE).then(c =>
          c.match(e.request).then(r => r || c.match('./index.html')).then(r => r || c.match('./'))
        ).then(r => r || Response.error())
      )
  );
});
