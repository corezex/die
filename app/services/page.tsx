import type { Metadata } from "next";
import ServicesPage from "./services";

const siteUrl = "https://dietfiniti.com";

export const metadata: Metadata = {
  title: "Dietitian Services Mumbai | Weight Loss, Pregnancy, Medical & Sports Nutrition",
  description: "Personalised dietitian services in Mumbai & Thane by Dietitian Tejal. Weight loss, medical weight management (PCOS, thyroid, diabetes), pregnancy, sports nutrition, weight gain & bridal plans using everyday Indian food. Online across India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dietitian Services in Mumbai | Personalised Nutrition Plans",
    description: "Weight loss, medical, pregnancy, sports & bridal nutrition support from Dietitian Tejal. Practical Indian meal plans in Mumbai, Thane and online.",
    url: `${siteUrl}/services`,
    images: [{ url: "/image/Servicesimg1.jpg", alt: "DietFiniti nutrition services in Mumbai" }],
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/services#webpage`,
        name: "Dietitian Services in Mumbai",
        description: "Personalised nutrition services in Mumbai, Thane and online across India.",
        url: `${siteUrl}/services`,
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@id": `${siteUrl}/services/weight-loss#service` } },
          { "@type": "ListItem", position: 2, item: { "@id": `${siteUrl}/services/medical-weight-loss#service` } },
          { "@type": "ListItem", position: 3, item: { "@id": `${siteUrl}/services/pregnancy-diet#service` } },
          { "@type": "ListItem", position: 4, item: { "@id": `${siteUrl}/services/sports-nutrition#service` } },
          { "@type": "ListItem", position: 5, item: { "@id": `${siteUrl}/services/weight-gain#service` } },
          { "@type": "ListItem", position: 6, item: { "@id": `${siteUrl}/services/bridal-diet#service` } },
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ServicesPage />
    </>
  );
}
