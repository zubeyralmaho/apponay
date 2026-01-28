"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Store } from "lucide-react";

export function TrustBadge() {
    return (
        <section className="py-12 sm:py-16 relative overflow-hidden">
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
                >
                    {/* Main Badge - Glass Card */}
                    <div className="flex items-center gap-4 px-8 py-5 rounded-3xl glass-card">
                        <div className="relative w-16 h-16 rounded-2xl bg-[var(--apple-blue)] flex items-center justify-center shadow-lg shadow-[var(--apple-blue)]/25">
                            <BadgeCheck className="w-9 h-9 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-lg text-[var(--apple-dark)]">
                                Doğrulanmış Yayıncı
                            </p>
                            <p className="text-sm text-zinc-500">
                                App Store & Google Play Onaylı
                            </p>
                        </div>
                    </div>

                    {/* Trust Icons - Glass Pills */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 px-5 py-3 rounded-full glass-subtle text-zinc-600 hover:bg-white/60 transition-all duration-200">
                            <div className="w-8 h-8 rounded-full bg-[var(--apple-blue)]/10 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-[var(--apple-blue)]" />
                            </div>
                            <span className="text-sm font-medium">Güvenli İşlem</span>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 rounded-full glass-subtle text-zinc-600 hover:bg-white/60 transition-all duration-200">
                            <div className="w-8 h-8 rounded-full bg-[var(--apple-blue)]/10 flex items-center justify-center">
                                <Store className="w-5 h-5 text-[var(--apple-blue)]" />
                            </div>
                            <span className="text-sm font-medium">Resmi Süreçler</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
