import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Glass dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0f]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand - Bigger Logo */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                <Image
                                    src="/removed_background_logo.png"
                                    alt="AppOnay.com Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-xl font-semibold text-white">
                                AppOnay.com
                            </span>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            Türkiye&apos;deki geliştiricilerin Apple Developer Program&apos;a
                            kayıt süreçlerinde yaşadıkları sorunları çözmek için buradayız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                            Hızlı Bağlantılar
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#services"
                                    className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-[var(--apple-blue)] transition-colors" />
                                    Hizmetlerimiz
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/makaleler"
                                    className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-[var(--apple-blue)] transition-colors" />
                                    Makaleler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-[var(--apple-blue)] transition-colors" />
                                    Sıkça Sorulan Sorular
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-zinc-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-[var(--apple-blue)] transition-colors" />
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                            İletişim
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-zinc-400 text-sm group">
                                <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/20 transition-all duration-300">
                                    <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <a
                                    href="https://wa.me/905016321664"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    +90 501 632 16 64
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm group">
                                <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[var(--apple-blue)]/10 group-hover:border-[var(--apple-blue)]/20 transition-all duration-300">
                                    <Mail className="w-4 h-4 text-[var(--apple-blue)]" />
                                </div>
                                <a
                                    href="mailto:destek@ajansolutions.com"
                                    className="hover:text-white transition-colors"
                                >
                                    destek@ajansolutions.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 text-sm group">
                                <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[var(--apple-blue)]/10 group-hover:border-[var(--apple-blue)]/20 transition-all duration-300">
                                    <MapPin className="w-4 h-4 text-[var(--apple-blue)]" />
                                </div>
                                <span>Türkiye</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-zinc-500 text-sm text-center sm:text-left">
                            © {new Date().getFullYear()} Tüm hakları saklıdır.
                        </p>
                        <p className="text-zinc-600 text-sm">
                            Bu hizmet{" "}
                            <a
                                href="https://ajansolutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--apple-blue)] hover:text-[#00c7ff] transition-colors"
                            >
                                Ajan Solutions
                            </a>{" "}
                            iştirakidir.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
