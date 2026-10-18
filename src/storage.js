const DB='lila-gallery-v1';
export async function openGallery(){
 return new Promise((resolve,reject)=>{
 const request=indexedDB.open(DB,1);
 request.onupgradeneeded=()=>request.result.createObjectStore('gallery');
 request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
 });
}
export async function readPhotos(db){return new Promise((resolve,reject)=>{const tx=db.transaction('gallery','readonly');const req=tx.objectStore('gallery').get('photos');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
export async function savePhotos(db,photos){return new Promise((resolve,reject)=>{const tx=db.transaction('gallery','readwrite');tx.objectStore('gallery').put(photos,'photos');tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}
