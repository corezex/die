import type { MetadataRoute } from "next";
import recipesData from "@/app/data/recipes.json";
import { glpMedicationSlugs } from "@/app/glp-1-medications/medicationData";

const siteUrl = "https://dietfiniti.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[string, MetadataRoute.Sitemap[number]["changeFrequency"], number]> = [
    ["", "weekly", 1],
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
    ["/bmi-calculator", "monthly", 0.7],
    ["/testimonials", "monthly", 0.7],
    ["/recipe", "weekly", 0.9],
    ["/contact", "monthly", 0.8],
    ["/privacy-policy", "yearly", 0.2],
    ["/terms-conditions", "yearly", 0.2],
    ["/payment-refund-policy", "yearly", 0.2],
    ["/community-guidelines", "yearly", 0.2],
    ["/disclaimer", "yearly", 0.2],
  ];
  
  const lastModified = new Date();
  
  const staticRoutes = routes.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const glpRoutes = glpMedicationSlugs.map((slug) => ({
    url: `${siteUrl}/glp-1-medications/${slug}`,
    lastModified,
    changeFrequency: "monthly" as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: 0.8,
  }));

  const recipeRoutes = recipesData.map((recipe) => ({
    url: `${siteUrl}/recipe/${recipe.slug}`,
    lastModified,
    changeFrequency: "monthly" as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: 0.6,
  }));

  return [...staticRoutes, ...glpRoutes, ...recipeRoutes];
}
