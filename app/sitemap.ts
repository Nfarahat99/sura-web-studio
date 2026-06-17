import type { MetadataRoute } from "next";

const BASE_URL = "https://sura.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/for/smes", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/for/charities", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/for/manufacturers", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
