// Hunter's Companion — Player Service Worker
const CACHE_NAME = 'hunters-companion-v1';

const FILES_TO_CACHE = [
  '/player/',
  '/player/index.html',
  '/player/manifest.json',
  '/data/database.js',
  '/data/Bestiary.js',
  '/data/Items.js',
  '/data/recipes.js',
  '/data/equipment.js',
  '/icons/player-icon-192.png',
  '/icons/player-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW:Player] Pre-caching app shell');
      return Promise.allSettled(
        FILES_TO_CACHE.map(url => cache.add(url).catch(err => {
          console.warn('[SW:Player] Failed to cache:', url, err);
        }))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW:Player] Removing old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/player/index.html');
        }
      });
    })
  );
});
