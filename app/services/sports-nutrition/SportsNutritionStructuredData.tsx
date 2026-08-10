const u = "https://dietfiniti.com";

// Matches the visible FAQ on the page ("Sports nutrition FAQs").
const faqs = [
  [
    "Who can discuss sports nutrition with DietFiniti?",
    "People training for sport, fitness or an active routine can discuss meal timing, food preferences, training schedule and practical planning.",
  ],
  [
    "Do you prescribe supplements?",
    "No. Supplements, medications and medical concerns should be discussed with an appropriately qualified healthcare or sports-medicine professional.",
  ],
  [
    "Do you guarantee performance or recovery outcomes?",
    "No. Performance and recovery depend on many factors. DietFiniti focuses on practical personalised nutrition guidance rather than guaranteed results.",
  ],
];

export function SportsNutritionStructuredData() {
  const d = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${u}/services/sports-nutrition#service`,
        name: "Sports Nutrition Support",
        description: "Personalised nutrition consultation for training and active-routine goals.",
        serviceType: "Nutrition consultation",
        url: `${u}/services/sports-nutrition`,
        provider: { "@id": `${u}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: u },
          { "@type": "ListItem", position: 2, name: "Services", item: `${u}/services` },
          { "@type": "ListItem", position: 3, name: "Sports Nutrition", item: `${u}/services/sports-nutrition` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
