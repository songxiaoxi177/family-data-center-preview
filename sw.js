const CACHE='family-data-center-v06-reset';
self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.map(key=>caches.delete(key)));await self.clients.claim();const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});await Promise.all(clients.map(client=>client.navigate(client.url)));})())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{})}return response}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))))});
