"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
    {
        question: "Neden web sitesinden ödeme yapamıyorum?",
        answer:
            "Türkiye'deki bankalar, uluslararası abonelik ödemelerinde çeşitli güvenlik önlemleri uyguluyor. Apple Developer Program ücreti (web: 1.029 TL, mobil uygulama: 649 TL) ödenirken bazı kartlar tarafından reddedilebiliyor. Buna ek olarak, Apple'ın ödeme sistemleri belirli BIN numaralarını (kart numarasının ilk 6 hanesi) kabul etmeyebiliyor. Alternatif ödeme yöntemleri (In-App Enrollment, farklı kart/banka) ile bu sorunu çözüyoruz.",
    },
    {
        question: "D-U-N-S numarası nedir ve neden gerekli?",
        answer:
            "D-U-N-S (Data Universal Numbering System), Dun & Bradstreet tarafından işletmelere verilen benzersiz 9 haneli bir kimlik numarasıdır. Apple, kurumsal (Organization/Company) hesap başvurularında şirketinizin gerçekliğini doğrulamak için bu numarayı talep eder. D-U-N-S başvurusu ücretsizdir ancak işlem süresi 2-4 hafta sürebilir. Başvuru sürecini hızlandırmak ve Apple sistemleriyle eşleşme sorunlarını gidermek için danışmanlık sunuyoruz.",
    },
    {
        question: "Kurumsal hesap ile bireysel hesap farkı nedir?",
        answer:
            "Bireysel (Individual) hesap, tek bir kişinin adına açılır ve uygulamalar 'Kişi Adı' olarak yayınlanır. Kurumsal (Organization) hesap ise şirket adına açılır, 'Şirket Adı' olarak görünür ve birden fazla ekip üyesi davet edilebilir. Kurumsal hesap için D-U-N-S numarası, Ticaret Sicil Gazetesi ve yetkili imza beyanı gibi belgeler gerekir. İhtiyacınıza göre doğru hesap tipini seçmenizde yardımcı oluyoruz.",
    },
    {
        question: "Uygulama reddedildi, ne yapmalıyım?",
        answer:
            "Uygulama reddi aldığınızda, önce Apple'ın gönderdiği ret nedenini (Guideline numarası ve açıklaması) dikkatlice inceleyin. En yaygın ret sebepleri arasında Guideline 4.3 (Spam/Duplicate), Guideline 2.3 (Metadata), Guideline 3.1.1 (In-App Purchase gerekliliği) yer alır. Her ret için spesifik düzeltmeler yapılmalıdır. Ret nedenini analiz edip, uygulamanızı kurallara uygun hale getirmeniz için detaylı rehberlik sağlıyoruz.",
    },
    {
        question: "Hizmetleriniz ne kadar sürüyor?",
        answer:
            "Hizmet süresi, karşılaşılan soruna göre değişir. Ödeme sorunu çözümü genellikle 1-2 iş günü içinde tamamlanır. D-U-N-S başvuruları 2-4 hafta, zaten mevcut D-U-N-S ile hesap açılışı 1-3 iş günü sürer. Uygulama ret danışmanlığı, sorunun karmaşıklığına bağlı olarak 1-5 iş günü arasında değişebilir. İlk değerlendirmeden sonra tahmini süreyi sizinle paylaşıyoruz.",
    },
    {
        question: "Ödeme yaptıktan sonra garanti var mı?",
        answer:
            "Evet, hizmetlerimizde başarı garantisi sunuyoruz. Eğer belirtilen süre içinde sorununuz çözülemezse, ödemenizin tamamı iade edilir. Ancak, Apple'ın kendi politika değişiklikleri veya hesap bazlı kalıcı engellemeler (önceki ihlaller nedeniyle) gibi kontrolümüz dışındaki durumlarda iade politikamız farklılık gösterebilir. Detayları başlamadan önce sizinle açıkça paylaşıyoruz.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />

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
                        Sıkça Sorulan Sorular
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Merak ettiklerinize hızlı cevaplar
                    </p>
                </motion.div>

                {/* Accordion - Glass Card Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-zinc-200/50 last:border-0"
                            >
                                <AccordionTrigger className="text-left hover:text-[var(--apple-blue)] py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="leading-relaxed text-zinc-600 pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
