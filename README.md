# Web Geliştirme; JavaScript — Lila Fotoğraf Galerisi

React ve CSS ile geliştirilmiş kişisel fotoğraf günlüğü. Fotoğraf ve yorumlar IndexedDB ile aynı tarayıcıda kalıcı olarak saklanır. Backend veya hesap gerektirmez.

[Canlı uygulama](https://sevval-taskflow.netlify.app)

## Özellikler
- Cihazdan JPG, PNG, WebP veya GIF yükleme (en fazla 10 MB)
- Fotoğrafları kartlar ve büyük detay görünümüyle listeleme
- Fotoğrafı, başlığı, açıklamayı ve albümü düzenleme
- Onay sonrası fotoğrafı ve bağlı yorumları silme
- Her fotoğrafa yorum ekleme, düzenleme ve silme
- Albüm filtresi ve Türkçe başlık/açıklama araması
- Masaüstü ve mobil görünüm
- Yenileme sonrası fotoğraf ve yorumların korunması

## Kurulum
Node.js 22.12 veya üstünü kurun. Proje kökünde:

```bash
npm ci
npm run dev
```

Terminaldeki yerel adresi açın. Üretim çıktısı için `npm run build`, kontrol için `npm run preview` kullanın. `dist/` klasörü statik yayına hazırdır. Netlify ayarları `netlify.toml` dosyasındadır.

## Kullanım
“Fotoğraf ekle” düğmesinden dosya seçip başlık ve albüm girin. Karttaki fotoğrafa tıklayarak detayını açın. “Düzenle” ile başlık, açıklama, albüm veya fotoğraf dosyasını değiştirin. Detaydaki yorum alanı üzerinden not ekleyin; her yorumun altındaki düğmelerle düzenleyin veya silin. “Fotoğrafı sil” düğmesinden sonra onay vererek fotoğrafı kaldırın.

İlk açılışta üç örnek fotoğraf gösterilir. Kendi fotoğraflarınız sunucuya yüklenmez; tarayıcı depolamasında kalır. Veriler başka cihazlara aktarılmaz. Tarayıcı verilerini silmek fotoğraf ve yorumları da kaldırır. Depolama kotası tarayıcıya bağlıdır; kaydetme başarısızsa uygulama hata mesajı gösterir. Eski görev uygulamasındaki kayıtlar galeri verisine dönüştürülmez.

## Klasör yapısı
```text
public/images/       Örnek fotoğraflar
src/Components/      Fotoğraf formu ve detay/yorum bileşeni
src/Pages/           Galeri sayfası
src/Interfaces/      Fotoğraf modeli, albümler, örnek kayıtlar
src/storage.js       IndexedDB okuma ve yazma
src/style.css        Mor temalı responsive tasarım
docs/                Test notları ve ekran görüntüleri
```

## Yönerge karşılığı
| Gereksinim | Uygulamadaki karşılığı |
|---|---|
| JavaScript kütüphanesi | React |
| CSS | Pure CSS |
| Ekle | Fotoğraf ve yorum ekleme |
| Listele | Galeri kartları ve yorum listesi |
| Güncelle | Fotoğraf bilgileri ve yorum düzenleme |
| Sil | Fotoğraf ve yorum silme |
| Ekran görüntüsü | docs/ klasörü |
| Public GitHub ve canlı yayın | Bu repo ve yukarıdaki Netlify adresi |

Tarayıcı testleri [Test-Notlari.md](docs/Test-Notlari.md) dosyasındadır.

## Örnek görseller
Üç örnek fotoğraf Unsplash üzerinden alınmış, `public/images/` altında tutulmuştur. Görsel kaynakları:
- [Dağ manzarası](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b)
- [Orman ve nehir](https://images.unsplash.com/photo-1473448912268-2022ce9509d8)
- [Şehir manzarası](https://images.unsplash.com/photo-1477959858617-67f85cf4f1df)
