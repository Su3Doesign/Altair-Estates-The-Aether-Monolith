const container=document.querySelector('#products');
const dialog=document.querySelector('#detail');
const detail=document.querySelector('#detail-content');
const count=document.querySelector('#count');
let products=[],filter='all',query='',lastFocus;
const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
  const shown=products.filter(p=>(filter==='all'||p.category===filter)&&`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(query));
  count.textContent=`${shown.length} ${shown.length===1?'piece':'pieces'}`;
  container.innerHTML=shown.length?shown.map(p=>`<article class="card"><div class="card-visual">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.alt)}" loading="lazy" width="1440" height="1080">`:`<div class="placeholder"><span>THE NEXT CHAPTER</span><strong>${esc(p.name)}</strong><span>IN DEVELOPMENT</span></div>`}<span class="badge">${esc(p.statusLabel)}</span><span class="serial">${esc(p.number)}</span></div><p class="card-category">${esc(p.category)} / ${esc(p.edition)}</p><div class="card-heading"><h3>${esc(p.name)}</h3><span class="card-price" aria-label="Proposed launch price ${esc(money.format(p.price))}">${esc(money.format(p.price))}</span></div><p class="description">${esc(p.description)}</p><div class="card-bottom"><span>${esc(p.summary)}</span><button type="button" data-detail="${esc(p.id)}" aria-label="View details for ${esc(p.name)}">View details ↗</button></div></article>`).join(''):'<p class="empty">No pieces match your search. Try another name or category.</p>';
}
function openProduct(id){
 const p=products.find(x=>x.id===id);if(!p)return;
 lastFocus=document.activeElement;
 detail.innerHTML=`<div class="detail-grid">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.alt)}">`:'<div class="placeholder"><strong>A world in progress.</strong></div>'}<div class="detail-text"><p class="eyebrow">${esc(p.number)} / ${esc(p.statusLabel)}</p><h2 id="detail-title">${esc(p.name)}</h2><p>${esc(p.description)}</p><dl class="facts"><div><dt>Proposed launch price</dt><dd>${esc(money.format(p.price))} USD</dd></div><div><dt>Format</dt><dd>${esc(p.format)}</dd></div><div><dt>Geometry</dt><dd>${p.triangles?Number(p.triangles).toLocaleString()+' base triangles':'Under review'}</dd></div><div><dt>External dependencies</dt><dd>${p.verified?'None in verified package':'Audit in progress'}</dd></div></dl><h3>In the package</h3><ul>${p.includes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><h3>Before you choose</h3><ul>${p.limits.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="detail-note">${esc(p.availability)}</p></div></div>`;
 dialog.showModal();document.body.style.overflow='hidden';dialog.querySelector('.close').focus();
}
container.addEventListener('click',e=>{const b=e.target.closest('[data-detail]');if(b)openProduct(b.dataset.detail);});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
 filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{const on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});render();
}));
document.querySelector('#search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';if(lastFocus?.isConnected)lastFocus.focus();});
try{
 const catalogURL=new URL('./products.json',import.meta.url);
 const response=await fetch(catalogURL);if(!response.ok)throw new Error('Product index unavailable');
 products=(await response.json()).map(p=>({...p,image:p.image?new URL(p.image,catalogURL).href:null}));render();
}catch(error){container.innerHTML='<p class="status-error">The collection could not load. Please refresh the page.</p>';count.textContent='';}
