const SITE_URL = "https://dietfiniti.com";

/**
 * Clean schema for Google Rich Results + schema.org validator.
 * - Consistent @ids using #organization for the main entity
 * - Proper LocalBusiness + WebSite
 */
export function SiteStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "DietFiniti",
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: "DietFiniti",
        description: "Dietitian in Mumbai & Thane led by Dietitian Tejal (MSc Dietetics). Personalised Indian meal plans for weight loss, PCOS, thyroid, pregnancy, sports nutrition and online consultations across India.",
        url: SITE_URL,
        telephone: "+91-9321057899",
        email: "dietfiniti@gmail.com",
        image: `${SITE_URL}/image/homeimage.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400013",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.994891,
          longitude: 72.831515
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "11:00",
          closes: "20:00"
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" }
        ],
        founder: {
          "@type": "Person",
          name: "Dietitian Tejal Parulkar",
          jobTitle: "Founder & Registered Dietitian"
        }
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
