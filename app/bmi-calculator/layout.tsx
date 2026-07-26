import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator India | Free Adult BMI Tool",
  description: "Free BMI calculator for adults in India. Calculate your body mass index and understand what it means for weight loss, health and nutrition. Includes guidance from a Mumbai dietitian.",
  alternates: { canonical: "/bmi-calculator" },
  openGraph: {
    title: "Free BMI Calculator for Adults | DietFiniti",
    description: "Calculate BMI instantly. Understand healthy ranges, limitations, and what to do next for personalised nutrition support.",
    images: [{ url: "/image/homeimage.jpg" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
