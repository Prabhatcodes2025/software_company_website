import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

const routes = ["", "/services", "/industries", "/case-studies", "/about", "/career", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date("2026-06-08"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
