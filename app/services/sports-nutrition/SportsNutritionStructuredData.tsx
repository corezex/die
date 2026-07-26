const siteUrl = "https://dietfiniti.com";

export function SportsNutritionStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
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
