const siteUrl = "https://dietfiniti.com";

export function AboutStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/about#webpage`,
        name: "About Dietitian Tejal | DietFiniti Mumbai",
        description: "Meet Dietitian Tejal (MSc Dietetics, Certified Diabetic Educator) — founder of DietFiniti. Personalised nutrition consultations in Mumbai (Lower Parel), Thane and online across India.",
        url: `${siteUrl}/about`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dietitian Tejal Parulkar",
        jobTitle: "Founder & Registered Dietitian",
        worksFor: { "@id": `${siteUrl}/#organization` },
        alumniOf: [
          { "@type": "Organization", name: "LTMG Hospital (Sion Hospital)" },
          { "@type": "Organization", name: "Bhatia Hospital, Tardeo" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
