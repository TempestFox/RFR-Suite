// Hunter's Companion — Service Worker
// CACHE_VERSION is automatically updated by GitHub Actions on every push.
// Do not edit this line manually.
const CACHE_VERSION = 'v20260314-0936';
const CACHE_NAME = `hunters-companion-${CACHE_VERSION}`;
const BASE = '/RFR-Suite';

const FILES_TO_CACHE = [
  // Root
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/suite.css`,
  `${BASE}/suite.js`,

  // Shared data
  `${BASE}/data/database.js`,
  `${BASE}/data/Bestiary.js`,
  `${BASE}/data/Items.js`,
  `${BASE}/data/recipes.js`,
  `${BASE}/data/equipment.js`,

  // Icons
  `${BASE}/icons/player-icon-192.png`,
  `${BASE}/icons/player-icon-512.png`,
  `${BASE}/icons/dm-icon-192.png`,
  `${BASE}/icons/dm-icon-512.png`,

  // Player tool
  `${BASE}/player/index.html`,
  `${BASE}/player/manifest.json`,

  // DM tools
  `${BASE}/dm/index.html`,
  `${BASE}/dm/harvest.html`,
  `${BASE}/dm/crafting.html`,
  `${BASE}/dm/upgrades.html`,
  `${BASE}/dm/storefront.html`,
];

// ── Install: pre-cache all listed files ───────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`[SW] Installing cache: ${CACHE_NAME}`);
      return Promise.allSettled(
        FILES_TO_CACHE.map(url =>
          cache.add(url).catch(err =>
            console.warn('[SW] Failed to cache:', url, err)
          )
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: delete all old cache versions ───────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('hunters-companion-') && key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, fall back to network ──────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.destination === 'document') {
          return caches.match(`${BASE}/player/index.html`);
        }
      });
    })
  );
});
