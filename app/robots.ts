import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://dietfiniti.com/sitemap.xml",
  };
}
