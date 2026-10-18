/** @typedef {{id:string,title:string,description:string,priority:'low'|'medium'|'high',status:'pending'|'in_progress'|'completed',dueDate:string}} Task */
export const statuses = {pending:'Yapılacak',in_progress:'Devam ediyor',completed:'Tamamlandı'};
export const priorities = {low:'Düşük',medium:'Orta',high:'Yüksek'};
export const storageKey = 'taskflow-web-v1';
export const initialTasks = [
 {id:'sample-1',title:'Proje kapsamını belirle',description:'İhtiyaçları ve temel kullanıcı akışını netleştir.',priority:'high',status:'completed',dueDate:''},
 {id:'sample-2',title:'Görev panosunu tasarla',description:'Kartları, durumları ve öncelik etiketlerini düzenle.',priority:'high',status:'in_progress',dueDate:''},
 {id:'sample-3',title:'CRUD işlemlerini test et',description:'Ekleme, düzenleme ve silme akışlarını kontrol et.',priority:'medium',status:'pending',dueDate:''},
 {id:'sample-4',title:'Proje sunumunu hazırla',description:'Ekran görüntüsü ve kurulum notlarını bir araya getir.',priority:'low',status:'pending',dueDate:''}
];
