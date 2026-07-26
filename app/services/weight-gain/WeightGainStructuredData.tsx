const siteUrl = "https://dietfiniti.com";

const faqs = [
  ["Can nutrition support help if I am finding it hard to gain weight?", "A consultation can explore everyday meals, appetite, routine, food preferences and practical planning. Unintentional weight loss, persistent poor appetite or other symptoms should be assessed by a doctor."],
  ["Will I be given a guaranteed weight-gain target?", "No. Weight and health outcomes vary. DietFiniti focuses on a practical, personalised approach rather than promising a particular amount or pace of weight gain."],
  ["Do I need supplements?", "Ask about your individual situation in a consultation. Do not start supplements as a substitute for medical advice, especially if you have a health condition or take medication."],
  ["When should I see a doctor?", "Seek medical advice for unexplained weight loss, a sudden appetite change, ongoing digestive symptoms or any other health concern."]
];

export function WeightGainStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/weight-gain#service`,
        name: "Weight Gain Dietitian Mumbai - Healthy Weight Gain Plans",
        description: "Personalised nutrition for healthy weight gain using everyday Indian food. Mumbai, Thane & online by Dietitian Tejal.",
        serviceType: "Weight gain nutrition consultation",
        url: `${siteUrl}/services/weight-gain`,
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
          { "@type": "ListItem", position: 3, name: "Weight Gain Dietitian Mumbai", item: `${siteUrl}/services/weight-gain` }
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
