/** @typedef {{id:string,title:string,description:string,image:string,category:string,createdAt:string,comments:Array<{id:string,text:string,createdAt:string}>}} Photo */
export const categories=['Doğa','Şehir','Anılar','Diğer'];
export const samples=[
 {id:'sample-1',title:'Sessiz bir sabah',description:'Dağların arasında, her şeyin yavaşladığı bir an.',category:'Doğa',image:'/images/dag.jpg',createdAt:'2026-10-18T09:00:00.000Z',comments:[]},
 {id:'sample-2',title:'Yolun götürdüğü yer',description:'Bazen yolculuğun kendisi en güzel manzaradır.',category:'Doğa',image:'/images/yol.jpg',createdAt:'2026-10-18T09:01:00.000Z',comments:[]},
 {id:'sample-3',title:'Şehrin ritmi',description:'Sokaklarda saklanan küçük hikâyeler.',category:'Şehir',image:'/images/sehir.jpg',createdAt:'2026-10-18T09:02:00.000Z',comments:[]}
];
