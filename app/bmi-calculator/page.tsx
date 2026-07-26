"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Scale, AlertCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const bmiFAQs: FAQItem[] = [
  {
    question: "How accurate is BMI for Indian adults?",
    answer: "BMI is a useful screening tool, but it has limitations. It does not distinguish between muscle and fat, and does not account for body fat distribution. Many people in India have higher body fat at lower BMI values than global cut-offs suggest. DietFiniti always combines BMI with your full health history, lifestyle and goals.",
  },
  {
    question: "What is considered a healthy BMI range?",
    answer: "For most adults the standard ranges are: Below 18.5 (underweight), 18.5–24.9 (healthy range), 25–29.9 (overweight), and 30+ (obesity). However, for Asian Indian populations some experts suggest slightly lower cut-offs (overweight starting at ~23). Always discuss your personal result with a qualified dietitian or doctor.",
  },
  {
    question: "Does BMI work the same for everyone?",
    answer: "No. BMI is less accurate for athletes (high muscle mass), older adults (loss of muscle), pregnant women, children, and people with certain medical conditions. It also does not measure visceral fat or overall health. A personalised nutrition assessment gives far more useful information.",
  },
  {
    question: "I have PCOS, thyroid or diabetes. Should I use BMI?",
    answer: "BMI can be one data point, but it is not sufficient on its own. Medical conditions like PCOS, hypothyroidism or insulin resistance affect weight differently. DietFiniti’s medical weight loss and PCOS support programmes combine BMI with blood reports, symptoms and your actual eating patterns for safe, effective plans.",
  },
  {
    question: "How does my BMI result relate to a weight loss plan?",
    answer: "Your BMI helps indicate whether weight management support may be appropriate, but the number alone does not determine your plan. We look at your full history, food preferences, daily routine, medications and goals. Sustainable Indian meal plans are built around you — not just a target BMI.",
  },
  {
    question: "Can I use this calculator during pregnancy or for children?",
    answer: "No. Standard adult BMI is not appropriate during pregnancy or for people under 18. Use pregnancy-specific weight gain charts and paediatric growth charts instead. If you are pregnant or have a child who needs nutrition support, please book a consultation with DietFiniti.",
  },
  {
    question: "What should I do after calculating my BMI?",
    answer: "Use the result as a starting point. Speak with a dietitian for proper interpretation. At DietFiniti we offer personalised nutrition plans for weight loss, medical conditions, pregnancy and more — designed around real Indian food and your lifestyle. Book a consultation or start with our free online assessment.",
  },
];

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function calculateBMI(e: React.FormEvent) {
    e.preventDefault();
    const h = Number(height) / 100;
    const w = Number(weight);

    if (h > 0 && w > 0) {
      const result = w / (h * h);
      setBmi(result);
    }
  }

  const getCategory = (value: number) => {
    if (value < 18.5) return "Below the standard adult BMI range";
    if (value < 25) return "Within the standard adult BMI range";
    if (value < 30) return "Above the standard adult BMI range";
    return "Well above the standard adult BMI range";
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-slate-50">
      {/* Calculator Section */}
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8">
          <p className="font-semibold text-teal-700">Free informational tool</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            BMI Calculator for Adults
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-700">
            Calculate your Body Mass Index (BMI) using height and weight. 
            BMI is a screening measure for most adults. It is not a diagnosis and does not account for muscle mass, body composition, or medical conditions.
          </p>
        </div>

        <form 
          onSubmit={calculateBMI} 
          className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-semibold text-slate-800">Height (centimetres)</span>
              <input
                required
                type="number"
                min="50"
                max="250"
                step="0.1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 165"
                className="rounded-xl border border-slate-300 px-4 py-3 font-normal text-lg focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              />
            </label>

            <label className="grid gap-2">
              <span className="font-semibold text-slate-800">Weight (kilograms)</span>
              <input
                required
                type="number"
                min="20"
                max="250"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 68"
                className="rounded-xl border border-slate-300 px-4 py-3 font-normal text-lg focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
              />
            </label>
          </div>

          <button 
            type="submit"
            className="mt-6 w-full rounded-xl bg-teal-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-teal-800 active:scale-[0.985]"
          >
            Calculate BMI
          </button>
        </form>

        {/* Result */}
        {bmi !== null && (
          <section 
            className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-8" 
            aria-live="polite"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-teal-600 p-2 text-white">
                <Scale className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900">
                  Your BMI: <span className="text-teal-700">{bmi.toFixed(1)}</span>
                </h2>
                <p className="mt-2 text-xl font-semibold text-teal-800">
                  {getCategory(bmi)}
                </p>

                <div className="mt-4 rounded-xl bg-white/70 p-4 text-sm leading-relaxed text-slate-700">
                  <p>
                    This result is a screening number only. It is not personalised medical or nutrition advice. 
                    BMI can be misleading for athletes, older adults, pregnant people, and many medical conditions.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800 transition"
                  >
                    Book a personalised consultation
                  </Link>
                  <Link 
                    href="/online-dietitian-consultation" 
                    className="inline-flex items-center justify-center rounded-xl border border-teal-700 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition"
                  >
                    Start online consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Explanation */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">
            What BMI can and cannot tell you
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700">
            <p>
              BMI compares your weight with your height. It is a simple screening tool but does not measure body fat percentage, muscle mass, visceral fat, nutrition status, fitness level, or overall health.
            </p>
            <p className="mt-3">
              People with the same BMI can have very different body compositions and health risks. For accurate guidance on weight management, PCOS, thyroid, diabetes or any health goal, consult a qualified dietitian.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800 flex gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
            <p>
              This calculator is for adults (18+). It is not suitable for children, teenagers, or pregnant individuals.
            </p>
          </div>
        </section>
      </div>

      {/* FAQ Section - Added for AEO / SEO */}
      <section id="bmi-faq" className="bg-white py-16 border-t">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700">
              <HelpCircle className="h-4 w-4" />
              Common Questions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              BMI Calculator FAQs
            </h2>
            <p className="mt-2 text-slate-600 max-w-md mx-auto">
              Answers to the most common questions people ask about BMI and what it means for nutrition.
            </p>
          </div>

          <div className="space-y-3">
            {bmiFAQs.map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 pr-4 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-teal-600 transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Still have questions about your BMI or nutrition goals?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800 transition"
              >
                Talk to Dietitian Tejal
              </Link>
              <Link 
                href="/services/weight-loss" 
                className="inline-flex items-center justify-center rounded-xl border border-teal-700 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50 transition"
              >
                Explore weight loss support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Structured Data for SEO / AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": bmiFAQs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
