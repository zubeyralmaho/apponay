import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Building2, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "D-U-N-S Numarası Alma ve Apple Developer Eşleştirme | AppOnay.com",
    description: "Apple Developer kurumsal hesap için D-U-N-S numarası nasıl alınır? Eşleştirme sorunları ve çözümleri. Profesyonel destek hizmeti.",
    keywords: [
        "duns numarası",
        "duns numarası alma",
        "duns numarası nedir",
        "apple developer duns",
        "apple kurumsal hesap açma",
        "apple developer organization",
        "duns numarası türkiye",
        "duns numarası eşleştirme",
    ],
    openGraph: {
        title: "D-U-N-S Numarası Alma ve Apple Developer Eşleştirme | AppOnay.com",
        description: "Apple Developer kurumsal hesap için D-U-N-S numarası rehberi.",
        type: "website",
    },
};

const steps = [
    {
        icon: FileText,
        title: "D-U-N-S Kontrolü",
        description: "Şirketinizin mevcut D-U-N-S numarasını sorguluyoruz",
    },
    {
        icon: Building2,
        title: "Başvuru veya Güncelleme",
        description: "Yoksa yeni başvuru, varsa güncelleme işlemi yapıyoruz",
    },
    {
        icon: Phone,
        title: "Dun & Bradstreet İletişimi",
        description: "Gerekirse İngilizce yazışmaları sizin adınıza yürütüyoruz",
    },
    {
        icon: Check,
        title: "Apple Eşleştirme",
        description: "D-U-N-S numarasını Apple sistemleriyle eşleştiriyoruz",
    },
];

const problems = [
    "D-U-N-S numaranız Apple'da görünmüyor mu?",
    "Şirket adı veya adres eşleşmiyor mu?",
    "Başvurunuz haftalardır beklemede mi?",
    "Dun & Bradstreet ile iletişim kuramıyor musunuz?",
];

export default function DunsNumarasiRehberi() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#f5f5f7] to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-sm font-medium mb-6">
                        Kurumsal Hesap Zorunluluğu
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--apple-dark)] leading-tight mb-6">
                        D-U-N-S Numarası
                        <span className="text-[var(--apple-blue)]"> Alma Rehberi</span>
                    </h1>

                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">
                        Apple Developer Program kurumsal hesap (Organization) açmak için
                        D-U-N-S numarası zorunludur. Tüm süreci sizin için yönetiyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/905016321664"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--apple-blue)] text-white font-medium hover:bg-[#0077ed] transition-colors shadow-lg"
                        >
                            Hemen Başvur
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* What is DUNS */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-8">
                        D-U-N-S Numarası Nedir?
                    </h2>

                    <div className="bg-[#f5f5f7] rounded-3xl p-8 mb-12">
                        <p className="text-lg text-zinc-700 leading-relaxed">
                            <strong>D-U-N-S (Data Universal Numbering System)</strong>, Dun & Bradstreet
                            tarafından dünya genelindeki işletmelere verilen benzersiz 9 haneli bir kimlik
                            numarasıdır. Apple, kurumsal hesap başvurularında şirketinizin gerçekliğini
                            doğrulamak için bu numarayı zorunlu tutar.
                        </p>
                    </div>

                    {/* Problems */}
                    <h3 className="text-2xl font-bold text-[var(--apple-dark)] text-center mb-8">
                        Bu Sorunlarla Karşılaşıyor musunuz?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-5 rounded-2xl bg-orange-50 border border-orange-100"
                            >
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm font-bold">!</span>
                                </div>
                                <p className="text-zinc-700">{problem}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#f5f5f7]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[var(--apple-dark)] text-center mb-12">
                        Nasıl Yardımcı Oluyoruz?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-[var(--apple-blue)]/10 flex items-center justify-center mb-4">
                                    <step.icon className="w-6 h-6 text-[var(--apple-blue)]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--apple-dark)] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-600 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-[var(--apple-dark)] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Kurumsal Hesap Kurulumu
                    </h2>
                    <p className="text-5xl font-bold mb-4">
                        20.000 <span className="text-2xl">₺</span>
                    </p>
                    <p className="text-zinc-400 mb-8">+ KDV | %100 Başarı Garantisi</p>

                    <ul className="inline-block text-left space-y-3 mb-10">
                        {[
                            "D-U-N-S numarası alma/eşleştirme",
                            "Apple Avrupa ofisiyle yazışmalar",
                            "Noter/Evrak süreç yönetimi",
                            "Hesap onaylanana kadar takip",
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
                        Kurumsal Başvuru Yap
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
