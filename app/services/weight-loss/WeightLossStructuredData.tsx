const siteUrl = "https://dietfiniti.com";

const faqs = [
  ["What is included in a personalised weight-loss nutrition plan?", "The process starts by discussing your goal, routine, food preferences and relevant health history. If you enrol, DietFiniti explains the plan, follow-up and support that apply to your selected programme."],
  ["Do I need to eat special foods or use supplements?", "DietFiniti aims to build practical food choices around your preferences and routine. Ask during your consultation about what is appropriate for your circumstances; do not start supplements or make major dietary changes without appropriate professional advice."],
  ["Can I get support if I have a health condition?", "Nutrition guidance can support your overall routine, but it does not replace medical diagnosis, treatment or medication. If you have a diagnosed condition, are pregnant or breastfeeding, or take medication, continue to work with your doctor or treating clinician."],
  ["Do you guarantee a certain amount of weight loss?", "No. Weight and health outcomes vary between individuals. DietFiniti focuses on realistic, personalised nutrition habits rather than promising a particular result."],
];

export function WeightLossStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/weight-loss#service`,
        name: "Personalised Weight-Loss Nutrition Support",
        description: "Personalised nutrition consultation and practical meal-planning support for weight-management goals from DietFiniti.",
        serviceType: "Weight-management nutrition consultation",
        url: `${siteUrl}/services/weight-loss`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name: "Weight-Loss Nutrition Support", item: `${siteUrl}/services/weight-loss` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
