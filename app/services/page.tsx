import type { Metadata } from "next";
import ServicesPage from "./services";

export const metadata: Metadata = {
  title: "Dietitian Services in Mumbai, Thane & Online",
  description:
    "Explore DietFiniti dietitian services for weight loss, GLP-1 nutrition support, PCOS, thyroid, diabetes, fatty liver, gut health, pregnancy, sports nutrition, kids nutrition and corporate wellness in Mumbai, Thane and online across India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dietitian Services | DietFiniti",
    description:
      "Weight loss, GLP-1 support, PCOS, thyroid, diabetes, pregnancy, sports nutrition, kids nutrition and more — personalised dietitian support in Mumbai, Thane and online across India.",
    url: "https://dietfiniti.com/services",
    images: [{ url: "/image/Servicesimg1.jpg", alt: "DietFiniti nutrition consultation" }],
  },
};

export default function Page() {
  return <ServicesPage />;
}
