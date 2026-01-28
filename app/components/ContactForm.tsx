"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input, Textarea, Select } from "@/app/components/ui/input";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    email: z.string().email("Geçerli bir e-posta adresi girin"),
    phone: z.string().optional(),
    problemType: z.string().min(1, "Lütfen bir sorun tipi seçin"),
    message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Bir hata oluştu");
            }

            setIsSuccess(true);
            reset();
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "Bir hata oluştu. Lütfen tekrar deneyin."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background elements - blue only */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--apple-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[var(--apple-blue)]/3 rounded-full blur-3xl" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--apple-dark)] mb-6 tracking-tight">
                        Hemen İletişime Geçin
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Sorununuzu anlatın, size en uygun çözümü sunalım
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16 px-8 glass-card rounded-3xl shadow-xl"
                        >
                            <div className="w-20 h-20 rounded-full bg-[var(--apple-blue)] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--apple-blue)]/25">
                                <CheckCircle className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--apple-dark)] mb-3">
                                Talebiniz Alındı!
                            </h3>
                            <p className="text-zinc-600 mb-8">
                                En kısa sürede sizinle iletişime geçeceğiz.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setIsSuccess(false)}
                                className="bg-white/50 backdrop-blur-lg"
                            >
                                Yeni Talep Oluştur
                            </Button>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6 glass-card rounded-3xl p-8 sm:p-10 shadow-xl"
                        >
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-[var(--apple-dark)]"
                                    >
                                        İsim Soyisim *
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="Adınız Soyadınız"
                                        {...register("name")}
                                        className={cn(
                                            "glass-input",
                                            errors.name && "border-red-300 focus:ring-red-500"
                                        )}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-[var(--apple-dark)]"
                                    >
                                        E-posta *
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ornek@email.com"
                                        {...register("email")}
                                        className={cn(
                                            "glass-input",
                                            errors.email && "border-red-300 focus:ring-red-500"
                                        )}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone & Problem Type Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-[var(--apple-dark)]"
                                    >
                                        Telefon (Opsiyonel)
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+90 5XX XXX XX XX"
                                        {...register("phone")}
                                        className="glass-input"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="problemType"
                                        className="block text-sm font-medium text-[var(--apple-dark)]"
                                    >
                                        Sorun Tipi *
                                    </label>
                                    <div className="relative">
                                        <Select
                                            id="problemType"
                                            {...register("problemType")}
                                            className={cn(
                                                "glass-input",
                                                errors.problemType && "border-red-300 focus:ring-red-500"
                                            )}
                                        >
                                            <option value="">Seçiniz...</option>
                                            <option value="payment">Ödeme Sorunu (Payment Declined)</option>
                                            <option value="duns">D-U-N-S Numarası / Kurumsal Hesap</option>
                                            <option value="rejection">Uygulama Reddi</option>
                                            <option value="other">Diğer</option>
                                        </Select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.problemType && (
                                        <p className="text-sm text-red-500 flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {errors.problemType.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-[var(--apple-dark)]"
                                >
                                    Mesajınız *
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Yaşadığınız sorunu kısaca açıklayın..."
                                    {...register("message")}
                                    className={cn(
                                        "glass-input min-h-[140px]",
                                        errors.message && "border-red-300 focus:ring-red-500"
                                    )}
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500 flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Error */}
                            {submitError && (
                                <div className="p-4 rounded-2xl glass-subtle border border-red-200/50 text-red-600 text-sm flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    {submitError}
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full shadow-lg shadow-[var(--apple-blue)]/20 hover:shadow-xl hover:shadow-[var(--apple-blue)]/25"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Destek Talebi Gönder
                                    </>
                                )}
                            </Button>

                            <p className="text-center text-xs text-zinc-500">
                                Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
                            </p>
                        </form>
                    )}
                </motion.div>

                {/* WhatsApp Alternative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-zinc-500 mb-4">veya doğrudan WhatsApp üzerinden ulaşın</p>
                    <a
                        href="https://wa.me/905016321664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        +90 501 632 16 64
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
