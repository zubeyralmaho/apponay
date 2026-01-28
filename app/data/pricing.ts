export interface Service {
    name: string;
    type: string;
    description: string[];
    targetAudience: string;
    price: string;
    popular?: boolean;
}

export interface AddonService {
    name: string;
    description: string;
    price: string;
}

export const mainServices: Service[] = [
    {
        name: "Apple Kilit Açma Rehberi",
        type: "Dijital Ürün / PDF",
        description: [
            '"In-App" ödeme yöntemi anlatımı',
            "Banka/Kart ayarları kontrol listesi",
            "Adım adım ekran görüntüleri",
            "Destek yok, kendi kendine yap",
        ],
        targetAudience: "Öğrenciler, bütçesi kısıtlı geliştiriciler",
        price: "750",
    },
    {
        name: "Bireysel Hesap Kurtarma",
        type: "Danışmanlık",
        description: [
            "30 dk Online Görüşme (Google Meet)",
            "Uzaktan bağlantı ile ödeme işlemi",
            "Banka retlerini aşma taktikleri",
            "Kimlik doğrulama desteği",
        ],
        targetAudience: "Vakti değerli olanlar, teknolojiyle arası iyi olmayanlar",
        price: "3.500",
        popular: true,
    },
    {
        name: "Kurumsal Hesap Kurulumu",
        type: "VIP Hizmet",
        description: [
            "D-U-N-S Numarası alma/eşleştirme",
            "Apple Avrupa ofisiyle İngilizce yazışmalar",
            "Noter/Evrak süreç yönetimi",
            'Hesap "Approved" olana kadar takip',
            "%100 Başarı Garantisi",
        ],
        targetAudience: "Start-up'lar, Limited ve Anonim Şirketler",
        price: "20.000",
    },
];

export const addonServices: AddonService[] = [
    {
        name: "Gizlilik Sözleşmesi",
        description:
            "Apple standartlarına uygun Privacy Policy sayfası oluşturma ve host etme.",
        price: "1.500",
    },
    {
        name: "App Store Görsel Seti",
        description:
            "Ekran görüntülerini profesyonel mockup'lı hale getirme.",
        price: "4.000",
    },
    {
        name: "Ret Danışmanlığı",
        description:
            "Reddedilmiş uygulamalar için analiz ve çözüm raporu.",
        price: "6.000",
    },
    {
        name: "TestFlight Kurulumu",
        description:
            "Test ekibine dağıtım için TestFlight ortamı kurma.",
        price: "2.500",
    },
    {
        name: "Acil Durum Hattı",
        description:
            "Sıranın önüne geçme bedeli.",
        price: "+3.000",
    },
];
