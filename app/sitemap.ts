import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { LEGAL_DATE } from "@/lib/seo";

// Bump when the home page content changes meaningfully.
const HOME_UPDATED = new Date("2026-11-17T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: ["today", "map", "note", "todo", "group", "share"].map((s) => `${SITE_URL}/screens/${s}.webp`),
    },
    { url: `${SITE_URL}/privacy`, lastModified: LEGAL_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: LEGAL_DATE, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: HOME_UPDATED, changeFrequency: "yearly", priority: 0.4 },
  ];
}
