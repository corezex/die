import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Stories",
  description:
    "Read client experiences with DietFiniti personalised nutrition support. Individual experiences and results vary.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Stories | DietFiniti",
    description:
      "Read client experiences with DietFiniti personalised nutrition support in Mumbai, Thane and online across India.",
    url: "https://dietfiniti.com/testimonials",
    images: [{ url: "/image/homeimage.jpg", alt: "DietFiniti client stories and testimonials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Stories | DietFiniti",
    description: "Client experiences with DietFiniti personalised nutrition support.",
    images: ["/image/homeimage.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
