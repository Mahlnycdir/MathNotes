// MathNotes – Service Worker: macht die App offline-fähig.
// Bei einer neuen Version VERSION hochzählen, dann holt sich jedes iPhone die neuen Dateien.
const VERSION = "MathNotes-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "vendor/jspdf.umd.min.js",
  "fonts/ibm-plex-sans-condensed-latin-400-normal.woff2",
  "fonts/ibm-plex-sans-condensed-latin-500-normal.woff2",
  "fonts/ibm-plex-sans-condensed-latin-600-normal.woff2",
  "fonts/ibm-plex-mono-latin-400-normal.woff2",
  "fonts/ibm-plex-mono-latin-500-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  // Die App selbst: sofort aus dem Speicher starten (auch im Funkloch),
  // im Hintergrund nach einer neuen Fassung schauen – die gilt dann beim nächsten Start.
  if (req.mode === "navigate") {
    const update = fetch(req)
      .then((res) => {
        if (res && res.ok) return caches.open(VERSION).then((c) => c.put("index.html", res.clone())).then(() => res);
        return res;
      })
      .catch(() => null);
    event.waitUntil(update);
    event.respondWith(
      caches.match("index.html").then((cached) => cached || update.then((res) => res || new Response("Offline", { status: 503 })))
    );
    return;
  }

  // Alles andere: erst Speicher, dann Netz
  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
