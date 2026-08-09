const SITE_URL = "https://dietfiniti.com";
const GOOGLE_REVIEW_RATING = "5.0";
const GOOGLE_REVIEW_COUNT = "258";
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/DietFiniti+by+Dietitian+Tejal,+Mumbai/data=!4m2!3m1!1s0x0:0xd25456de67ebaa3b?sa=X&ved=1t:2428&ictx=111";
const THANE_REVIEW_RATING = "4.9";
const THANE_REVIEW_COUNT = "9";
const THANE_REVIEW_URL = "https://www.google.com/maps/place/DietFiniti+by+Dietitian+Tejal,+Thane/data=!4m2!3m1!1s0x0:0xe44c26febabb14b4?sa=X&ved=1t:2428&hl=en-GB&ictx=111";

/**
 * One authoritative entity graph for the practice. Keep factual business
 * details here so name, phone, address and social profiles stay consistent.
 * Do not add ratings or awards unless they are verifiable and displayed.
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
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["Organization", "LocalBusiness", "DietNutrition"],
        "@id": `${SITE_URL}/#organization`,
        name: "DietFiniti",
        alternateName: "DietFiniti by Dietitian Tejal",
        url: SITE_URL,
        logo: `${SITE_URL}/image/logo.png`,
        image: `${SITE_URL}/image/logo.png`,
        description:
          "Personalized nutrition consultation and Indian meal planning for weight management, pregnancy, sports nutrition and lifestyle health.",
        telephone: "+91-93210-57899",
        email: "dietfiniti@gmail.com",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400013",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.994891,
          longitude: 72.831515,
        },
        // Both clinics are listed visibly on the contact page and footer;
        // link them into the entity graph for consistent local SEO signals.
        location: [
          {
            "@type": "MedicalClinic",
            "@id": `${SITE_URL}/#clinic-lower-parel`,
            name: "DietFiniti — Lower Parel Clinic",
            url: `${SITE_URL}/contact`,
            telephone: "+91-93210-57899",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400013",
              addressCountry: "IN",
            },
            geo: { "@type": "GeoCoordinates", latitude: 18.994891, longitude: 72.831515 },
            sameAs: [GOOGLE_REVIEW_URL],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: GOOGLE_REVIEW_RATING,
              reviewCount: GOOGLE_REVIEW_COUNT,
              bestRating: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "MedicalClinic",
            "@id": `${SITE_URL}/#clinic-thane`,
            name: "DietFiniti — Thane Clinic",
            url: `${SITE_URL}/contact`,
            telephone: "+91-93210-57899",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1st Floor, Oswal Business Plaza, 109/A, Kolshet Road, above MR D.I.Y, near Kalpataru ParkCity, Dhokali, Thane West",
              addressLocality: "Thane",
              addressRegion: "Maharashtra",
              postalCode: "400607",
              addressCountry: "IN",
            },
            geo: { "@type": "GeoCoordinates", latitude: 19.22986, longitude: 72.985099 },
            sameAs: [THANE_REVIEW_URL],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: THANE_REVIEW_RATING,
              reviewCount: THANE_REVIEW_COUNT,
              bestRating: "5",
              worstRating: "1",
            },
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "11:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "11:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "Country", name: "India" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+91-93210-57899",
            email: "dietfiniti@gmail.com",
            areaServed: { "@type": "Country", name: "India" },
            availableLanguage: [
              { "@type": "Language", name: "English", alternateName: "en" },
              { "@type": "Language", name: "Hindi", alternateName: "hi" },
              { "@type": "Language", name: "Marathi", alternateName: "mr" },
            ],
          },
        ],
        sameAs: [
          "https://www.facebook.com/dieticiantejal",
          "https://www.instagram.com/dieticiantejal/",
          "https://www.pinterest.com/dieticiantejal/",
        ],
        makesOffer: [
          { "@type": "Offer", name: "Personalised Weight-Loss Program", url: `${SITE_URL}/services/weight-loss` },
          { "@type": "Offer", name: "Medical Weight-Loss Program", url: `${SITE_URL}/services/medical-weight-loss` },
          { "@type": "Offer", name: "GLP-1 Medication Nutrition Support", url: `${SITE_URL}/glp-1-medications` },
          { "@type": "Offer", name: "Weight-Gain Program", url: `${SITE_URL}/services/weight-gain` },
          { "@type": "Offer", name: "Pregnancy Diet Plan", url: `${SITE_URL}/services/pregnancy-diet` },
          { "@type": "Offer", name: "Bridal Diet Plan", url: `${SITE_URL}/services/bridal-diet` },
          { "@type": "Offer", name: "Sports Nutrition Plan", url: `${SITE_URL}/services/sports-nutrition` },
        ],
        founder: {
          "@type": "Person",
          name: "Dietitian Tejal",
          jobTitle: "Founder and Dietitian",
          worksFor: { "@id": `${SITE_URL}/#organization` },
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
