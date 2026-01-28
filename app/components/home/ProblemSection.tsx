"use client";

import { motion } from "framer-motion";
import { CreditCard, Building2, XCircle } from "lucide-react";
import Image from "next/image";

const problems = [
    {
        icon: CreditCard,
        title: "Ödeme Reddedildi Hatası",
        description:
            "Türk bankalarından yapılan ödemelerde sık karşılaşılan 'Payment Declined' hatası, kartınız geçerli olsa bile işlemi engelleyebiliyor.",
    },
    {
        icon: Building2,
        title: "D-U-N-S Numarası Sorunu",
        description:
            "Kurumsal hesap açmak için gereken D-U-N-S numarası alma ve Apple sistemlerine eşleştirme sürecinde yaşanan bürokrasi.",
    },
    {
        icon: XCircle,
        title: "Uygulama Ret Sebepleri",
        description:
            "Guideline 4.3, Metadata hataları veya spam içerik nedeniyle uygulamanızın reddedilmesi ve çözüm sürecinin belirsizliği.",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function ProblemSection() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

            {/* Transparent Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] opacity-[0.04]">
                    <Image
                        src="/removed_background_logo.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

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
                        Bu Sorunlarla mı Karşılaşıyorsunuz?
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Türkiye&apos;deki geliştiricilerin en sık yaşadığı problemler ve
                        çözüm süreçlerindeki belirsizlikler.
                    </p>
                </motion.div>

                {/* Problem Cards - Glass with blue accents only */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group glass-card glass-card-hover rounded-3xl p-8 transition-all duration-500 shadow-xl shadow-[var(--apple-blue)]/5"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[var(--apple-blue)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--apple-blue)]/20 group-hover:scale-110 transition-transform duration-300">
                                <problem.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--apple-dark)] mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
