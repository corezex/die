import type { Metadata } from "next";
import WeightLoss from "./WeightLoss";

export const metadata: Metadata = {
  title: "Weight-Loss Dietitian in Mumbai & Online",
  description: "Personalised weight-loss diet plans from a dietitian in Mumbai, Thane and online across India — built around your routine, health history and Indian food.",
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
  // WeightLoss already renders <WeightLossStructuredData /> — avoid duplicate JSON-LD.
  return <><WeightLoss /></>;
}
