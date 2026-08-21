const CACHE="knc-online-v051-roomfix";
const ASSETS=["./","./index.html","./manifest.json","./board.png","./brand-logo.png","./splash-logo.png","./icon-192.png","./icon-512.png","./icon-maskable-192.png","./icon-maskable-512.png","./apple-touch-icon.png","./firebase-config.js","./splash-static.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
    const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;
  }).catch(()=>cached)));
});
