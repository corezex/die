import type { Metadata } from "next";
import SportsNutrition from "./SportsNutrition";
import { SportsNutritionStructuredData } from "./SportsNutritionStructuredData";

export const metadata: Metadata = {
  title: "Sports Nutritionist Mumbai | Athlete & Performance Diet Plans",
  description: "Sports nutritionist in Mumbai & Thane. Personalised Indian meal plans for athletes, performance, recovery and training by Dietitian Tejal. Online sports nutrition consultations across India.",
  alternates: { canonical: "/services/sports-nutrition" },
  openGraph: {
    title: "Sports Nutritionist Mumbai | Performance & Recovery Nutrition",
    description: "Personalised sports nutrition support for training, performance and recovery using practical Indian meals. Mumbai, Thane & online.",
    url: "https://dietfiniti.com/services/sports-nutrition",
    images: [{ url: "/image/sports-nutritionimg1.jpg", alt: "Sports nutrition meal planning for athletes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Nutritionist Mumbai | DietFiniti",
    description: "Athlete nutrition plans in Mumbai.",
    images: ["/image/sports-nutritionimg1.jpg"],
  },
};

export default function SportsNutritionPage() {
  return <><SportsNutrition /><SportsNutritionStructuredData /></>;
}
