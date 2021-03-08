const cacheName = "pg-input-display-v1";
const shellFiles = [
  "/assets/css/fontawesome.min.css",
  "/assets/css/regular.min.css",
  "/assets/css/solid.min.css",
  "/build/bundle.css",
  "/build/bundle.js",
  "/global.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);

      await cache.addAll(shellFiles);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const request = await caches.match(event.request);

      if (request) {
        return request;
      }

      const response = await fetch(event.request);
      const cache = await caches.open(cacheName);

      cache.put(event.request, response.clone());

      return response;
    })()
  );
});
