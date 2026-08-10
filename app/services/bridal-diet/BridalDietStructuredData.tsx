const u = "https://dietfiniti.com";

// Matches the visible FAQ on the page ("Bridal nutrition FAQs").
const faqs = [
  [
    "Can bridal nutrition support guarantee weight loss or a certain appearance?",
    "No. Bodies and outcomes vary. DietFiniti focuses on practical, personalised food routines rather than promising weight, skin or appearance results.",
  ],
  [
    "How early should I enquire?",
    "Contact DietFiniti when you would like to discuss your timeline, routine and goals. The team can explain availability and suitable consultation options.",
  ],
  [
    "Can I discuss a medical condition or pregnancy?",
    "Nutrition guidance does not replace medical care. Continue to work with your treating clinician for medical conditions, pregnancy, medication or symptoms.",
  ],
];

export function BridalDietStructuredData() {
  const d = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${u}/services/bridal-diet#service`,
        name: "Bridal Nutrition Support",
        description: "Personalised nutrition consultation for pre-wedding routines.",
        serviceType: "Nutrition consultation",
        url: `${u}/services/bridal-diet`,
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
          { "@type": "ListItem", position: 3, name: "Bridal Nutrition", item: `${u}/services/bridal-diet` },
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
