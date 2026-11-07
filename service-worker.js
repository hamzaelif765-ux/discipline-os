// Bump VERSION on every deploy so phones fetch fresh files.
const VERSION="dos-v5",CHART="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";
const FILES=["./","index.html","styles.css","app.js","namaz.js","manifest.json","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(async c=>{await c.addAll(FILES);try{await c.add(CHART)}catch(_){}}));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const cp=n.clone();caches.open(VERSION).then(c=>c.put(e.request,cp));return n}).catch(()=>caches.match("index.html"))))});
