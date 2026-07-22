import type { Metadata } from "next";
import WeightGain from "./WeightGain";
import { WeightGainStructuredData } from "./WeightGainStructuredData";

export const metadata: Metadata = {
  title: "Weight-Gain Nutrition Support in Mumbai & Online | DietFiniti",
  description: "Explore personalised nutrition support for healthy weight-gain goals from DietFiniti in Mumbai, Thane and online across India.",
  alternates: { canonical: "/services/weight-gain" },
  openGraph: { title: "Weight-Gain Nutrition Support | DietFiniti", description: "Practical, personalised nutrition support for weight-gain goals.", url: "https://dietfiniti.com/services/weight-gain", images: [{ url: "/image/weightgainimg1.jpg", alt: "Balanced meal and nutrition plan" }] },
  twitter: { card: "summary_large_image", title: "Weight-Gain Nutrition Support | DietFiniti", description: "Practical, personalised nutrition support for weight-gain goals.", images: ["/image/weightgainimg1.jpg"] },
};

export default function WeightGainPage() {
  return <><WeightGain /><WeightGainStructuredData /></>;
}
