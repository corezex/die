import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact a Dietitian in Mumbai, Thane or Online",
  description: "Contact DietFiniti for personalised nutrition consultations at the Lower Parel or Thane clinic, or ask about online consultations across India.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact DietFiniti | Mumbai, Thane & Online", description: "Ask about personalised nutrition consultations with DietFiniti.", url: "https://dietfiniti.com/contact" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
