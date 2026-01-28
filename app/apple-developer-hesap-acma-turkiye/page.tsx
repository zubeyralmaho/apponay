import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Apple Developer Hesap Açma Türkiye | AppOnay.com",
    description: "Türkiye'den Apple Developer Program hesabı açma rehberi. Ödeme sorunları, D-U-N-S numarası ve hesap onay süreçlerinde profesyonel destek.",
    keywords: [
        "apple developer hesap açma",
        "apple developer türkiye",
        "apple developer program türkiye",
        "ios geliştirici hesabı açma",
        "app store hesabı açma türkiye",
        "apple developer 99 dolar ödeme",
        "apple developer payment declined türkiye",
    ],
    openGraph: {
        title: "Apple Developer Hesap Açma Türkiye | AppOnay.com",
        description: "Türkiye'den Apple Developer Program hesabı açma rehberi ve profesyonel destek.",
        type: "website",
    },
};

const features = [
    {
        icon: Shield,
        title: "Garantili Çözüm",
        description: "Hesabınız açılana kadar destek sağlıyoruz",
    },
    {
        icon: Clock,
        title: "Hızlı Süreç",
        description: "Bireysel hesaplar 1-2 gün içinde aktif",
    },
    {
        icon: Users,
        title: "500+ Mutlu Müşteri",
        description: "Türkiye genelinde başarılı hesap açılışları",
    },
];

const problems = [
    "Kredi kartınız sürekli reddediliyor mu?",
    "Payment Declined hatası mı alıyorsunuz?",
    "D-U-N-S numarası sürecinde mi takıldınız?",
    "Kimlik doğrulama geçemiyor musunuz?",
];

export default function AppleDeveloperHesapAcmaTurkiye() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f5f7] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-sm font-medium mb-6">
                        Türkiye&apos;nin #1 Apple Developer Destek Hizmeti
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--apple-dark)] leading-tight mb-6">
                        Apple Developer Hesap Açma
                        <span className="text-[var(--apple-blue)]"> Türkiye</span>
                    </h1>

                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                        Türkiye&apos;den Apple Developer Program&apos;a kayıt olmak hiç bu kadar kolay olmamıştı.
                        Ödeme sorunlarını ve bürokratik engelleri sizin için aşıyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--apple-blue)] text-white font-medium hover:bg-[#0077ed] transition-colors shadow-lg"
                        >
                            Hemen Başvur
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://wa.me/905016321664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
                        >
                            WhatsApp ile Ulaş
                        </a>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        Bu Sorunlarla Karşılaşıyor musunuz?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-5 rounded-2xl bg-red-50 border border-red-100"
                            >
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm font-bold">!</span>
                                </div>
                                <p className="text-zinc-700">{problem}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg text-zinc-600 mt-10">
                        Tüm bu sorunların <strong className="text-[var(--apple-blue)]">garantili çözümü</strong> için buradayız.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-8 h-8 text-[var(--apple-blue)]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-600 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        Nasıl Çalışıyor?
                    </h2>

                    <div className="space-y-6">
                        {[
                            { step: 1, title: "Bizimle İletişime Geçin", desc: "WhatsApp veya form üzerinden sorununuzu anlatın" },
                            { step: 2, title: "Analiz & Teklif", desc: "Durumunuzu analiz eder, size uygun paketi önerir" },
                            { step: 3, title: "Ödeme & Başlangıç", desc: "Anlaşma sonrası hemen sürece başlıyoruz" },
                            { step: 4, title: "Hesap Aktif!", desc: "Apple Developer hesabınız kullanıma hazır" },
                        ].map((item) => (
                            <div key={item.step} className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--apple-blue)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Highlight */}
            <section className="py-20 bg-[var(--apple-dark)] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Bireysel Hesap Açma
                    </h2>
                    <p className="text-5xl font-bold mb-4">
                        3.500 <span className="text-2xl">₺</span>
                    </p>
                    <p className="text-zinc-400 mb-8">+ KDV | Hesap açılana kadar destek</p>

                    <ul className="inline-block text-left space-y-3 mb-10">
                        {[
                            "30 dk online görüşme",
                            "Uzaktan bağlantı ile ödeme",
                            "Banka retlerini aşma",
                            "Kimlik doğrulama desteği",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-[var(--apple-blue)]" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--apple-dark)] font-medium hover:bg-zinc-100 transition-colors"
                    >
                        Hemen Başla
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Türkiye'den Apple Developer hesabı açabilir miyim?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evet, Türkiye'den Apple Developer Program'a kayıt olabilirsiniz. Ancak bazı ödeme yöntemleri ve bankalar sorun çıkarabilir. Profesyonel destek ile bu engeller aşılabilir."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Apple Developer hesabı ne kadar?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Apple Developer Program yıllık ücreti web üzerinden 1.029 TL, mobil uygulama üzerinden ise 649 TL'dir."
                                }
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
