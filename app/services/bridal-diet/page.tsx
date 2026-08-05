import type { Metadata } from "next";
import BridalDiet from "./BridalDiet";

export const metadata: Metadata = {
  title: "Bridal Nutrition Support in Mumbai & Online | DietFiniti",
  description: "Explore personalised bridal nutrition support from DietFiniti in Mumbai, Thane and online across India for practical pre-wedding food routines.",
  alternates: { canonical: "/services/bridal-diet" },
  openGraph: { title: "Bridal Nutrition Support | DietFiniti", description: "Practical personalised nutrition support for pre-wedding routines.", url: "https://dietfiniti.com/services/bridal-diet", images: [{ url: "/image/bridal-dietimg1.jpg", alt: "Bridal nutrition planning" }] },
  twitter: { card: "summary_large_image", title: "Bridal Nutrition Support | DietFiniti", description: "Practical personalised nutrition support for pre-wedding routines.", images: ["/image/bridal-dietimg1.jpg"] },
};

export default function BridalDietPage() {
  // BridalDiet already renders <BridalDietStructuredData /> —
  // rendering it here too would duplicate the JSON-LD block.
  return <><BridalDiet /></>;
}
