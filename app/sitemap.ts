import type { MetadataRoute } from "next";
import { company, services } from "@/lib/site";

const routes = ["", "/services", "/industries", "/case-studies", "/about", "/insights", "/career", "/contact", "/privacy", "/terms", ...services.map((service) => `/services/${service.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date("2026-10-04"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
