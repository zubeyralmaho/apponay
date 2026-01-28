import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { articles } from "@/app/data/articles";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Makale Bulunamadı",
        };
    }

    return {
        title: `${article.title} | AppOnay.com`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/makaleler"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[var(--apple-blue)] transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Tüm Makaleler
                </Link>

                {/* Article Header */}
                <header className="mb-10">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] text-sm font-medium">
                            <Tag className="w-4 h-4" />
                            {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 text-sm">
                            <Clock className="w-4 h-4" />
                            {article.readTime} okuma
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-zinc-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.publishedAt).toLocaleDateString('tr-TR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--apple-dark)] leading-tight mb-6">
                        {article.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-zinc-600 leading-relaxed">
                        {article.excerpt}
                    </p>
                </header>

                {/* Article Content */}
                <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-xl">
                    <div
                        className="prose prose-lg prose-zinc max-w-none
              prose-headings:text-[var(--apple-dark)] prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-600 prose-p:leading-relaxed
              prose-strong:text-[var(--apple-dark)]
              prose-a:text-[var(--apple-blue)] prose-a:no-underline hover:prose-a:underline
              prose-ul:text-zinc-600 prose-ol:text-zinc-600
              prose-li:marker:text-[var(--apple-blue)]
              prose-table:text-sm
              prose-th:bg-zinc-100 prose-th:p-3 prose-th:text-left
              prose-td:p-3 prose-td:border-b prose-td:border-zinc-200"
                        dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
                    />
                </div>

                {/* CTA Section */}
                <div className="mt-12 glass-card rounded-3xl p-8 sm:p-10 text-center">
                    <h3 className="text-2xl font-bold text-[var(--apple-dark)] mb-4">
                        Yardıma mı ihtiyacınız var?
                    </h3>
                    <p className="text-zinc-600 mb-6">
                        Apple Developer süreçlerinde profesyonel destek almak için bizimle iletişime geçin.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--apple-blue)] text-white font-medium shadow-lg shadow-[var(--apple-blue)]/20 hover:shadow-xl hover:shadow-[var(--apple-blue)]/25 transition-all duration-200"
                    >
                        Hemen Destek Alın
                    </Link>
                </div>
            </article>
        </div>
    );
}

function formatContent(content: string): string {
    // Convert markdown-style content to HTML
    return content
        // Images - must be before links to avoid conflicts
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-2xl shadow-lg my-6 w-full" />')
        // Headers
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Lists
        .replace(/^- (.*$)/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        // Numbered lists
        .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
        // Paragraphs
        .replace(/^(?!<[hiulo])(.*$)/gm, (match) => {
            if (match.trim() === '') return '';
            if (match.startsWith('<')) return match;
            return `<p>${match}</p>`;
        })
        // Clean up extra newlines
        .replace(/\n\n+/g, '\n')
        .replace(/<\/ul>\s*<ul>/g, '')
        .replace(/<\/ol>\s*<ol>/g, '');
}
