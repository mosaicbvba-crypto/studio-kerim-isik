# Studio Kerim Işık

Cinematik, editoryal bir düğün fotoğrafçılığı & sinematografi web sitesi. Karamürsel, Kocaeli merkezli **Studio Kerim Işık** için tasarlandı.

## ⚠️ Geçici görseller hakkında önemli not

`/public/images/` klasöründeki tüm fotoğraflar **geçici, yer tutucu görsellerdir**. Bunlar Wikimedia Commons üzerinden alınmış, CC0 lisanslı (serbestçe kullanılabilir) stok fotoğraflardır ve **Studio Kerim Işık'ın gerçek müşterileri veya çekimleri değildir**. Bu görseller yalnızca tasarımı önizlemek amacıyla kullanılmıştır.

**Site canlıya alınmadan önce bu görsellerin tamamı stüdyonun gerçek çekimleriyle değiştirilmelidir.** Dosya adları sabit tutulmuştur, böylece gerçek fotoğraflar aynı isimlerle klasöre bırakılarak site anında güncellenebilir (örn. `hero-wedding.jpg`, `outdoor-01.jpg`, `scene-toren.jpg` vb. — tam liste için `lib/data.ts` dosyasına bakın).

## Teknoloji

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- `next/font` ile Google Fonts: Cormorant Garamond, Manrope, Parisienne

## Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

```bash
npm run build   # üretim derlemesi
npm run start   # üretim sunucusu
```

## Yapı

- `app/` — sayfa, layout, global stiller ve SEO/JSON-LD metadata
- `components/` — bölüm bazlı React bileşenleri (Hero, Portfolio, Services, vb.)
- `lib/data.ts` — site metinleri, galeri verisi, hizmetler, bölgeler (tek kaynak)
- `public/images/` — görseller (yukarıdaki notu okuyun)

## İletişim bilgileri

Site içindeki WhatsApp, Instagram ve harita bağlantıları `lib/data.ts` içinde tek bir yerden yönetilir.
