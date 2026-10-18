# Web Geliştirme; JavaScript — TaskFlow

[Canlı uygulama](https://sevval-taskflow.netlify.app)

React ile geliştirilen görev takip uygulaması. Görevler tarayıcının LocalStorage alanında saklanır. Backend sunucusuna ihtiyaç duymaz.

## Özellikler
- Görev ekleme ve listeleme
- Başlık, açıklama, durum, öncelik ve hedef tarihini güncelleme
- Onay penceresi ile görev silme
- Türkçe metin araması ve duruma göre filtreleme
- Toplam, devam eden, tamamlanan görev sayıları ve ilerleme yüzdesi
- Telefon, tablet ve masaüstüne uyumlu CSS
- Sayfa yenilendiğinde verilerin korunması

## Çalıştırma
Node.js 22.12 veya üstünü kurun. Projenin kök klasöründe:

```bash
npm ci
npm run dev
```

Terminalde yazan yerel adresi açın. Durdurmak için Ctrl+C kullanın.

## Üretim ve yayın
```bash
npm run build
npm run preview
```

`dist/` klasörü statik yayına hazır çıktıdır. Netlify veya benzeri bir serviste build komutu `npm run build`, yayın klasörü `dist` olarak ayarlanır. `netlify.toml` dosyası bu ayarları içerir.

## Klasör yapısı
```text
src/
  Components/   Görev kartı ve görev formu
  Pages/        Görev panosu
  Interfaces/   Görev veri yapısı ve sabitler
  main.jsx      React giriş noktası
  style.css     Responsive CSS
```

## Kullanım
“Yeni görev” ile formu açın, başlık girip kaydedin. Kartın sağ üstündeki ok ile görev bilgilerini düzenleyin. Kart altındaki durum menüsü ilerlemeyi değiştirir. “Sil” düğmesi onay sonrası görevi kaldırır. Arama ve durum sekmeleri görüntülenen listeyi daraltır.

İlk açılışta dört örnek görev gösterilir. Veriler cihazlar veya tarayıcılar arasında paylaşılmaz. Tarayıcı verilerinin temizlenmesi görevleri kaldırır. Bu proje backend eğitimindeki TaskFlow API'sinden bağımsızdır.

## Test ve proje çıktıları
Tarayıcıda ekleme, listeleme, açıklama güncelleme, silme, arama ve yenileme sonrası kalıcılık kontrol edilmiştir. Ayrıntılar [test notlarında](docs/Test-Notlari.md), uygulama görüntüleri `docs/` klasöründedir.
