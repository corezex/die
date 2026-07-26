import type { Metadata } from "next";
import { PregnancyDietStructuredData } from "./PregnancyDietStructuredData";
import PregnancyDiet from "./PregnancyDiet";
export const metadata: Metadata = {
  title: "Pregnancy Dietitian Mumbai | Prenatal & Postpartum Nutrition Plans",
  description: "Pregnancy dietitian in Mumbai & Thane. Personalised Indian nutrition plans for each trimester and postpartum recovery by Dietitian Tejal. Safe support alongside your antenatal care. Online across India.",
  alternates: { canonical: "/services/pregnancy-diet" },
  openGraph: {
    title: "Pregnancy Dietitian Mumbai | Trimester-Specific Indian Nutrition",
    description: "Personalised pregnancy and postpartum nutrition support from DietFiniti. Practical Indian meals for healthy pregnancy in Mumbai, Thane and online.",
    url: "https://dietfiniti.com/services/pregnancy-diet",
    images: [{ url: "/image/pregnancy-diet-img1.jpg", alt: "Pregnancy nutrition consultation with balanced Indian meals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Dietitian Mumbai | DietFiniti",
    description: "Safe, personalised nutrition for pregnancy and postpartum.",
    images: ["/image/pregnancy-diet-img1.jpg"],
  },
};
export default function PregnancyDietPage(){ return <><PregnancyDiet/><PregnancyDietStructuredData/></>; }
