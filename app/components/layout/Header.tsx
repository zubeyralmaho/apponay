"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 w-full flex justify-center pt-4 px-4">
            <header
                className={cn(
                    "w-full max-w-4xl rounded-full transition-all duration-300",
                    "bg-white/95 backdrop-blur-sm shadow-lg border border-zinc-200/50"
                )}
            >
                <div className="px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Bigger */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                                <Image
                                    src="/removed_background_logo.png"
                                    alt="AppOnay.com Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-lg font-semibold text-[var(--apple-dark)] hidden lg:block">
                                AppOnay.com
                            </span>
                        </Link>

                        {/* Desktop Navigation - Center */}
                        <nav className="hidden md:flex items-center gap-6">
                            <Link
                                href="#services"
                                className="text-sm font-medium text-zinc-600 hover:text-[var(--apple-dark)] transition-colors"
                            >
                                Hizmetler
                            </Link>
                            <Link
                                href="/makaleler"
                                className="text-sm font-medium text-zinc-600 hover:text-[var(--apple-dark)] transition-colors"
                            >
                                Makaleler
                            </Link>
                            <Link
                                href="#faq"
                                className="text-sm font-medium text-zinc-600 hover:text-[var(--apple-dark)] transition-colors"
                            >
                                SSS
                            </Link>
                        </nav>

                        {/* CTA Button - Right */}
                        <div className="hidden md:block">
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--apple-dark)] text-white text-sm font-medium hover:bg-black transition-colors"
                            >
                                Hemen Destek Alın
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5 text-[var(--apple-dark)]" />
                            ) : (
                                <Menu className="w-5 h-5 text-[var(--apple-dark)]" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300",
                        isMobileMenuOpen ? "max-h-80 pb-4" : "max-h-0"
                    )}
                >
                    <nav className="px-4 pt-2 space-y-1">
                        <Link
                            href="#services"
                            className="block px-4 py-2.5 text-base font-medium text-zinc-600 hover:text-[var(--apple-dark)] hover:bg-zinc-50 rounded-xl transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Hizmetler
                        </Link>
                        <Link
                            href="/makaleler"
                            className="block px-4 py-2.5 text-base font-medium text-zinc-600 hover:text-[var(--apple-dark)] hover:bg-zinc-50 rounded-xl transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Makaleler
                        </Link>
                        <Link
                            href="#faq"
                            className="block px-4 py-2.5 text-base font-medium text-zinc-600 hover:text-[var(--apple-dark)] hover:bg-zinc-50 rounded-xl transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            SSS
                        </Link>
                        <button
                            onClick={scrollToContact}
                            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[var(--apple-dark)] text-white text-base font-medium hover:bg-black transition-colors"
                        >
                            Hemen Destek Alın
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
}
