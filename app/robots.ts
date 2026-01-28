import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Allow all standard web crawlers
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            {
                // Explicitly allow OpenAI's GPTBot
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                // Allow Google's AI training bot
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                // Allow Common Crawl bot (used by many AI models)
                userAgent: "CCBot",
                allow: "/",
            },
            {
                // Allow Anthropic's Claude bot
                userAgent: "anthropic-ai",
                allow: "/",
            },
            {
                // Allow ChatGPT user agent
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                // Allow Bing's AI
                userAgent: "Bingbot",
                allow: "/",
            },
            {
                // Allow Perplexity AI
                userAgent: "PerplexityBot",
                allow: "/",
            },
        ],
        sitemap: "https://apponay.com/sitemap.xml",
    };
}
