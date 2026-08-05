import type { Metadata } from "next";
export const metadata: Metadata = { title: "BMI Calculator for Adults", description: "Calculate your BMI free. BMI is a screening tool, not a diagnosis — get personalised guidance from a qualified dietitian.", alternates: { canonical: "/bmi-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
