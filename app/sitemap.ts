import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://apponay.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/apple-developer-hesap-acma-turkiye`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/apple-developer-payment-declined-cozumu`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/duns-numarasi-alma-rehberi`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ios-uygulama-yayinlama`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/makaleler`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/makaleler/apple-developer-odeme-reddedildi-hatasi-cozumu`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/makaleler/duns-numarasi-nedir-nasil-alinir`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/makaleler/apple-uygulama-reddi-nedenleri-ve-cozumleri`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/makaleler/bireysel-vs-kurumsal-apple-developer-hesabi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}
