import type { Metadata } from "next";
import { MedicalWeightLossStructuredData } from "./MedicalWeightLossStructuredData";
import MedicalWeight from "./MedicalWeight";

export const metadata: Metadata = {
  title: "Weight-Management Nutrition Support With Medical Care",
  description: "Explore personalised weight-management nutrition support from DietFiniti in Mumbai, Thane and online across India. Nutrition guidance that complements—not replaces—medical care.",
  alternates: { canonical: "/services/medical-weight-loss" },
  openGraph: { title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance for weight-management goals alongside medical care.", url: "https://dietfiniti.com/services/medical-weight-loss", images: [{ url: "/image/MedicalWeightLoss1.jpg", alt: "Balanced meal ingredients for personalised nutrition planning" }] },
  twitter: { card: "summary_large_image", title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance that complements medical care.", images: ["/image/MedicalWeightLoss1.jpg"] },
};

export default function MedicalWeightLossPage() { return <><MedicalWeight /><MedicalWeightLossStructuredData /></>; }
