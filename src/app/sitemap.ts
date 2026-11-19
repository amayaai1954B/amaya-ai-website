import type { MetadataRoute } from "next";

const baseUrl = "https://amaya-ai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/research",
    "/developers",
    "/safety",
    "/company",
    "/news",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
