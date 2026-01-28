import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "Apple Developer Payment Declined Çözümü | Ödeme Reddedildi Hatası | AppOnay.com",
    description: "'Your payment could not be authorized' veya 'Kartınızla yapmak istediğiniz ödeme için onay alınamadı' hatası mı alıyorsunuz? Türkiye'den Apple Developer ödeme sorunu için garantili çözüm.",
    keywords: [
        "apple developer payment declined",
        "apple developer ödeme reddedildi",
        "apple developer ödeme hatası",
        "apple developer ödeme sorunu türkiye",
        "apple 99 dolar ödeme hatası",
        "apple developer kredi kartı kabul etmiyor",
        "your payment could not be authorized",
        "kartınızla yapmak istediğiniz ödeme için onay alınamadı",
        "ödeme yönteminiz reddedildi",
        "payment method declined apple",
        "unable to process payment apple developer",
        "ödeme için onay alınamadı apple",
    ],
    openGraph: {
        title: "Apple Developer Payment Declined Çözümü | AppOnay.com",
        description: "'Your payment could not be authorized' hatası için garantili çözüm.",
        type: "website",
    },
};

const reasons = [
    {
        title: "Türk Bankası Kısıtlamaları",
        description: "Birçok Türk bankası, yurtdışı abonelik ödemelerini otomatik olarak engelliyor.",
    },
    {
        title: "BIN Numarası Uyumsuzluğu",
        description: "Apple'ın sistemi bazı Türk kart BIN numaralarını kabul etmiyor.",
    },
    {
        title: "3D Secure Sorunları",
        description: "Apple ödeme sistemi ile Türk bankalarının 3D Secure altyapısı uyumsuz.",
    },
    {
        title: "Adres Doğrulama Hatası",
        description: "Kart fatura adresi ile Apple hesap adresi eşleşmeyebilir.",
    },
];

const solutions = [
    "In-App Enrollment yöntemi ile ödeme",
    "Alternatif ödeme kanalları kullanımı",
    "Banka ile önceden iletişim kurma",
    "Farklı kart/banka seçenekleri deneme",
];

export default function PaymentDeclinedCozumu() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-red-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        En Sık Karşılaşılan Sorun
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--apple-dark)] leading-tight mb-6">
                        Apple Developer
                        <span className="text-red-500"> Payment Declined</span>
                        <br />Çözümü
                    </h1>

                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                        <span className="font-semibold text-red-600">&quot;Your payment could not be authorized&quot;</span> veya{" "}
                        <span className="font-semibold text-red-600">&quot;Kartınızla yapmak istediğiniz ödeme için onay alınamadı&quot;</span>{" "}
                        hatası mı alıyorsunuz? Türkiye&apos;deki geliştiricilerin %70&apos;i bu sorunla karşılaşıyor. Çözümü var.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/905016321664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-lg"
                        >
                            WhatsApp ile Çözüm Al
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Error Screenshot */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
                        <Image
                            src="/payment-declined-error.png"
                            alt="Apple Developer Payment Declined Hatası"
                            width={1200}
                            height={800}
                            className="w-full"
                        />
                    </div>
                    <p className="text-center text-sm text-zinc-500 mt-4">
                        Apple Developer Program ödeme sayfasında görülen tipik hata mesajı
                    </p>
                </div>
            </section>

            {/* Reasons Section */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        Bu Hata Neden Oluşuyor?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white border border-zinc-200"
                            >
                                <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-zinc-600 text-sm">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-4">
                        Çözüm Yöntemlerimiz
                    </h2>
                    <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">
                        Yılların tecrübesiyle geliştirdiğimiz yöntemlerle ödeme sorununuzu çözüyoruz
                    </p>

                    <div className="bg-[var(--apple-blue)]/5 rounded-3xl p-8">
                        <ul className="space-y-4">
                            {solutions.map((solution, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--apple-blue)] flex items-center justify-center flex-shrink-0">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-lg text-[var(--apple-dark)]">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--apple-dark)] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Payment Declined Sorununu Çözelim
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        30 dakikalık online görüşme ile sorununuzu tespit eder,
                        uzaktan bağlantı ile ödeme işleminizi tamamlarız.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--apple-dark)] font-medium hover:bg-zinc-100 transition-colors"
                        >
                            İletişime Geç
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/905016321664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            WhatsApp: +90 501 632 16 64
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
