"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa]">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Main Heading - GEO Optimized H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--apple-dark)] leading-[1.1] tracking-tight"
                        >
                            <span className="sr-only">Apple Developer Hesap Açma ve Ödeme Sorunu Çözümü - </span>
                            Apple Developer Hesabınızı
                            <br />
                            <span className="text-[var(--apple-blue)]">
                                Açamıyor musunuz?
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg sm:text-xl font-medium text-[var(--apple-dark)]"
                        >
                            Doğrulanmış yayıncı desteğiyle çözün.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base text-zinc-600 max-w-lg"
                        >
                            Türkiye&apos;den ödeme sorunları, D-U-N-S numarası ve hesap onay süreçlerini
                            profesyonel destek ekibimizle hızlıca aşın.
                        </motion.p>

                        {/* Phone Input + CTA Button */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="flex items-center max-w-md mt-8"
                        >
                            <div className="flex items-center w-full bg-white rounded-full border border-zinc-200 shadow-lg shadow-zinc-200/50 p-1.5 pl-5 focus-within:border-[var(--apple-blue)] focus-within:ring-2 focus-within:ring-[var(--apple-blue)]/20 transition-all">
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Telefon numaranızı girin"
                                    className="flex-1 bg-transparent text-sm text-[var(--apple-dark)] placeholder:text-zinc-400 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--apple-blue)] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors whitespace-nowrap"
                                >
                                    Destek Alın
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.form>
                    </motion.div>

                    {/* Right Side - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/hero_video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        {/* Decorative elements behind video */}
                        <div className="absolute -top-4 -right-4 w-full h-full bg-[var(--apple-blue)]/10 rounded-3xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-full h-full bg-[var(--apple-blue)]/5 rounded-3xl -z-20" />
                    </motion.div>

                </div>
            </div>

            {/* Background Decorative Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-[400px] h-[600px] rotate-12 opacity-[0.04]">
                    <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
                        <path d="M10 10 L90 75 L10 140" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--apple-blue)]" />
                    </svg>
                </div>
                <div className="absolute bottom-20 left-10 w-[200px] h-[300px] -rotate-12 opacity-[0.03]">
                    <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
                        <path d="M90 10 L10 75 L90 140" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--apple-blue)]" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
