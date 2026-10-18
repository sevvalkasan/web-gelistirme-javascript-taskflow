import React from 'react';
import {useEffect,useRef,useState} from 'react';
import {priorities,statuses} from '../Interfaces/task';
export default function TaskForm({task,onSave,onClose}){
 const dialog=useRef(null);
 const [form,setForm]=useState(task || {title:'',description:'',priority:'medium',status:'pending',dueDate:''});
 useEffect(()=>{const element=dialog.current;element.showModal();return ()=>element.close();},[]);
 const field=e=>setForm({...form,[e.target.name]:e.target.value});
 return <dialog ref={dialog} onCancel={onClose}><form onSubmit={e=>{e.preventDefault();if(form.title.trim())onSave({...form,title:form.title.trim(),description:form.description.trim()});}}>
 <div className="modal-head"><div><span className="eyebrow">BİR SONRAKİ ADIM</span><h2>{task?'Görevi düzenle':'Yeni bir görev'}</h2></div><button type="button" className="icon-button" onClick={onClose} aria-label="Kapat">×</button></div>
 <label>Görev başlığı<input name="title" autoFocus required maxLength={120} value={form.title} onChange={field} placeholder="Ne yapmak istiyorsun?"/></label>
 <label>Açıklama<textarea name="description" maxLength={600} rows={3} value={form.description} onChange={field} placeholder="Küçük detaylar, net bir başlangıç…"/></label>
 <div className="form-grid"><label>Öncelik<select name="priority" value={form.priority} onChange={field}>{Object.entries(priorities).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></label><label>Durum<select name="status" value={form.status} onChange={field}>{Object.entries(statuses).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select></label></div>
 <label>Hedef tarih <span className="optional">(isteğe bağlı)</span><input name="dueDate" type="date" value={form.dueDate} onChange={field}/></label>
 <div className="modal-actions"><button className="secondary" type="button" onClick={onClose}>Vazgeç</button><button className="primary" type="submit">{task?'Değişiklikleri kaydet':'Görevi oluştur'} ↗</button></div>
 </form></dialog>;
}
