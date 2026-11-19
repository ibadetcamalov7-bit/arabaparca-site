# TONY Auto Parts

Avtomobil ehtiyat hissələri mağazası — frontend və Node.js backend.

## İşə salmaq
1. Node.js 18 və ya daha yeni versiya quraşdırılmalıdır.
2. Bu qovluğu VS Code-da aç.
3. Terminalda `npm start` yaz. Əlavə paket və `npm install` lazım deyil.
4. Brauzerdə http://localhost:3000 aç. HTML faylını təkbaşına açma.

## Fayllar
- public/index.html — səhifənin quruluşu.
- public/style.css — dizayn və mobil uyğunlaşma.
- public/app.js — axtarış, filtrlər, sıralama, admin forması, WhatsApp.
- server.js — HTTP serveri, yoxlamalar və API.
- data/catalog.json — məhsullar və telefon; server bağlanandan sonra da saxlanır.

## Yoxlama
Kataloqdan marka seç. İdarəetmədə məhsul əlavə et, qiymətini dəyiş, sonra səhifəni yenilə. Dəyişiklik qalmalıdır. Nümunə məhsulu silməzdən əvvəl təsdiq istənir. Telefonu ölkə kodu ilə əlavə etdikdə WhatsApp düyməsi işləyir. Qiymətlər nümunədir və Gürcüstan larisi ilədir. Mövcud təsvirlər sxematikdir; admin panelində real şəkil üçün HTTPS URL daxil edilə bilər.

## Lektora izah etmək üçün
Brauzer GET /api/catalog ilə məlumatı alır. JavaScript məhsul kartlarını yaradır. Axtarış və filtrləmə brauzerdə aparılır. Admin forması PUT /api/catalog göndərir. Server məlumatları yoxlayır və JSON faylına yazır. Əlavə SQL bazası tələb olunmur.

## Məhdudiyyət
Bu lokal tədris/nümayiş layihəsidir. Server yalnız 127.0.0.1-də açılır. Ayrı admin autentifikasiyası və onlayn ödəniş yoxdur. İctimai satışdan əvvəl autentifikasiya, verilənlər bazası və uyğun giriş icazələri qurulmalıdır. Paralel çoxistifadəçili mağaza üçün JSON əvəzinə verilənlər bazası seçilməlidir.
