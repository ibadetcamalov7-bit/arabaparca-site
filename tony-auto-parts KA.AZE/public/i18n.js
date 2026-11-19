// UI translations. Category values and product IDs remain stable across languages.
const translations = {
 az: {
  catalog:'Kataloq',contact:'Əlaqə',management:'İdarəetmə',language:'Saytın dili',
  eyebrow:'AVTOMOBİLİN ÜÇÜN DOĞRU SEÇİM',headline1:'Doğru hissə.',headline2:'Yeni bir yol.',
  intro:'Avtomobilinə uyğun ehtiyat hissəsini tap, qiymətinə bax və mağaza ilə birbaşa əlaqə saxla.',
  browse:'Kataloqa bax',badge1:'◈ Model və il üzrə seçim',badge2:'◈ Rahat axtarış',badge3:'◈ Birbaşa əlaqə',
  parts:'Ehtiyat hissələri',subtitle:'Avtomobilinə lazım olan burada.',searchPlaceholder:'Hissənin adını və ya modeli axtar…',searchLabel:'Hissə axtar',
  brand:'Marka',category:'Kateqoriya',sort:'Sıralama',allBrands:'Bütün markalar',allCategories:'Bütün kateqoriyalar',
  newest:'Əvvəlcə yenilər',priceLow:'Qiymət: artan',priceHigh:'Qiymət: azalan',
  demoNote:'İlkin baxış versiyasıdır. Nümunə məhsul və qiymətlər real stok təklifi deyil.',
  needHelp:'Uyğun hissəni tapa bilmədin?',helpText:'Modeli və istehsal ilini bildir, mağaza ilə əlaqə saxla.',whatsapp:'WhatsApp ilə əlaqə',
  footer:'CAMALOV AUTO PARTS © 2026 · Ehtiyat hissələri mağazası',adminTitle:'İdarəetmə paneli',close:'Bağla',
  adminNote:'Bu versiyada dəyişikliklərin saxlanılması yalnız localhost-da işləyir. Onlayn idarəetmə üçün qorunan giriş əlavə edilməlidir.',
  shopContact:'Mağazanın əlaqəsi',phonePlaceholder:'Ölkə kodu ilə telefon, məsələn +995…',phone:'Telefon',save:'Saxla',
  addProduct:'Məhsul əlavə et',editProduct:'Məhsulu redaktə et',nameAz:'Hissənin adı (azərbaycanca)',nameKa:'Hissənin adı (gürcücə, istəyə bağlı)',
  model:'Model',years:'Uyğun illər',price:'Qiymət (₾)',imageUrl:'Şəkil URL-i (istəyə bağlı)',saveProduct:'Məhsulu saxla',reset:'Təmizlə',
  lighting:'İşıqlandırma',brakes:'Əyləc sistemi',engine:'Mühərrik',body:'Kuzov',suspension:'Asqı sistemi',
  productCount:'{count} məhsul',demo:'NÜMUNƏ',catalogTag:'KATALOQ',empty:'Uyğun məhsul tapılmadı.',noPhone:'Əlaqə nömrəsi hələ daxil edilməyib.',
  edit:'Redaktə',remove:'Sil',schematic:'Hissənin sxematik təsviri',saved:'Dəyişiklik saxlanıldı.',
  saveError:'Saxlama alınmadı. Yenidən yoxla.',onlineReadOnly:'Onlayn redaktə bu versiyada bağlıdır. Dəyişiklikləri localhost-da saxla və data/catalog.json faylını GitHub-da yenilə.',
  missingPhone:'Mağazanın əlaqə nömrəsi hələ əlavə edilməyib. İdarəetmə panelindən daxil et.',invalidPhone:'Telefon nömrəsini ölkə kodu ilə daxil et.',
  deleteConfirm:'Məhsul silinsin?',loadError:'Kataloq yüklənmədi. Səhifəni yenilə.',
  inquiry:'Salam, {brand} {model} ({years}) üçün {name} haqqında məlumat istəyirəm.',generalInquiry:'Salam, ehtiyat hissəsi haqqında məlumat istəyirəm.'
 },
 ka: {
  catalog:'კატალოგი',contact:'კონტაქტი',management:'მართვა',language:'საიტის ენა',
  eyebrow:'სწორი არჩევანი შენი ავტომობილისთვის',headline1:'სწორი ნაწილი.',headline2:'ახალი გზა.',
  intro:'იპოვე შენი ავტომობილისთვის შესაფერისი სათადარიგო ნაწილი, ნახე ფასი და პირდაპირ დაუკავშირდი მაღაზიას.',
  browse:'კატალოგის ნახვა',badge1:'◈ არჩევანი მოდელისა და წლის მიხედვით',badge2:'◈ მარტივი ძიება',badge3:'◈ პირდაპირი კონტაქტი',
  parts:'სათადარიგო ნაწილები',subtitle:'რაც შენს ავტომობილს სჭირდება, აქ არის.',searchPlaceholder:'მოძებნე ნაწილის სახელი ან მოდელი…',searchLabel:'ნაწილის ძიება',
  brand:'მარკა',category:'კატეგორია',sort:'დალაგება',allBrands:'ყველა მარკა',allCategories:'ყველა კატეგორია',
  newest:'ჯერ ახალი დამატებული',priceLow:'ფასი: ზრდადობით',priceHigh:'ფასი: კლებადობით',
  demoNote:'ეს არის სადემონსტრაციო ვერსია. ნაჩვენები პროდუქტები და ფასები რეალურ მარაგს არ ასახავს.',
  needHelp:'შესაფერისი ნაწილი ვერ იპოვე?',helpText:'მიუთითე მოდელი და გამოშვების წელი და დაუკავშირდი მაღაზიას.',whatsapp:'დაკავშირება WhatsApp-ით',
  footer:'CAMALOV AUTO PARTS © 2026 · სათადარიგო ნაწილების მაღაზია',adminTitle:'მართვის პანელი',close:'დახურვა',
  adminNote:'ამ ვერსიაში ცვლილებების შენახვა მხოლოდ localhost-ზე მუშაობს. ონლაინ მართვისთვის საჭიროა დაცული შესვლის დამატება.',
  shopContact:'მაღაზიის საკონტაქტო ინფორმაცია',phonePlaceholder:'ტელეფონი ქვეყნის კოდით, მაგალითად +995…',phone:'ტელეფონი',save:'შენახვა',
  addProduct:'პროდუქტის დამატება',editProduct:'პროდუქტის რედაქტირება',nameAz:'ნაწილის სახელი (აზერბაიჯანულად)',nameKa:'ნაწილის სახელი (ქართულად, არასავალდებულო)',
  model:'მოდელი',years:'შესაბამისი წლები',price:'ფასი (₾)',imageUrl:'სურათის URL (არასავალდებულო)',saveProduct:'პროდუქტის შენახვა',reset:'გასუფთავება',
  lighting:'განათება',brakes:'სამუხრუჭე სისტემა',engine:'ძრავა',body:'ძარა',suspension:'დაკიდების სისტემა',
  productCount:'{count} პროდუქტი',demo:'ნიმუში',catalogTag:'კატალოგი',empty:'შესაფერისი პროდუქტი ვერ მოიძებნა.',noPhone:'საკონტაქტო ნომერი ჯერ არ არის მითითებული.',
  edit:'რედაქტირება',remove:'წაშლა',schematic:'ნაწილის სქემატური გამოსახულება',saved:'ცვლილება შენახულია.',
  saveError:'შენახვა ვერ მოხერხდა. სცადე ხელახლა.',onlineReadOnly:'ამ ვერსიაში ონლაინ რედაქტირება გამორთულია. შეინახე ცვლილებები localhost-ზე და განაახლე data/catalog.json ფაილი GitHub-ზე.',
  missingPhone:'მაღაზიის საკონტაქტო ნომერი ჯერ არ არის დამატებული. მიუთითე მართვის პანელში.',invalidPhone:'მიუთითე ტელეფონის ნომერი ქვეყნის კოდით.',
  deleteConfirm:'წაიშალოს პროდუქტი?',loadError:'კატალოგი ვერ ჩაიტვირთა. განაახლე გვერდი.',
  inquiry:'გამარჯობა, მაინტერესებს {brand} {model} ({years}) მოდელისთვის {name}.',generalInquiry:'გამარჯობა, მაინტერესებს ინფორმაცია სათადარიგო ნაწილის შესახებ.'
 }
};
let language = 'az';
try {
 const requested = new URLSearchParams(location.search).get('lang');
 const saved = localStorage.getItem('tony-language');
 language = requested === 'az' || requested === 'ka' ? requested : saved === 'ka' ? 'ka' : 'az';
} catch { /* Optional preference only. */ }
function t(key, values = {}) {
 return (translations[language][key] ?? translations.az[key] ?? key).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
}
const categoryKeys = {'İşıqlandırma':'lighting','Əyləc sistemi':'brakes','Mühərrik':'engine','Kuzov':'body','Asqı sistemi':'suspension'};
function categoryName(value) { return categoryKeys[value] ? t(categoryKeys[value]) : value; }
function productName(product) { return language === 'ka' && product.nameKa ? product.nameKa : product.name; }
function applyLanguage() {
 document.documentElement.lang = language;
 document.title = language === 'ka' ? 'CAMALOV | სათადარიგო ნაწილები' : 'CAMALOV | Auto Parts';
 for (const [attribute,target] of [['data-i18n',null],['data-i18n-placeholder','placeholder'],['data-i18n-aria','aria-label']]) {
  document.querySelectorAll(`[${attribute}]`).forEach(element => {
   const value = t(element.getAttribute(attribute));
   if (target) element.setAttribute(target,value); else element.textContent = value;
  });
 }
 document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === language)));
}
function setLanguage(next) {
 if (next !== 'az' && next !== 'ka') return;
 language = next;
 try { localStorage.setItem('tony-language',next); } catch { /* Optional preference only. */ }
 const url = new URL(location.href);
 url.searchParams.set('lang',next);
 history.replaceState(null,'',url);
 applyLanguage();
 document.dispatchEvent(new Event('languagechange'));
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
applyLanguage();
