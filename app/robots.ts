import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Everyone is welcome, including AI search crawlers, so Engram shows up in
// ChatGPT, Claude, Perplexity and Gemini answers as well as classic search.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
