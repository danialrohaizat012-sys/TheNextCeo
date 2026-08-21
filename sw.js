const CACHE="knc-online-v053-phone-splash";
const STATIC=[
  "./manifest.json",
  "./board.png",
  "./brand-logo.png",
  "./splash-logo.png",
  "./commercial-splash-phone.jpg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-192.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./firebase-config.js"
];

self.addEventListener("install",event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(STATIC)));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET") return;

  // HTML/navigation must be NETWORK FIRST so a previous PWA build cannot trap an old splash/index.
  if(req.mode==="navigate" || req.destination==="document"){
    event.respondWith(
      fetch(req,{cache:"no-store"})
        .then(res=>{
          const copy=res.clone();
          caches.open(CACHE).then(c=>c.put("./index.html",copy));
          return res;
        })
        .catch(()=>caches.match("./index.html").then(r=>r||caches.match("./")))
    );
    return;
  }

  // Config also network-first.
  if(new URL(req.url).pathname.endsWith("/firebase-config.js")){
    event.respondWith(fetch(req,{cache:"no-store"}).catch(()=>caches.match(req)));
    return;
  }

  // Static assets cache-first.
  event.respondWith(
    caches.match(req).then(cached=>cached||fetch(req).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(req,copy));
      return res;
    }))
  );
});
