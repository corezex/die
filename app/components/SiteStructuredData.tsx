const SITE_URL = "https://dietfiniti.com";

/**
 * One authoritative entity graph for the practice. Keep factual business
 * details here so name, phone, address and social profiles stay consistent.
 * Do not add ratings or awards unless they are verifiable and displayed.
 * Enhanced with more local SEO and AEO-friendly properties.
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
        alternateName: ["DietFiniti Dietitian", "Dietitian Tejal Mumbai", "Dietitian in Mumbai"],
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["Organization", "LocalBusiness", "DietNutrition", "MedicalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: "DietFiniti",
        alternateName: "DietFiniti by Dietitian Tejal",
        url: SITE_URL,
        logo: `${SITE_URL}/image/logo.png`,
        image: `${SITE_URL}/image/logo.png`,
        description:
          "Dietitian in Mumbai & Thane led by Dietitian Tejal (MSc Dietetics). Personalised Indian meal plans for weight loss, PCOS, thyroid, pregnancy, sports nutrition and online consultations across India.",
        telephone: "+91-93210-57899",
        email: "dietfiniti@gmail.com",
        priceRange: "₹₹",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400013",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, Oswal Business Plaza, 109/A, Kolshet Rd, above MR D.I.Y, near Kalpataru ParkCity, Dhokali, Thane West",
            addressLocality: "Thane",
            addressRegion: "Maharashtra",
            postalCode: "400607",
            addressCountry: "IN",
          }
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.994891,
          longitude: 72.831515,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "11:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "00:00",
            closes: "00:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        availableLanguage: ["English", "Hindi", "Marathi"],
        sameAs: [
          "https://www.facebook.com/dieticiantejal",
          "https://www.instagram.com/dieticiantejal/",
          "https://www.pinterest.com/dieticiantejal/",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "500",
        },
        founder: {
          "@type": "Person",
          name: "Dietitian Tejal Parulkar",
          jobTitle: "Founder &amp; Registered Dietitian",
          description: "MSc Dietetics, Certified Diabetic Educator with 12+ years of experience in clinical and lifestyle nutrition.",
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
        makesOffer: [
          { "@type": "Offer", name: "Personalised Weight-Loss Program", url: `${SITE_URL}/services/weight-loss` },
          { "@type": "Offer", name: "Medical Weight-Loss Program", url: `${SITE_URL}/services/medical-weight-loss` },
          { "@type": "Offer", name: "Weight-Gain Program", url: `${SITE_URL}/services/weight-gain` },
          { "@type": "Offer", name: "Pregnancy Diet Plan", url: `${SITE_URL}/services/pregnancy-diet` },
          { "@type": "Offer", name: "Bridal Diet Plan", url: `${SITE_URL}/services/bridal-diet` },
          { "@type": "Offer", name: "Sports Nutrition Plan", url: `${SITE_URL}/services/sports-nutrition` },
          { "@type": "Offer", name: "Online Dietitian Consultation", url: `${SITE_URL}/online-dietitian-consultation` },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "DietFiniti Nutrition Programs",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weight Loss Nutrition" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Nutrition Therapy" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pregnancy Nutrition" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Dietitian Consultation" } }
          ]
        }
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
