import React from 'react';
import {priorities,statuses} from '../Interfaces/task';
export default function TaskCard({task,onEdit,onDelete,onStatus}) {
 return <article className={'task-card '+(task.status==='completed'?'done':'')}>
 <div className="card-top"><span className={'priority '+task.priority}><i/> {priorities[task.priority]} öncelik</span><button className="icon-button" onClick={()=>onEdit(task)} aria-label={`${task.title} görevini düzenle`}>↗</button></div>
 <h3>{task.title}</h3><p>{task.description || 'Bu göreve henüz açıklama eklenmedi.'}</p>
 {task.dueDate && <div className="due">◷ {new Date(task.dueDate+'T12:00:00').toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'})}</div>}
 <footer><select aria-label={`${task.title} durumu`} value={task.status} onChange={e=>onStatus(task.id,e.target.value)}>{Object.entries(statuses).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select><button className="delete-button" onClick={()=>onDelete(task)} aria-label={`${task.title} görevini sil`}>Sil</button></footer>
 </article>;
}
