import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { niches } from "@/content/niches";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.brand.url.replace(/\/$/, "");

  const staticPages = [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" as const },
    { url: `${base}/processo`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const nichePages = niches.map((n) => ({
    url: `${base}/solucoes/${n.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const postPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...nichePages, ...postPages];
}
