"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { mainServices, addonServices } from "@/app/data/pricing";

export function PricingSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden bg-[#fbfbfd]">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-semibold text-[var(--apple-dark)] mb-4 tracking-tight">
                        Hizmetler ve Fiyatlandırma
                    </h2>
                    <p className="text-xl text-zinc-500">
                        İhtiyacınıza uygun paketi seçin
                    </p>
                </motion.div>

                {/* Main Services - Apple Style Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
                    {mainServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 transition-all duration-300 ${service.popular
                                    ? "bg-[var(--apple-dark)] text-white"
                                    : "bg-white border border-zinc-200"
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--apple-blue)] text-white text-xs font-medium">
                                        En Popüler
                                    </span>
                                </div>
                            )}

                            {/* Type */}
                            <p className={`text-sm font-medium mb-2 ${service.popular ? "text-zinc-400" : "text-[var(--apple-blue)]"
                                }`}>
                                {service.type}
                            </p>

                            {/* Name */}
                            <h3 className={`text-2xl font-semibold mb-6 ${service.popular ? "text-white" : "text-[var(--apple-dark)]"
                                }`}>
                                {service.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-8">
                                <span className={`text-5xl font-semibold tracking-tight ${service.popular ? "text-white" : "text-[var(--apple-dark)]"
                                    }`}>
                                    {service.price}
                                </span>
                                <span className={`text-lg ml-1 ${service.popular ? "text-zinc-400" : "text-zinc-500"
                                    }`}>
                                    ₺
                                </span>
                                <span className={`text-sm block mt-1 ${service.popular ? "text-zinc-500" : "text-zinc-400"
                                    }`}>
                                    + KDV
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={scrollToContact}
                                className={`w-full py-3.5 rounded-xl font-medium text-sm transition-all duration-200 mb-8 flex items-center justify-center gap-2 ${service.popular
                                        ? "bg-white text-[var(--apple-dark)] hover:bg-zinc-100"
                                        : "bg-[var(--apple-blue)] text-white hover:bg-[#0077ed]"
                                    }`}
                            >
                                Hemen Başla
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {/* Divider */}
                            <div className={`border-t mb-6 ${service.popular ? "border-zinc-700" : "border-zinc-200"
                                }`} />

                            {/* Features */}
                            <ul className="space-y-3">
                                {service.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.popular ? "text-[var(--apple-blue)]" : "text-[var(--apple-blue)]"
                                            }`} />
                                        <span className={`text-sm ${service.popular ? "text-zinc-300" : "text-zinc-600"
                                            }`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Target Audience */}
                            <p className={`text-xs mt-6 pt-4 border-t ${service.popular
                                    ? "text-zinc-500 border-zinc-700"
                                    : "text-zinc-400 border-zinc-100"
                                }`}>
                                {service.targetAudience}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Addon Services - Minimal List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-semibold text-[var(--apple-dark)] text-center mb-10">
                        Ek Hizmetler
                    </h3>

                    <div className="bg-white rounded-2xl border border-zinc-200 divide-y divide-zinc-100">
                        {addonServices.map((addon, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="flex items-center justify-between p-5 hover:bg-zinc-50 transition-colors"
                            >
                                <div className="flex-1">
                                    <h4 className="font-medium text-[var(--apple-dark)] mb-0.5">
                                        {addon.name}
                                    </h4>
                                    <p className="text-sm text-zinc-500">
                                        {addon.description}
                                    </p>
                                </div>
                                <div className="text-right ml-6">
                                    <span className="text-lg font-semibold text-[var(--apple-dark)]">
                                        {addon.price}
                                    </span>
                                    <span className="text-zinc-400 ml-0.5">₺</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-zinc-400 mt-12"
                >
                    Tüm fiyatlara KDV dahil değildir. Kurumsal faturalama mevcuttur.
                </motion.p>
            </div>
        </section>
    );
}
