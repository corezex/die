import type { Metadata } from "next";
import WeightLoss from "./WeightLoss";
import { WeightLossStructuredData } from "./WeightLossStructuredData";

export const metadata: Metadata = {
  title: "Weight-Loss Dietitian in Mumbai & Online",
  description: "Explore personalised weight-loss nutrition support from DietFiniti in Mumbai, Thane and online across India. Practical guidance shaped around your routine, food preferences and goals.",
  alternates: { canonical: "/services/weight-loss" },
  openGraph: {
    title: "Weight-Loss Dietitian in Mumbai & Online | DietFiniti",
    description: "Personalised weight-management nutrition support built around your everyday routine and food preferences.",
    url: "https://dietfiniti.com/services/weight-loss",
    images: [{ url: "/image/weightlossimg2.png", alt: "Balanced meal and fruit for personalised weight-management nutrition" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight-Loss Dietitian in Mumbai & Online | DietFiniti",
    description: "Personalised, practical nutrition support for weight-management goals.",
    images: ["/image/weightlossimg2.png"],
  },
};

export default function WeightLossPage() {
  return <><WeightLoss /><WeightLossStructuredData /></>;
}
