import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://amaya-ai.com/sitemap.xml",
    host: "https://amaya-ai.com",
  };
}
