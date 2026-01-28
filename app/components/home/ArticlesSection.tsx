"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { articles } from "@/app/data/articles";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function ArticlesSection() {
    return (
        <section id="articles" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />

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
                        Makaleler & Rehberler
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Apple Developer süreçleri hakkında bilmeniz gereken her şey
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {articles.map((article, index) => (
                        <motion.div key={article.slug} variants={itemVariants}>
                            <Link href={`/makaleler/${article.slug}`}>
                                <article className="group glass-card glass-card-hover rounded-3xl p-8 h-full transition-all duration-500 shadow-xl shadow-[var(--apple-blue)]/5">
                                    {/* Category & Read Time */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-xs font-medium">
                                            <Tag className="w-3 h-3" />
                                            {article.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-zinc-500 text-xs">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-[var(--apple-dark)] mb-3 group-hover:text-[var(--apple-blue)] transition-colors">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-[var(--apple-blue)] text-sm font-medium group-hover:gap-3 transition-all">
                                        Devamını Oku
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/makaleler"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-[var(--apple-dark)] font-medium hover:bg-white/80 transition-all duration-200 group"
                    >
                        Tüm Makaleleri Gör
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
