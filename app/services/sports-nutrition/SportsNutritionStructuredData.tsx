const siteUrl = "https://dietfiniti.com";

export function SportsNutritionStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services/sports-nutrition#webpage`,
        name: "Sports Nutritionist Mumbai | Athlete & Performance Diet Plans",
        description: "Sports nutritionist in Mumbai & Thane. Personalised Indian meal plans for athletes, performance, recovery and training by Dietitian Tejal. Online sports nutrition consultations across India.",
        url: `${siteUrl}/services/sports-nutrition`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/services/sports-nutrition#service` }
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/sports-nutrition#service`,
        name: "Sports Nutritionist Mumbai - Athlete & Performance Diet Plans",
        description: "Personalised sports nutrition support for training, performance and recovery using practical Indian meals from Dietitian Tejal in Mumbai, Thane and online.",
        serviceType: "Sports nutrition consultation",
        url: `${siteUrl}/services/sports-nutrition`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "Sports Nutritionist Mumbai", item: `${siteUrl}/services/sports-nutrition` }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
