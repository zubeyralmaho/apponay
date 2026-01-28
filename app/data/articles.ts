export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: string;
    readTime: string;
    category: string;
    image?: string;
}

export const articles: Article[] = [
    {
        slug: "apple-developer-odeme-reddedildi-hatasi-cozumu",
        title: "Apple Developer 'Payment Declined' Hatası ve Çözümü",
        excerpt: "Türkiye'den Apple Developer Program'a kayıt olurken en sık karşılaşılan ödeme reddi hatasının sebepleri ve güncel çözüm yöntemleri.",
        category: "Ödeme Sorunları",
        publishedAt: "2024-01-28",
        readTime: "5 dk",
        image: "/payment-declined-error.png",
        content: `
## Apple Developer Ödeme Reddi Nedir?

Apple Developer Program'a kayıt olmak isteyen Türkiye'deki geliştiricilerin büyük çoğunluğu üyelik ücretini öderken "Payment Declined" (Ödeme Reddedildi) hatasıyla karşılaşmaktadır.

**Türkiye'deki Güncel Fiyatlar:**
- Web üzerinden kayıt: **1.029 TL/yıl**
- iPhone/iPad veya Mac uygulaması üzerinden kayıt: **649 TL/yıl**

![Ödeme Reddi Hatası](/payment-declined-error.png)

Yukarıdaki görselde görüldüğü üzere, Apple ödeme sayfasında "kartınızla yapmak istediğiniz ödeme için onay alınamadı" şeklinde bir hata mesajı görüntülenmektedir.

## Neden Bu Hata Oluşuyor?

### 1. Türk Bankalarının Güvenlik Politikaları
Türkiye'deki bankalar, uluslararası abonelik ödemelerinde çeşitli güvenlik önlemleri uygulamaktadır. Apple Developer Program ücreti ödenirken, düzenli bir abonelik işlemi olarak görüldüğünde bazı kartlar tarafından otomatik olarak reddedilebilmektedir.

### 2. BIN Numarası Uyumsuzluğu
Apple'ın ödeme sistemleri belirli BIN numaralarını (kart numarasının ilk 6 hanesi) kabul etmeyebiliyor. Özellikle sanal kartlar ve bazı banka kartları bu kategoriye girmektedir.

### 3. 3D Secure Sorunları
Apple'ın ödeme altyapısı ile Türk bankalarının 3D Secure doğrulama sistemleri arasında zaman zaman uyumsuzluklar yaşanabilmektedir.

## Çözüm Yöntemleri

### Yöntem 1: Farklı Banka Kartı Denemek
İlk adım olarak farklı bir bankanın kredi kartını deneyebilirsiniz. Özellikle uluslararası işlemlerde daha az kısıtlama uygulayan bankalar tercih edilebilir.

### Yöntem 2: In-App Enrollment
iPhone veya iPad üzerinden App Store Connect uygulaması aracılığıyla kayıt olmak, web sitesine göre daha yüksek başarı oranına sahiptir. Bu yöntemde Apple Pay veya App Store'a kayıtlı ödeme yönteminizi kullanabilirsiniz.

### Yöntem 3: Banka ile İletişim
Bankanızı arayarak yurtdışı işlemler için kartınızın limitini açtırabilir veya Apple'a yapılacak ödemeyi önceden onaylatabilirsiniz.

### Yöntem 4: Profesyonel Destek
Yukarıdaki yöntemler işe yaramadıysa, doğrulanmış bir yayıncıdan profesyonel destek alabilirsiniz. Bu hizmet, alternatif ödeme yöntemleri ve güncel çözümlerle hesabınızın açılmasını garantiler.

## Sonuç

Ödeme reddi problemi çözümsüz değildir. Doğru yöntemlerle Apple Developer Program'a başarıyla kayıt olabilirsiniz. Eğer yardıma ihtiyacınız varsa, uzman desteği almaktan çekinmeyin.
    `.trim(),
    },
    {
        slug: "duns-numarasi-nedir-nasil-alinir",
        title: "D-U-N-S Numarası Nedir ve Nasıl Alınır?",
        excerpt: "Apple Developer Program kurumsal hesap başvurusu için gerekli olan D-U-N-S numarasının tüm detayları ve başvuru süreci.",
        category: "Kurumsal Hesap",
        publishedAt: "2024-01-25",
        readTime: "7 dk",
        content: `
## D-U-N-S Numarası Nedir?

D-U-N-S (Data Universal Numbering System), Dun & Bradstreet tarafından dünya genelindeki işletmelere verilen benzersiz 9 haneli bir kimlik numarasıdır. Bu numara, şirketinizin global ticari kimliğini temsil eder.

## Neden Apple D-U-N-S İstiyor?

Apple, kurumsal (Organization/Company) hesap başvurularında şirketinizin gerçekliğini doğrulamak için D-U-N-S numarasını talep eder. Bu sayede:

- Şirketinizin yasal olarak var olduğu doğrulanır
- Ticari geçmişiniz kontrol edilir
- Sahte şirket başvuruları engellenir

## D-U-N-S Numarası Nasıl Alınır?

### Adım 1: Mevcut Numara Kontrolü
Öncelikle şirketinizin zaten bir D-U-N-S numarasına sahip olup olmadığını kontrol edin. Apple'ın D-U-N-S arama sayfasından veya Dun & Bradstreet'in web sitesinden sorgulama yapabilirsiniz.

### Adım 2: Yeni Başvuru
Eğer numaranız yoksa, Apple üzerinden ücretsiz başvuru yapabilirsiniz:

1. [Apple D-U-N-S Başvuru](https://developer.apple.com/enroll/duns-lookup/) sayfasına gidin
2. Şirket bilgilerinizi girin
3. Başvuruyu tamamlayın

### Adım 3: Bekleme Süresi
Standart başvuru süresi 2-4 hafta arasındadır. Acil ihtiyaç durumunda Dun & Bradstreet'ten ücretli hızlandırılmış hizmet alınabilir.

## Sık Karşılaşılan Sorunlar

### 1. Adres Eşleşmeme
Apple sistemlerindeki adres ile Ticaret Sicil Gazetesi'ndeki adresin birebir eşleşmemesi en yaygın sorundur. Bu durumda D-U-N-S kaydınızı güncelletmeniz gerekir.

### 2. Şirket İsmi Farklılıkları
"Ltd.", "Şti.", "A.Ş." gibi kısaltmaların farklı yazılması eşleşme sorunlarına yol açabilir.

### 3. Telefon Doğrulama
Dun & Bradstreet, başvurunuzu doğrulamak için şirket telefonunuzu arayabilir. Bu aramaya cevap verilmesi önemlidir.

## İpuçları

- Ticaret Sicil Gazetesi'ndeki bilgilerinizin güncel olduğundan emin olun
- Şirket adresini tam ve doğru girin
- Başvuru sırasında verdiğiniz telefona ulaşılabilir olun
- Sabırlı olun - süreç zaman alabilir

## Sonuç

D-U-N-S numarası almak ücretsiz ve nispeten kolay bir süreçtir. Ancak Apple sistemleriyle eşleşme sorunları zaman kaybına neden olabilir. Profesyonel destek alarak bu süreci hızlandırabilirsiniz.
    `.trim(),
    },
    {
        slug: "apple-uygulama-reddi-nedenleri-ve-cozumleri",
        title: "Apple Uygulama Reddi: Nedenleri ve Çözümleri",
        excerpt: "App Store'a gönderilen uygulamaların reddedilme sebepleri ve bu retlerin nasıl aşılacağına dair kapsamlı rehber.",
        category: "Uygulama Yayınlama",
        publishedAt: "2024-01-20",
        readTime: "8 dk",
        content: `
## App Store Uygulama Reddi

Uygulamanızı App Store'a gönderdiniz ve "Your app has been rejected" mesajını aldınız. Endişelenmeyin - bu durumla birçok geliştirici karşılaşıyor ve çözümü mümkün.

## En Yaygın Ret Nedenleri

### Guideline 4.3 - Spam
Bu ret, uygulamanızın mevcut App Store uygulamalarına çok benzediği veya aynı geliştiricinin benzer uygulamalar yüklediği anlamına gelir.

**Çözüm:**
- Uygulamanıza özgün özellikler ekleyin
- Kullanıcı deneyimini farklılaştırın
- Benzer uygulamalarınızı birleştirmeyi düşünün

### Guideline 2.3 - Metadata
Uygulama açıklaması, ekran görüntüleri veya anahtar kelimeler ile ilgili sorunlar.

**Çözüm:**
- Yanıltıcı açıklamalardan kaçının
- Ekran görüntülerinin gerçek uygulamayı yansıttığından emin olun
- Uygunsuz anahtar kelimeler kullanmayın

### Guideline 3.1.1 - In-App Purchase
Dijital içerik satışı için Apple'ın ödeme sistemi kullanılmamış.

**Çözüm:**
- Dijital içerikler için In-App Purchase entegre edin
- Fiziksel ürün ve hizmetler için harici ödeme kullanabilirsiniz

### Guideline 5.1.1 - Veri Toplama
Kullanıcı verilerinin nasıl toplandığı ve kullanıldığı hakkında şeffaflık eksikliği.

**Çözüm:**
- Gizlilik politikası ekleyin
- App Tracking Transparency (ATT) uygulayın
- Veri kullanımını açıkça belirtin

## Ret Aldığınızda Ne Yapmalı?

### 1. Resolution Center'ı Kullanın
App Store Connect'teki Resolution Center üzerinden Apple ekibiyle iletişime geçebilirsiniz. Sorunuzu nazik ve profesyonel bir dille açıklayın.

### 2. Detaylı İnceleyin
Apple'ın gönderdiği ret mesajını dikkatlice okuyun. Hangi Guideline'ın ihlal edildiği açıkça belirtilir.

### 3. Düzeltme Yapın
Belirtilen sorunu çözün ve uygulamanızı yeniden gönderin.

### 4. İtiraz Edin (Gerekirse)
Eğer retin haksız olduğunu düşünüyorsanız, App Review Board'a itiraz edebilirsiniz.

## Ret Önleme İpuçları

1. **Guidelines'ı Okuyun**: Apple'ın [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) dokümanını baştan sona okuyun.

2. **Beta Test Yapın**: TestFlight ile kapsamlı test yapın.

3. **Metadata'yı Kontrol Edin**: Açıklama, başlık ve ekran görüntülerinin kurallara uygun olduğundan emin olun.

4. **Crash'leri Düzeltin**: Uygulamanızın stabil çalıştığından emin olun.

## Sonuç

Uygulama reddi sinir bozucu olabilir ancak çözümsüz değildir. Doğru yaklaşımla retlerin büyük çoğunluğu aşılabilir. Eğer süreç size karmaşık geliyorsa, profesyonel danışmanlık almayı düşünebilirsiniz.
    `.trim(),
    },
    {
        slug: "bireysel-vs-kurumsal-apple-developer-hesabi",
        title: "Bireysel vs Kurumsal Apple Developer Hesabı: Hangisini Seçmeli?",
        excerpt: "Apple Developer Program'ın iki farklı hesap tipinin karşılaştırması ve sizin için en uygun olanı belirleme rehberi.",
        category: "Hesap Tipleri",
        publishedAt: "2024-01-15",
        readTime: "4 dk",
        content: `
## Apple Developer Program Hesap Tipleri

Apple Developer Program'a kayıt olurken iki seçenek sunulur: Bireysel (Individual) ve Kurumsal (Organization). Doğru seçimi yapmak önemlidir.

## Bireysel Hesap (Individual)

### Özellikler
- Tek bir kişi adına açılır
- Uygulamalar "Kişi Adı" olarak yayınlanır
- Web: 1.029 TL/yıl, Mobil: 649 TL/yıl üyelik ücreti
- Hemen açılabilir (ödeme başarılı olursa)

### Ne Zaman Tercih Edilmeli?
- Hobi olarak uygulama geliştiriyorsanız
- Freelancer olarak çalışıyorsanız
- Şirket kimliğine ihtiyaç duymuyorsanız
- Hızlıca başlamak istiyorsanız

### Dezavantajları
- Uygulamada kendi adınız görünür
- Ekip üyesi davet edemezsiniz
- Kurumsal güvenilirlik sağlamaz

## Kurumsal Hesap (Organization)

### Özellikler
- Şirket adına açılır
- Uygulamalar "Şirket Adı" olarak yayınlanır
- Web: 1.029 TL/yıl, Mobil: 649 TL/yıl üyelik ücreti
- D-U-N-S numarası gerektirir
- Açılış süreci 1-4 hafta sürebilir

### Ne Zaman Tercih Edilmeli?
- Profesyonel/ticari uygulama yayınlayacaksanız
- Şirket kimliği önemliyse
- Birden fazla geliştirici çalışacaksa
- Müşterilerinize kurumsal güven vermek istiyorsanız

### Avantajları
- Profesyonel görünüm
- Ekip yönetimi özellikleri
- Farklı rollerde kullanıcı davet edebilme
- Kurumsal güvenilirlik

## Karşılaştırma Tablosu

| Özellik | Bireysel | Kurumsal |
|---------|----------|----------|
| Ücret | Web: 1.029 TL, Mobil: 649 TL | Web: 1.029 TL, Mobil: 649 TL |
| Yayıncı Adı | Kişi Adı | Şirket Adı |
| D-U-N-S | Gerekli Değil | Gerekli |
| Açılış Süresi | Anında | 1-4 Hafta |
| Ekip Yönetimi | Yok | Var |
| Roller | Tek Sahip | Çoklu Roller |

## Sonuç

- **Hobici/Freelancer**: Bireysel hesap yeterli
- **Start-up/Şirket**: Kurumsal hesap önerilir
- **Ajans**: Kurumsal hesap şart

Karar vermekte zorlanıyorsanız, uzman desteği alarak en doğru seçimi yapabilirsiniz.
    `.trim(),
    },
];
