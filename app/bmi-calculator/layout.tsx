import type { Metadata } from "next";
export const metadata: Metadata = { title: "BMI Calculator for Adults", description: "Calculate your body mass index (BMI) and understand the result. BMI is a screening tool, not a diagnosis; speak with a qualified professional for personal advice.", alternates: { canonical: "/bmi-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
