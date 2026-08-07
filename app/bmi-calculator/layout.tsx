import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator for Adults",
  description:
    "Calculate your BMI free. BMI is a screening tool, not a diagnosis — get personalised guidance from a qualified dietitian.",
  alternates: { canonical: "/bmi-calculator" },
  openGraph: {
    title: "BMI Calculator for Adults | DietFiniti",
    description:
      "Use DietFiniti's free adult BMI calculator as a screening tool, then get personalised nutrition guidance in Mumbai, Thane or online across India.",
    url: "https://dietfiniti.com/bmi-calculator",
    images: [{ url: "/image/homeimage.jpg", alt: "DietFiniti BMI calculator and nutrition support" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator for Adults | DietFiniti",
    description:
      "A free BMI calculator for adults with context on what BMI can and cannot tell you.",
    images: ["/image/homeimage.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
