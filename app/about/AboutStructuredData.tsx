const u = "https://dietfiniti.com";
export function AboutStructuredData() {
  const d = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${u}/#person`,
        name: "Dietitian Tejal",
        jobTitle: "Founder and Dietitian",
        worksFor: { "@id": `${u}/#organization` },
        knowsLanguage: [
          { "@type": "Language", name: "English", alternateName: "en" },
          { "@type": "Language", name: "Hindi", alternateName: "hi" },
          { "@type": "Language", name: "Marathi", alternateName: "mr" },
        ],
        alumniOf: [
          { "@type": "Organization", name: "LTMG Hospital (Sion Hospital)" },
          { "@type": "Organization", name: "Bhatia Hospital, Tardeo" },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${u}/about#webpage`,
        url: `${u}/about`,
        name: "About DietFiniti & Dietitian Tejal",
        about: [
          { "@id": `${u}/#organization` },
          { "@id": `${u}/#person` },
        ],
        mainEntity: { "@id": `${u}/#person` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: u },
          { "@type": "ListItem", position: 2, name: "About", item: `${u}/about` },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
