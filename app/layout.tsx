import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppOnay | Apple Developer Hesap Açma ve Ödeme Sorunu Çözümü",
  description:
    "Türkiye'den Apple Developer hesabı açamıyor musunuz? Ödeme reddi, D-U-N-S numarası ve hesap onay sorunları için kesin çözüm ve danışmanlık. Payment Declined hatası garantili çözüm.",
  keywords: [
    "apple developer hesap açma",
    "apple developer türkiye",
    "ödeme reddedildi",
    "payment declined",
    "duns numarası alma",
    "app store danışmanlık",
    "ios developer hesap",
    "apple developer ödeme sorunu",
    "apple developer program türkiye",
    "your payment could not be authorized",
    "kartınızla yapmak istediğiniz ödeme için onay alınamadı",
    "ödeme yönteminiz reddedildi",
    "apple developer 99 dolar ödeme hatası",
    "apple geliştirici hesabı ödeme kabul etmiyor",
    "payment method declined apple",
    "unable to process payment apple developer",
  ],
  authors: [{ name: "Ajan Solutions", url: "https://ajansolutions.com" }],
  creator: "AppOnay",
  publisher: "Ajan Solutions",
  metadataBase: new URL("https://apponay.com"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "AppOnay | Apple Developer Hesap Açma ve Ödeme Sorunu Çözümü",
    description:
      "Türkiye'den Apple Developer hesabı açamıyor musunuz? Payment Declined hatası, D-U-N-S numarası sorunları için kesin çözüm.",
    type: "website",
    locale: "tr_TR",
    siteName: "AppOnay",
    url: "https://apponay.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppOnay | Apple Developer Hesap Açma Çözümü",
    description: "Türkiye'den Apple Developer ödeme sorunlarına kesin çözüm.",
  },
  alternates: {
    canonical: "https://apponay.com",
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console'dan alınacak
  },
};

// JSON-LD Structured Data for GEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AppOnay",
  alternateName: "AppOnay.com",
  url: "https://apponay.com",
  logo: "https://apponay.com/removed_background_logo.png",
  description:
    "Türkiye'den Apple Developer hesap açma ve ödeme sorunları çözüm hizmeti",
  parentOrganization: {
    "@type": "Organization",
    name: "Ajan Solutions",
    url: "https://ajansolutions.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-501-632-16-64",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: ["https://wa.me/905016321664"],
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Apple Developer Hesap Danışmanlığı",
  alternateName: "Apple Developer Account Consultancy",
  description:
    "Türkiye'den Apple Developer Program hesabı açma, ödeme sorunları çözme, D-U-N-S numarası alma ve kurumsal hesap kurulum hizmeti",
  provider: {
    "@type": "Organization",
    name: "AppOnay",
  },
  serviceType: "Danışmanlık",
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Apple Developer Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bireysel Hesap Kurtarma",
          description: "Apple Developer bireysel hesap açma ve ödeme sorunu çözümü",
        },
        price: "3500",
        priceCurrency: "TRY",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kurumsal Hesap Kurulumu",
          description: "D-U-N-S numarası alma ve Apple Developer kurumsal hesap açma",
        },
        price: "20000",
        priceCurrency: "TRY",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apple Developer ödemesi neden reddedilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Türkiye'deki bankalar uluslararası abonelik ödemelerinde güvenlik kısıtlamaları uygular. Apple'ın ödeme sistemi bazı Türk kartlarının BIN numaralarını kabul etmez. Ayrıca 3D Secure uyumsuzlukları da ödeme reddine neden olabilir. In-App Enrollment yöntemi ile bu sorunlar aşılabilir.",
      },
    },
    {
      "@type": "Question",
      name: "D-U-N-S numarası nasıl alınır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "D-U-N-S numarası Dun & Bradstreet'ten ücretsiz olarak alınabilir. Apple Developer kurumsal hesap için zorunludur. Apple'ın D-U-N-S başvuru sayfasından şirket bilgilerinizi girerek başvuru yapabilirsiniz. Süreç 2-4 hafta sürebilir. Eşleştirme sorunları için profesyonel destek almanız önerilir.",
      },
    },
    {
      "@type": "Question",
      name: "Apple Developer hesabı Türkiye'de ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apple Developer Program yıllık ücreti web üzerinden 1.029 TL, iPhone/iPad veya Mac uygulaması üzerinden ise 649 TL'dir. Mobil uygulama üzerinden kayıt daha ekonomiktir ve ödeme sorunları daha az yaşanır.",
      },
    },
    {
      "@type": "Question",
      name: "Payment Declined hatası nasıl çözülür?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payment Declined hatası için: 1) Farklı banka kartı deneyin, 2) In-App Enrollment yöntemiyle ödeme yapın, 3) Bankanızı arayarak yurtdışı işlemleri açtırın, 4) Profesyonel destek alın. AppOnay olarak %100 başarı garantisi ile bu sorunu çözüyoruz.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Apple Developer Ödeme Sorunu Nasıl Çözülür",
  description:
    "Türkiye'den Apple Developer Program ödemesi yaparken Payment Declined hatası almanız durumunda izleyebileceğiniz adımlar",
  step: [
    {
      "@type": "HowToStep",
      name: "Apple Developer Uygulamasını İndirin",
      text: "iPhone, iPad veya Mac'inize App Store'dan 'Apple Developer' uygulamasını indirin.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Apple ID ile Giriş Yapın",
      text: "Uygulamayı açın ve Apple ID hesabınızla giriş yapın.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Uygulama Üzerinden Ödeme Yapın",
      text: "Web sitesi yerine uygulama içinden 'Enroll' seçeneğini kullanarak ödemeyi tamamlayın. Bu yöntem 649 TL'dir ve daha yüksek başarı oranına sahiptir.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Sorun Devam Ederse AppOnay'dan Destek Alın",
      text: "Ödeme hala reddediliyorsa, WhatsApp üzerinden +90 501 632 16 64 numarasından veya apponay.com üzerinden profesyonel destek alın.",
      position: 4,
    },
  ],
  totalTime: "PT30M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17913090600"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17913090600');
          `}
        </Script>
        
        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17913090600/CONVERSION_LABEL',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* JSON-LD Structured Data for GEO Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
