const CACHE='duchef-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./assets/logo-du-chef.png','./assets/esfiha-carne.png','./assets/esfiha-frango.png','./assets/esfiha-queijo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
