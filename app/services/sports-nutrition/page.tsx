import type { Metadata } from "next";
import SportsNutrition from "./SportsNutrition";

export const metadata: Metadata = {
  title: "Sports Nutritionist in Mumbai & Online",
  description: "Explore personalised sports nutrition support from DietFiniti in Mumbai, Thane and online across India for training and active-routine goals.",
  alternates: { canonical: "/services/sports-nutrition" },
  openGraph: { title: "Sports Nutrition Support | DietFiniti", description: "Practical personalised nutrition support for training and active routines.", url: "https://dietfiniti.com/services/sports-nutrition", images: [{ url: "/image/sports-nutritionimg1.jpg", alt: "Athlete meal planning" }] },
  twitter: { card: "summary_large_image", title: "Sports Nutrition Support | DietFiniti", description: "Practical personalised nutrition support for training and active routines.", images: ["/image/sports-nutritionimg1.jpg"] },
};

export default function SportsNutritionPage() {
  // SportsNutrition already renders <SportsNutritionStructuredData /> —
  // rendering it here too would duplicate the JSON-LD block.
  return <><SportsNutrition /></>;
}
