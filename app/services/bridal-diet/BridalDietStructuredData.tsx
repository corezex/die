const siteUrl = "https://dietfiniti.com";

export function BridalDietStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/bridal-diet#service`,
        name: "Bridal Dietitian Mumbai - Pre-Wedding Nutrition Plans",
        description: "Personalised bridal nutrition support for pre-wedding glow, energy and weight management using everyday Indian food. Mumbai, Thane & online.",
        serviceType: "Bridal nutrition consultation",
        url: `${siteUrl}/services/bridal-diet`,
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
          { "@type": "ListItem", position: 3, name: "Bridal Dietitian Mumbai", item: `${siteUrl}/services/bridal-diet` }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
