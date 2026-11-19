# TONY Auto Parts — Azərbaycan və gürcü dilləri

Göndərdiyin ZIP əsasında hazırlanıb. Dizayn, 6 nümunə məhsul, qiymətlər və marka/model məlumatları saxlanılıb. Məhsulların gürcücə adları əlavə olunub.

## Kompüterdə açmaq

1. ZIP-i çıxart və `tony-auto-parts` qovluğunu VS Code-da aç.
2. Terminalda `npm start` yaz.
3. Brauzerdə `http://localhost:3000` aç.

Əlavə paket quraşdırmağa ehtiyac yoxdur. Node.js tələb olunur.

## Dil seçimi

- Yuxarıdakı **AZ** — Azərbaycan dili, **KA** — gürcü dili.
- Menyu, səhifə mətnləri, məhsul adları, kateqoriyalar, idarəetmə paneli, bildirişlər və WhatsApp mesajları dilə uyğun dəyişir.
- Seçilmiş dil brauzerdə yadda saxlanır.
- Birbaşa dil seçmək üçün sayt linkinin sonuna `?lang=az` və ya `?lang=ka` əlavə et.
- Yeni məhsul üçün idarəetmə panelində Azərbaycan və gürcü adlarını ayrı xanalara yaz. Gürcü adı boşdursa, Azərbaycan adı göstərilir. Yeni adların avtomatik tərcüməsi yoxdur.
- Axtarış hər iki dildə yazılmış məhsul adlarını tapır. Dil dəyişəndə marka, kateqoriya və sıralama seçimi saxlanır.

## GitHub və Render-də yeniləmək

Bu addımlar mövcud saytı ikidilli edir; yeni Render servisi və ya domen yaratmağa ehtiyac yoxdur.

1. Əvvəl mövcud GitHub layihəndən ZIP ehtiyat nüsxəsini saxla.
2. Bu qovluğun **içindəkiləri** (data, public, package.json, README.md, server.js) mövcud GitHub layihəsinin əsas qovluğuna yüklə. `public` içindəki yeni `i18n.js` də mütləq yüklənməlidir.
3. Dəyişiklikləri **Commit changes** ilə saxla.
4. Render-də avtomatik yerləşdirmə aktivdirsə, yeniləmə başlayacaq. Aktiv deyilsə, mövcud servisdə **Manual Deploy → Deploy latest commit** istifadə et.
5. Yerləşdirmə uğurla bitəndə mövcud sayt linkini aç, AZ/KA düymələrini yoxla.

**Diqqət:** bu ZIP-də telefon nömrəsi boşdur və 6 nümunə məhsul var. Canlı saytda əlavə etdiyin başqa məhsul və ya telefon varsa, `data/catalog.json` faylını əvəz etməzdən əvvəl həmin məlumatları yeni fayla köçür. İki dil üçün məhsulda `name` (AZ) və `nameKa` (KA) sahələri istifadə olunur.

Render üçün mövcud ayarlar: Language `Node`, Branch `main`, Root Directory boş, Build Command `npm install`, Start Command `npm start`. Server Render-in `PORT` dəyişənini qəbul edir.

## Məhsul redaktəsi

Bu versiyada onlayn məhsul/telefon dəyişikliklərinin saxlanılması əvvəlki kimi bağlıdır. Dil seçimi isə onlayn işləyir.

Kompüterdə localhost üzərindən məhsulu dəyişib saxlayanda `data/catalog.json` yenilənir. Canlı sayta çıxması üçün yenilənmiş JSON faylını GitHub-a da yüklə. Onlayn redaktə üçün ayrıca giriş sistemi və davamlı məlumat saxlanması qurulmalıdır. Origin məhdudiyyəti giriş şifrəsi hesab olunmur.

## Fayllar

- `public/index.html`: səhifənin quruluşu.
- `public/i18n.js`: AZ/KA mətnləri və dil seçimi.
- `public/app.js`: kataloq, axtarış, filtrlər və idarəetmə.
- `public/style.css`: dizayn.
- `data/catalog.json`: məhsul və telefon məlumatları.
- `server.js`: Node.js serveri.
