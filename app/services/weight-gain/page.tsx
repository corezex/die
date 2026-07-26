import type { Metadata } from "next";
import WeightGain from "./WeightGain";
import { WeightGainStructuredData } from "./WeightGainStructuredData";

export const metadata: Metadata = {
  title: "Weight Gain Dietitian Mumbai | Healthy Weight Gain Plans",
  description: "Weight gain dietitian in Mumbai & Thane. Personalised Indian nutrition plans for healthy weight gain, muscle building and underweight support by Dietitian Tejal. Online consultations across India.",
  alternates: { canonical: "/services/weight-gain" },
  openGraph: {
    title: "Weight Gain Dietitian Mumbai | Healthy Indian Weight Gain Plans",
    description: "Personalised nutrition for healthy weight gain using everyday Indian food. Mumbai, Thane & online by Dietitian Tejal.",
    url: "https://dietfiniti.com/services/weight-gain",
    images: [{ url: "/image/weightgainimg1.jpg", alt: "Healthy weight gain meal planning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Gain Dietitian Mumbai | DietFiniti",
    description: "Healthy weight gain nutrition plans.",
    images: ["/image/weightgainimg1.jpg"],
  },
};

export default function WeightGainPage() {
  return <><WeightGain /><WeightGainStructuredData /></>;
}
