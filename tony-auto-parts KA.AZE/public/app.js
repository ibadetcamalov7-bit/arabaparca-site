let data = { products: [], phone: '' };
let catalogLoaded = false;
let statusKey = '';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function art(p){if(p.image)return '<img alt="'+esc(productName(p))+'" src="'+esc(p.image)+'" loading="lazy">';let shape=p.category==='Əyləc sistemi'?'<circle cx="80" cy="80" r="58" fill="#687482" stroke="#273442" stroke-width="9"/><circle cx="80" cy="80" r="24" fill="#d5dce1"/><circle cx="80" cy="80" r="8" fill="#253242"/><path d="M46 45L56 58M103 43L95 57M44 110L58 100M112 111L100 100" stroke="#cbd3da" stroke-width="7"/>':p.category==='İşıqlandırma'?'<path d="M19 68Q45 31 130 43L143 104Q80 128 19 103Z" fill="#344657" stroke="#63778a" stroke-width="5"/><path d="M30 76Q65 55 128 57L132 94Q78 111 32 94Z" fill="#c5dfeb"/><circle cx="91" cy="81" r="19" fill="#f5fafc" stroke="#849baa" stroke-width="7"/>':'<path d="M38 35H120V125H38Z" fill="#485768" stroke="#263241" stroke-width="5"/><path d="M48 48H110M48 61H110M48 74H110M48 87H110M48 100H110M48 113H110" stroke="#92a0ad" stroke-width="6"/><path d="M60 24H98V35H60ZM60 125H98V137H60Z" fill="#243443"/>';return '<svg viewBox="0 0 160 160" role="img" aria-label="'+esc(t('schematic'))+'">'+shape+'</svg>'}

function setStatus(key) {
  statusKey = key;
  $('status').textContent = key ? t(key) : '';
}
function render() {
  const query = $('search').value.trim().toLocaleLowerCase();
  const products = data.products.filter(p =>
    [p.name, p.nameKa || '', p.brand, p.model, p.years, p.category, categoryName(p.category)].join(' ').toLocaleLowerCase().includes(query) &&
    (!$('brand').value || p.brand === $('brand').value) &&
    (!$('category').value || p.category === $('category').value)
  );
  if ($('sort').value !== 'default') products.sort((a,b) => $('sort').value === 'low' ? a.price-b.price : b.price-a.price);
  $('count').textContent = t('productCount', {count:products.length});
  $('grid').innerHTML = products.map(p =>
    '<article class="card"><div class="art"><span class="tag">'+esc(t(p.demo?'demo':'catalogTag'))+'</span>'+art(p)+'</div>'+ 
    '<div class="info"><small>'+esc(categoryName(p.category))+'</small><h3>'+esc(productName(p))+'</h3><p>'+esc(p.brand+' '+p.model)+' · '+esc(p.years)+'</p>'+ 
    '<div class="price"><strong>'+Number(p.price).toLocaleString(language==='ka'?'ka-GE':'az-AZ')+' ₾</strong><button data-contact="'+esc(p.id)+'">'+esc(t('contact'))+'</button></div></div></article>'
  ).join('') || '<p>'+esc(t('empty'))+'</p>';
  $('phoneText').textContent = data.phone || t('noPhone');
  $('adminList').innerHTML = data.products.map(p =>
    '<div class="listrow"><span>'+esc(productName(p))+' · '+Number(p.price).toLocaleString(language==='ka'?'ka-GE':'az-AZ')+' ₾</span><div>'+ 
    '<button data-edit="'+esc(p.id)+'" class="ghost">'+esc(t('edit'))+'</button> <button data-delete="'+esc(p.id)+'">'+esc(t('remove'))+'</button></div></div>'
  ).join('');
}
function filters() {
  for (const [id,key,label] of [['brand','brand','allBrands'],['category','category','allCategories']]) {
    const old = $(id).value;
    $(id).innerHTML = '<option value="">'+esc(t(label))+'</option>'+[...new Set(data.products.map(p=>p[key]))].map(value =>
      '<option value="'+esc(value)+'">'+esc(key==='category'?categoryName(value):value)+'</option>'
    ).join('');
    $(id).value = [...$(id).options].some(option=>option.value===old) ? old : '';
  }
}
async function save(nextData) {
  const response = await fetch('/api/catalog', {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(nextData)});
  if (!response.ok) throw Error(response.status===403?'onlineReadOnly':'saveError');
  data = nextData;
  filters();
  render();
  setStatus('saved');
}
function contact(id) {
  if (!data.phone) return alert(t('missingPhone'));
  const product = data.products.find(p=>p.id===id);
  const message = product ? t('inquiry',{...product,name:productName(product)}) : t('generalInquiry');
  window.open('https://wa.me/'+data.phone.replace(/\D/g,'')+'?text='+encodeURIComponent(message),'_blank','noopener');
}
function updateFormTitle() {
  const key = $('pid').value ? 'editProduct' : 'addProduct';
  $('formTitle').setAttribute('data-i18n',key);
  $('formTitle').textContent = t(key);
}
$('adminBtn').onclick = () => $('admin').showModal();
$('close').onclick = () => $('admin').close();
$('contactBtn').onclick = () => contact();
for (const id of ['search','brand','category','sort']) $(id).oninput = render;
$('savePhone').onclick = async () => {
  const phone = $('phone').value.trim();
  if (phone && !/^\+?[0-9\s()-]{8,20}$/.test(phone)) return alert(t('invalidPhone'));
  try { await save({...data,phone}); } catch (error) { setStatus(error.message==='onlineReadOnly'?'onlineReadOnly':'saveError'); }
};
$('reset').onclick = () => {
  $('productForm').reset();
  $('pid').value = '';
  updateFormTitle();
};
$('productForm').onsubmit = async event => {
  event.preventDefault();
  const existing = data.products.find(p=>p.id===$('pid').value);
  const product = {
    ...existing,
    id:$('pid').value || crypto.randomUUID(),
    name:$('name').value.trim(),
    nameKa:$('nameKa').value.trim(),
    brand:$('pbrand').value.trim(),
    model:$('model').value.trim(),
    years:$('years').value.trim(),
    price:Number($('price').value),
    category:$('pcategory').value,
    image:$('image').value.trim()
  };
  const products = [...data.products];
  const index = products.findIndex(p=>p.id===product.id);
  if (index<0) products.unshift(product); else products[index]=product;
  try { await save({...data,products}); $('reset').click(); }
  catch (error) { setStatus(error.message==='onlineReadOnly'?'onlineReadOnly':'saveError'); }
};
document.addEventListener('click',async event => {
  const target = event.target.closest('button');
  if (!target) return;
  if (target.dataset.contact) contact(target.dataset.contact);
  if (target.dataset.edit) {
    const product = data.products.find(p=>p.id===target.dataset.edit);
    if (!product) return;
    for (const [id,key] of [['pid','id'],['name','name'],['nameKa','nameKa'],['pbrand','brand'],['model','model'],['years','years'],['price','price'],['pcategory','category'],['image','image']]) $(id).value = product[key] ?? '';
    updateFormTitle();
    $('name').focus();
  }
  if (target.dataset.delete && confirm(t('deleteConfirm'))) {
    const products = data.products.filter(p=>p.id!==target.dataset.delete);
    try { await save({...data,products}); }
    catch (error) { setStatus(error.message==='onlineReadOnly'?'onlineReadOnly':'saveError'); }
  }
});
document.addEventListener('languagechange',() => {
  filters();
  if (catalogLoaded) render();
  else if ($('grid').dataset.loadError) $('grid').textContent = t('loadError');
  updateFormTitle();
  setStatus(statusKey);
});
fetch('/api/catalog').then(response => {
  if (!response.ok) throw Error();
  return response.json();
}).then(result => {
  data = result;
  catalogLoaded = true;
  $('phone').value = data.phone;
  filters();
  render();
}).catch(() => {
  $('grid').dataset.loadError = 'true';
  $('grid').textContent = t('loadError');
});


