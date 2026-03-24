# ComTime

Şık, sade ve büyük dijital masaüstü saat uygulaması. Electron tabanlı.

![ComTime](https://img.shields.io/badge/Platform-Windows-blue) ![Version](https://img.shields.io/badge/Version-1.0.0-green)

## Özellikler

### Saat Modu
- Büyük dijital saat kutucukları
- Yukarıdan aşağı kayan animasyonlu rakam geçişi
- Türkiye saati (UTC+3) ve Türkçe tarih

### Kronometre Modu
- Büyük dijital kutucuklarla dakika:saniye.salise
- Başlat / Durdur / Devam
- Tur kayıtları

### Sayaç Modu
- Saat / Dakika / Saniye ile süre belirle
- Büyük dijital kutucuklarla geri sayım
- Süre dolunca sesli uyarı

### Genel
- Açık / Koyu tema (tek tıkla geçiş)
- Modlar arası animasyonlu sola kayma geçişi
- Pencere boyutuna otomatik uyum
- Her zaman üstte kalma
- System tray desteği
- `Ctrl+Shift+T` ile göster/gizle
- Çerçevesiz (frameless) şık tasarım

## Kurulum

### Gereksinim
- [Node.js](https://nodejs.org) (LTS sürümü)

### Hızlı Başlangıç
```bash
git clone https://github.com/ahmetaltiok/comtime.git
cd comtime
npm install
npm start
```

### Windows Kurulum Dosyası Oluşturma (.exe)
```bash
npm run build
```
`dist/` klasöründe `ComTime-Setup-1.0.0.exe` dosyası oluşur.

### Alternatif: BAT Dosyaları
- **KURULUM.bat** — Otomatik build + setup exe oluşturma
- **CALISTIR.bat** — Doğrudan çalıştırma (Node.js gerekli)

## Kısayollar
| Kısayol | İşlev |
|---------|-------|
| `Ctrl+Shift+T` | Pencereyi göster/gizle |
| Sağ tık (tray) | Menü |

## Teknolojiler
- Electron
- HTML/CSS/JavaScript
- Inter font

## Lisans
MIT
