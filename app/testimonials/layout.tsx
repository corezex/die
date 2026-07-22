import type { Metadata } from "next";
export const metadata: Metadata = { title: "Client Stories", description: "Read client experiences with DietFiniti personalised nutrition support. Individual experiences and results vary.", alternates: { canonical: "/testimonials" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
