"use client";

import { motion } from "framer-motion";
import {
    CreditCard,
    Building2,
    MessageSquareWarning,
    ArrowRight,
    Check,
    Sparkles,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";

const solutions = [
    {
        icon: CreditCard,
        title: "Ödeme Sorunu Çözümü",
        subtitle: "Bireysel Geliştiriciler İçin",
        description:
            "Yıllık üyelik ücretini öderken karşılaşılan 'Payment Declined' hatalarını alternatif ve güncel yöntemlerle aşmanızı sağlıyoruz.",
        features: [
            "In-App Enrollment desteği",
            "Alternatif ödeme yöntemleri",
            "7/24 destek hattı",
        ],
        popular: true,
    },
    {
        icon: Building2,
        title: "Kurumsal Hesap Kurulumu",
        subtitle: "Şirketler & Start-up'lar İçin",
        description:
            "D-U-N-S numarası alımı, Ticaret Sicil eşleştirmesi ve Apple Avrupa ofisi ile iletişim süreçlerini yönetiyoruz.",
        features: [
            "D-U-N-S başvuru yönetimi",
            "Evrak hazırlığı desteği",
            "Apple ile iletişim takibi",
        ],
        popular: false,
    },
    {
        icon: MessageSquareWarning,
        title: "Ret Danışmanlığı",
        subtitle: "Reddedilen Uygulamalar İçin",
        description:
            "Guideline ihlalleri, metadata hataları ve içerik politikası uyumsuzluklarını analiz edip çözüm öneriyoruz.",
        features: [
            "Ret nedeni analizi",
            "Düzeltme önerileri",
            "Yeniden başvuru desteği",
        ],
        popular: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function SolutionGrid() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background elements - blue only */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--apple-blue)]/5 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--apple-dark)] mb-6 tracking-tight">
                        Size Özel Çözümler
                    </h2>
                    <p className="text-lg text-zinc-600">
                        İhtiyacınıza göre uyarlanmış profesyonel destek paketleri ile
                        Apple ekosistemindeki engellerinizi kaldırın.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative group rounded-3xl p-8 transition-all duration-500 ${solution.popular
                                ? "glass-dark text-white shadow-2xl shadow-[var(--apple-dark)]/20 hover:shadow-3xl"
                                : "glass-card glass-card-hover shadow-xl"
                                }`}
                        >
                            {/* Popular Badge */}
                            {solution.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--apple-blue)] text-white text-xs font-semibold shadow-lg shadow-[var(--apple-blue)]/30">
                                        <Sparkles className="w-3 h-3" />
                                        En Popüler
                                    </span>
                                </div>
                            )}

                            {/* Icon - Blue only */}
                            <div className="relative w-16 h-16 rounded-2xl bg-[var(--apple-blue)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--apple-blue)]/20 group-hover:scale-110 transition-transform duration-300">
                                <solution.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <p
                                        className={`text-sm font-medium ${solution.popular ? "text-zinc-400" : "text-zinc-500"
                                            }`}
                                    >
                                        {solution.subtitle}
                                    </p>
                                    <h3
                                        className={`text-2xl font-bold mt-1 ${solution.popular
                                            ? "text-white"
                                            : "text-[var(--apple-dark)]"
                                            }`}
                                    >
                                        {solution.title}
                                    </h3>
                                </div>

                                <p
                                    className={`text-sm leading-relaxed ${solution.popular ? "text-zinc-300" : "text-zinc-600"
                                        }`}
                                >
                                    {solution.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 pt-4">
                                    {solution.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${solution.popular
                                                ? "bg-[var(--apple-blue)]/20"
                                                : "bg-[var(--apple-blue)]/10"
                                                }`}>
                                                <Check
                                                    className={`w-3 h-3 ${solution.popular
                                                        ? "text-[var(--apple-blue)]"
                                                        : "text-[var(--apple-blue)]"
                                                        }`}
                                                />
                                            </div>
                                            <span
                                                className={`text-sm ${solution.popular ? "text-zinc-300" : "text-zinc-600"
                                                    }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="pt-6">
                                    <Button
                                        onClick={scrollToContact}
                                        variant={solution.popular ? "default" : "secondary"}
                                        className={`w-full group ${solution.popular
                                            ? "shadow-lg shadow-[var(--apple-blue)]/25 hover:shadow-xl hover:shadow-[var(--apple-blue)]/30"
                                            : ""
                                            }`}
                                    >
                                        Destek Talep Et
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
