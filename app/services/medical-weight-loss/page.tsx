import type { Metadata } from "next";
import MedicalWeight from "./MedicalWeight";

export const metadata: Metadata = {
  title: "Dietitian for PCOS, Thyroid & Diabetes",
  description: "Dietitian for PCOS, thyroid, diabetes and weight management in Mumbai, Thane and online. Nutrition that complements—not replaces—medical care.",
  alternates: { canonical: "/services/medical-weight-loss" },
  openGraph: { title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance for weight-management goals alongside medical care.", url: "https://dietfiniti.com/services/medical-weight-loss", images: [{ url: "/image/MedicalWeightLoss1.jpg", alt: "Balanced meal ingredients for personalised nutrition planning" }] },
  twitter: { card: "summary_large_image", title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance that complements medical care.", images: ["/image/MedicalWeightLoss1.jpg"] },
};

// MedicalWeight already renders <MedicalWeightLossStructuredData /> — avoid duplicate JSON-LD.
export default function MedicalWeightLossPage() { return <><MedicalWeight /></>; }
