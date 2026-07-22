// components/FAQStructuredData.tsx
export const FAQStructuredData = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How it works?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once you make the payment, you need to fill in our history form. A dietitian and counsellor will be assigned to you who will stay in touch throughout your journey. You will update your progress weekly, and based on that you will receive a new desi diet plan."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to join a gym?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, joining a gym is not required. However, along with the diet plan, you should do 30–45 minutes of any activity of your choice such as yoga, brisk walking, dancing, or home exercises for better results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you give any kind of guarantee for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Results vary with health history, lifestyle, medications and consistency. The programme focuses on realistic, sustainable habits rather than promising a specific outcome."
        }
      },
      {
        "@type": "Question",
        "name": "Can PCOD, thyroid, diabetes or other medical conditions be cured with this diet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medical conditions require proper medical assistance along with diet. A diet plan cannot cure your medical condition completely, but it can help you manage it better and prevent further complications by keeping you healthy."
        }
      },
      {
        "@type": "Question",
        "name": "I stay in a hostel/PG. Can I follow this diet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be challenging since cooking is required. If you are able to manage basic cooking, you can follow the program and we will provide you with suitable options."
        }
      },
      {
        "@type": "Question",
        "name": "I have just delivered a baby. Can I start your diet plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is recommended to start a weight loss program only after 6 months of delivery."
        }
      },
      {
        "@type": "Question",
        "name": "How much weight will I be able to lose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weight loss depends on metabolic rate, body type, medical conditions, and how well you follow the plan. On average, people lose 0.5–1 kg per week, but results vary from person to person."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide medicines, powders or supplements for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We believe in natural weight loss, so we do not provide any powders, medicines, or supplements. We provide healthy and sustainable diet plans."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
    />
  );
};
