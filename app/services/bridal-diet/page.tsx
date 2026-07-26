import type { Metadata } from "next";
import BridalDiet from "./BridalDiet";
import { BridalDietStructuredData } from "./BridalDietStructuredData";

export const metadata: Metadata = {
  title: "Bridal Dietitian Mumbai | Pre-Wedding Nutrition Plans",
  description: "Bridal dietitian in Mumbai & Thane. Personalised pre-wedding Indian nutrition plans for glowing skin, energy & healthy weight by Dietitian Tejal. Practical plans for brides. Online across India.",
  alternates: { canonical: "/services/bridal-diet" },
  openGraph: {
    title: "Bridal Dietitian Mumbai | Pre-Wedding Nutrition by Dietitian Tejal",
    description: "Personalised bridal nutrition support for pre-wedding glow, energy and weight management using everyday Indian food. Mumbai, Thane & online.",
    url: "https://dietfiniti.com/services/bridal-diet",
    images: [{ url: "/image/bridal-dietimg1.jpg", alt: "Bridal diet planning with healthy Indian meals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Dietitian Mumbai | DietFiniti",
    description: "Pre-wedding nutrition plans for brides in Mumbai.",
    images: ["/image/bridal-dietimg1.jpg"],
  },
};

export default function BridalDietPage() {
  return <><BridalDiet /><BridalDietStructuredData /></>;
}
