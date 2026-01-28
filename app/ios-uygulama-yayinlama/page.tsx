import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Smartphone, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "iOS Uygulama Yayınlama Rehberi | App Store'a Uygulama Yükleme | AppOnay.com",
    description: "App Store'a iOS uygulama nasıl yüklenir? Apple Developer hesabı açmadan App Store'da yayınlama mümkün mü? Tüm süreç rehberi.",
    keywords: [
        "ios uygulama yayınlama",
        "app store uygulama yükleme",
        "ios uygulama yükleme",
        "app store yayınlama",
        "iphone uygulama yayınlama",
        "app store'a uygulama nasıl yüklenir",
        "ios developer hesabı",
        "app store submission",
    ],
    openGraph: {
        title: "iOS Uygulama Yayınlama Rehberi | AppOnay.com",
        description: "App Store'a iOS uygulama yayınlama süreci ve profesyonel destek.",
        type: "website",
    },
};

const requirements = [
    {
        icon: Smartphone,
        title: "Apple Developer Hesabı",
        description: "Yıllık 649-1.029 TL üyelik ücreti gerektirir",
    },
    {
        icon: Globe,
        title: "Privacy Policy Sayfası",
        description: "Apple standartlarına uygun gizlilik politikası",
    },
];

const processSteps = [
    { title: "Developer Hesabı Aç", desc: "Apple Developer Program'a kayıt olun" },
    { title: "Uygulama Hazırla", desc: "Xcode ile uygulamanızı derleyin ve arşivleyin" },
    { title: "App Store Connect", desc: "Uygulama bilgilerini ve ekran görüntülerini yükleyin" },
    { title: "Review Süreci", desc: "Apple incelemesi ortalama 24-48 saat sürer" },
    { title: "Yayında!", desc: "Onay sonrası uygulamanız App Store'da" },
];

export default function IOSUygulamaYayinlama() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f5f7] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-sm font-medium mb-6">
                        Adım Adım Rehber
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--apple-dark)] leading-tight mb-6">
                        iOS Uygulama
                        <span className="text-[var(--apple-blue)]"> Yayınlama</span>
                    </h1>

                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                        App Store&apos;a uygulama yüklemek için bilmeniz gereken her şey.
                        Hesap açmadan yayınlamaya kadar tüm süreç.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/#pricing"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--apple-blue)] text-white font-medium hover:bg-[#0077ed] transition-colors shadow-lg"
                        >
                            Hizmetleri Gör
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        App Store&apos;a Yayınlamak İçin Gerekenler
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {requirements.map((req, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-[#f5f5f7]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--apple-blue)]/10 flex items-center justify-center mb-4">
                                    <req.icon className="w-6 h-6 text-[var(--apple-blue)]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-2">
                                    {req.title}
                                </h3>
                                <p className="text-zinc-600 text-sm">{req.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        Yayınlama Süreci
                    </h2>

                    <div className="space-y-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl">
                                <div className="w-12 h-12 rounded-full bg-[var(--apple-blue)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-600">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] mb-6">
                        Yardıma mı İhtiyacınız Var?
                    </h2>
                    <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                        Developer hesap açmadan uygulama yayınlamaya kadar tüm süreçlerde yanınızdayız.
                    </p>

                    <div className="bg-[var(--apple-blue)]/5 rounded-3xl p-8 mb-10">
                        <ul className="inline-block text-left space-y-3">
                            {[
                                "Apple Developer hesabı açma",
                                "Ödeme sorunlarını çözme",
                                "Privacy Policy hazırlama",
                                "App Store görsel seti",
                                "Ret (Rejection) danışmanlığı",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[var(--apple-blue)]" />
                                    <span className="text-[var(--apple-dark)]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href="https://wa.me/905016321664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-lg"
                    >
                        WhatsApp ile İletişime Geç
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
}
