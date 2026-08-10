import type { Metadata } from "next";
import MedicalWeight from "./MedicalWeight";

export const metadata: Metadata = {
  title: "Medical Weight-Loss Dietitian in Mumbai & Online",
  description:
    "Medical weight-loss nutrition support in Mumbai, Thane and online — personalised guidance alongside your doctor's care, not instead of it.",
  alternates: { canonical: "/services/medical-weight-loss" },
  openGraph: { title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance for weight-management goals alongside medical care.", url: "https://dietfiniti.com/services/medical-weight-loss", images: [{ url: "/image/MedicalWeightLoss1.jpg", alt: "Balanced meal ingredients for personalised nutrition planning" }] },
  twitter: { card: "summary_large_image", title: "Weight-Management Nutrition Support | DietFiniti", description: "Personalised nutrition guidance that complements medical care.", images: ["/image/MedicalWeightLoss1.jpg"] },
};

// MedicalWeight already renders <MedicalWeightLossStructuredData /> — avoid duplicate JSON-LD.
export default function MedicalWeightLossPage() { return <><MedicalWeight /></>; }
