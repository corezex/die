const siteUrl = "https://dietfiniti.com";

const faqs = [
  ["Can nutrition support help when I have a diagnosed health condition?", "Nutrition guidance can support everyday food choices and weight-management goals, but it does not diagnose, treat or cure a condition. Your doctor or treating clinical team remains responsible for medical care, medications and clinical monitoring."],
  ["Do I need to share medical information?", "You can discuss health information that is relevant to your nutrition support. Please bring questions, prescribed dietary restrictions and any guidance from your treating clinician. DietFiniti can explain what information is useful for the consultation."],
  ["Will DietFiniti change my medication or interpret my lab reports?", "No. DietFiniti does not prescribe or change medication, and laboratory results should be interpreted by your treating clinician. Do not change treatment or medication based on nutrition information alone."],
  ["Which goals can I discuss?", "You can ask about weight-management nutrition alongside care for conditions such as PCOS, thyroid disorders, diabetes, blood pressure or cholesterol concerns. Suitability and scope should be discussed during your consultation."],
];

export function MedicalWeightLossStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${siteUrl}/services/medical-weight-loss#service`, name: "Weight-Management Nutrition Support Alongside Medical Care", description: "Personalised nutrition consultation to support weight-management goals alongside a client’s existing medical care.", serviceType: "Nutrition consultation", url: `${siteUrl}/services/medical-weight-loss`, provider: { "@id": `${siteUrl}/#organization` }, areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Thane" }, { "@type": "Country", name: "India" }] },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }, { "@type": "ListItem", position: 3, name: "Medical Weight-Management Nutrition Support", item: `${siteUrl}/services/medical-weight-loss` }] },
      { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
