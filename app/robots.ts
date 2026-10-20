import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://udaymankar.vercel.app/sitemap.xml",
    host: "https://udaymankar.vercel.app",
  };
}
