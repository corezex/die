const siteUrl = "https://dietfiniti.com";

const faqs = [
  ["Can nutrition support replace prenatal medical care?", "No. Nutrition guidance does not replace antenatal appointments, medical advice, prescribed supplements, tests or treatment from your obstetrician or treating clinician."],
  ["What can I discuss in a pregnancy nutrition consultation?", "You can discuss everyday meals, food preferences, appetite changes, meal planning and questions about nutrition. Your clinician should advise you on medical symptoms, supplements, medications, pregnancy complications and individual medical restrictions."],
  ["Can I ask about postpartum or breastfeeding nutrition?", "Yes. You can ask about practical food routines for the postpartum period and breastfeeding. Continue to seek medical or lactation support for health concerns affecting you or your baby."],
  ["When should I contact my doctor urgently?", "Contact your obstetrician, maternity unit or emergency services for urgent symptoms or concerns. This service is not designed for urgent care."]
];

export function PregnancyDietStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services/pregnancy-diet#webpage`,
        name: "Pregnancy Dietitian Mumbai | Prenatal & Postpartum Nutrition Plans",
        description: "Pregnancy dietitian in Mumbai & Thane. Personalised Indian nutrition plans for each trimester and postpartum recovery by Dietitian Tejal. Safe support alongside your antenatal care. Online across India.",
        url: `${siteUrl}/services/pregnancy-diet`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/services/pregnancy-diet#service` }
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/pregnancy-diet#service`,
        name: "Pregnancy Dietitian Mumbai - Prenatal & Postpartum Nutrition",
        description: "Personalised pregnancy and postpartum nutrition support from Dietitian Tejal. Practical Indian meals for healthy pregnancy in Mumbai, Thane and online.",
        serviceType: "Pregnancy nutrition consultation",
        url: `${siteUrl}/services/pregnancy-diet`,
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
          { "@type": "ListItem", position: 3, name: "Pregnancy Dietitian Mumbai", item: `${siteUrl}/services/pregnancy-diet` }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
