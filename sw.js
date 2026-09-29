const CACHE='alp-lol-v1.1c';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true}).then(r=>{const f=fetch(e.request).then(n=>{if(n&&n.ok)c.put(e.request,n.clone());return n;}).catch(()=>r);return r||f;})));});
