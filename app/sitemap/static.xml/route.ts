import { NextResponse } from "next/server";
import { glpMedicationSlugs } from "@/app/glp-1-medications/medicationData";

const siteUrl = "https://dietfiniti.com";

const ROUTES: Array<[string, string, number]> = [
  ["/", "weekly", 1.0],
  ["/about", "monthly", 0.8],
  ["/services", "weekly", 0.9],
  ["/glp-1-medications", "weekly", 0.9],
  ["/online-dietitian-consultation", "monthly", 0.9],
  ["/services/weight-loss", "monthly", 0.9],
  ["/services/medical-weight-loss", "monthly", 0.9],
  ["/services/weight-gain", "monthly", 0.8],
  ["/services/pregnancy-diet", "monthly", 0.9],
  ["/services/bridal-diet", "monthly", 0.8],
  ["/services/sports-nutrition", "monthly", 0.8],
  ["/services/condition-nutrition", "monthly", 0.8],
  ["/services/pcos-nutrition", "monthly", 0.7],
  ["/services/thyroid-nutrition", "monthly", 0.7],
  ["/services/diabetes-nutrition", "monthly", 0.7],
  ["/services/fatty-liver-nutrition", "monthly", 0.7],
  ["/services/gut-health-nutrition", "monthly", 0.7],
  ["/services/kids-nutrition", "monthly", 0.7],
  ["/services/corporate-wellness", "monthly", 0.7],
  ["/bmi-calculator", "monthly", 0.7],
  ["/testimonials", "monthly", 0.7],
  ["/recipe", "weekly", 0.9],
  ["/blog", "weekly", 0.8],
  ["/contact", "monthly", 0.8],
  ["/privacy-policy", "yearly", 0.2],
  ["/terms-conditions", "yearly", 0.2],
  ["/payment-refund-policy", "yearly", 0.2],
  ["/community-guidelines", "yearly", 0.2],
  ["/disclaimer", "yearly", 0.2],
];

export function GET() {
  const lastModified = new Date().toISOString();
  const staticUrls = ROUTES.map(([path, changeFrequency, priority]) => {
    return `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const glpUrls = glpMedicationSlugs.map((slug) => `  <url>
    <loc>${siteUrl}/glp-1-medications/${slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...glpUrls].join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
