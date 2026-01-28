import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { articles } from "@/app/data/articles";

export const metadata: Metadata = {
    title: "Makaleler | AppOnay.com",
    description: "Apple Developer Program hakkında rehberler, ipuçları ve çözümler.",
};

export default function MakalelerPage() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[var(--apple-blue)] transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Ana Sayfa
                </Link>

                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[var(--apple-dark)] mb-4">
                        Makaleler & Rehberler
                    </h1>
                    <p className="text-lg text-zinc-600">
                        Apple Developer süreçleri hakkında detaylı bilgiler ve çözüm önerileri
                    </p>
                </div>

                {/* Articles List */}
                <div className="space-y-6">
                    {articles.map((article) => (
                        <Link key={article.slug} href={`/makaleler/${article.slug}`}>
                            <article className="group glass-card glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300">
                                {/* Category & Read Time */}
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-xs font-medium">
                                        <Tag className="w-3 h-3" />
                                        {article.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-zinc-500 text-xs">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </span>
                                    <span className="text-zinc-400 text-xs">
                                        {new Date(article.publishedAt).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--apple-dark)] mb-2 group-hover:text-[var(--apple-blue)] transition-colors">
                                    {article.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-zinc-600 leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
