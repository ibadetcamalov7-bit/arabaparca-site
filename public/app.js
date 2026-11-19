let data = { products: [], phone: '' };

const $ = id => document.getElementById(id);

const esc = s => String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[c]));

function art(p) {
    if (p.image) return '<img alt="' + esc(p.name) + '" src="' + esc(p.image) + '" loading="lazy">';
    
    let shape = p.category === 'Əyləc sistemi' 
        ? '<circle cx="80" cy="80" r="58" fill="#687482" stroke="#273442" stroke-width="9"/><circle cx="80" cy="80" r="24" fill="#d5dce1"/><circle cx="80" cy="80" r="8" fill="#253242"/><path d="M46 45L56 58M103 43L95 57M44 110L58 100M112 111L100 100" stroke="#cbd3da" stroke-width="7"/>' 
        : p.category === 'İşıqlandırma' 
        ? '<path d="M19 68Q45 31 130 43L143 104Q80 128 19 103Z" fill="#344657" stroke="#63778a" stroke-width="5"/><path d="M30 76Q65 55 128 57L132 94Q78 111 32 94Z" fill="#c5dfeb"/><circle cx="91" cy="81" r="19" fill="#f5fafc" stroke="#849baa" stroke-width="7"/>' 
        : '<path d="M38 35H120V125H38Z" fill="#485768" stroke="#263241" stroke-width="5"/><path d="M48 48H110M48 61H110M48 74H110M48 87H110M48 100H110M48 113H110" stroke="#92a0ad" stroke-width="6"/><path d="M60 24H98V35H60ZM60 125H98V137H60Z" fill="#243443"/>';
        
    return '<svg viewBox="0 0 160 160" role="img" aria-label="Hissənin sxematik təsviri">' + shape + '</svg>';
}

function render() {
    let ps = data.products.filter(p => 
        (p.name + ' ' + p.brand + ' ' + p.model + ' ' + p.years).toLocaleLowerCase().includes($('search').value.toLocaleLowerCase()) && 
        (!$('brand').value || p.brand === $('brand').value) && 
        (!$('category').value || p.category === $('category').value)
    );

    if ($('sort').value !== 'default') {
        ps.sort((a, b) => $('sort').value === 'low' ? a.price - b.price : b.price - a.price);
    }

    $('count').textContent = ps.length + ' məhsul';
    
    $('grid').innerHTML = ps.map(p => 
        '<article class="card"><div class="art"><span class="tag">' + (p.demo ? 'Nümunə' : 'Kataloq') + '</span>' + art(p) + '</div><div class="info"><small>' + esc(p.category) + '</small><h3>' + esc(p.name) + '</h3><p>' + esc(p.brand + ' ' + p.model) + ' · ' + esc(p.years) + '</p><div class="price"><strong>' + Number(p.price).toLocaleString() + ' ₾</strong><button data-contact="' + esc(p.id) + '">Əlaqə ↗</button></div></div></article>'
    ).join('') || '<p>Uyğun məhsul tapılmadı.</p>';

    $('phoneText').textContent = data.phone || 'Əlaqə nömrəsi hələ daxil edilməyib.';
    $('phone').value = data.phone;
    
    $('adminList').innerHTML = data.products.map(p => 
        '<div class="listrow"><span>' + esc(p.name) + ' · ' + p.price + ' ₾</span><div><button data-edit="' + esc(p.id) + '" class="ghost">Redaktə</button> <button data-delete="' + esc(p.id) + '">Sil</button></div></div>'
    ).join('');
}

function filters() {
    for (let [id, key, label] of [['brand', 'brand', 'Bütün markalar'], ['category', 'category', 'Bütün kateqoriyalar']]) {
        let old = $(id).value;
        $(id).innerHTML = '<option value="">' + label + '</option>' + [...new Set(data.products.map(p => p[key]))].map(v => '<option>' + esc(v) + '</option>').join('');
        $(id).value = old;
    }
}

async function save() {
    let r = await fetch('/api/catalog', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    
    if (!r.ok) throw Error('Saxlama alınmadı. Yenidən cəhd et.');
    filters();
    render();
    $('status').textContent = 'Dəyişiklik saxlanıldı.';
}

function contact(id) {
    if (!data.phone) {
        alert('Mağazanın əlaqə nömrəsi hələ əlavə edilməyib. İdarəetmə panelindən daxil et.');
        return;
    }
    
    let p = data.products.find(x => x.id === id);
    window.open('https://wa.me/' + data.phone.replace(/\D/g, '') + '?text=' + encodeURIComponent(p ? 'Salam, ' + p.brand + ' ' + p.model + ' (' + p.years + ') modeli üçün ' + p.name + ' haqqında məlumat istəyirəm.' : 'Salam, ehtiyat hissəsi haqqında məlumat istəyirəm.'), '_blank', 'noopener');
}

$('adminBtn').onclick = () => $('admin').showModal();
$('close').onclick = () => $('admin').close();
$('contactBtn').onclick = () => contact();

for (let id of ['search', 'brand', 'category', 'sort']) {
    $(id).oninput = render;
}

$('savePhone').onclick = async () => {
    let phone = $('phone').value.trim();
    if (phone && !/^\+?[0-9\s()-]{8,20}$/.test(phone)) return alert('Telefon nömrəsini ölkə kodu ilə daxil et.');
    data.phone = phone;
    try {
        await save();
    } catch (e) {
        $('status').textContent = e.message;
    }
};

$('reset').onclick = () => {
    $('productForm').reset();
    $('pid').value = '';
    $('formTitle').textContent = 'Məhsul əlavə et';
};

$('productForm').onsubmit = async e => {
    e.preventDefault();
    
    let p = {
        id: $('pid').value || crypto.randomUUID(),
        name: $('name').value.trim(),
        brand: $('pbrand').value.trim(),
        model: $('model').value.trim(),
        years: $('years').value.trim(),
        price: Number($('price').value),
        category: $('pcategory').value,
        image: $('image').value.trim()
    };
    
    let i = data.products.findIndex(x => x.id === p.id);
    if (i < 0) data.products.unshift(p);
    else data.products[i] = p;
    
    try {
        await save();
        $('reset').click();
    } catch (e) {
        $('status').textContent = e.message;
    }
};

document.onclick = async e => {
    let t = e.target;
    
    if (t.dataset.contact) contact(t.dataset.contact);
    
    if (t.dataset.edit) {
        let p = data.products.find(x => x.id === t.dataset.edit);
        for (let [id, key] of [['pid', 'id'], ['name', 'name'], ['pbrand', 'brand'], ['model', 'model'], ['years', 'years'], ['price', 'price'], ['pcategory', 'category'], ['image', 'image']]) {
            $(id).value = p[key] || '';
        }
        $('formTitle').textContent = 'Məhsulu redaktə et';
        $('name').focus();
    }
    
    if (t.dataset.delete && confirm('Məhsul silinsin?')) {
        data.products = data.products.filter(x => x.id !== t.dataset.delete);
        try {
            await save();
        } catch (e) {
            $('status').textContent = e.message;
        }
    }
};

fetch('/api/catalog')
    .then(r => {
        if (!r.ok) throw Error();
        return r.json();
    })
    .then(d => {
        data = d;
        filters();
        render();
    })
    .catch(() => {
        $('grid').textContent = 'Kataloq yüklənmədi. Səhifəni yenilə.';
    });