// components/FAQSection.tsx
"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  MessageCircle,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const FAQSectioncontact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is the diet plan personalized?",
      answer:
        "Each diet plan is 100% customized based on your unique needs. We consider your health goals, medical history, lifestyle, work schedule, food preferences, cooking abilities, budget, and even your taste preferences. Our nutritionists create plans that fit seamlessly into your daily routine while ensuring you achieve your health objectives.",
    },
    {
      question: "Do I need to eat fancy or expensive foods?",
      answer:
        "Not at all! We design plans using everyday, affordable ingredients available in your local market. No expensive superfoods, imported items, or specialty products are required. We work with common Indian ingredients and meals that can be prepared at home with minimal effort and cost.",
    },
    {
      question: "How often will I receive follow-ups?",
      answer:
        "We provide regular follow-ups based on your program: weekly progress tracking, bi-weekly comprehensive reviews, and daily WhatsApp support. Additionally, we're available 24/7 for any questions, guidance, or motivation you may need throughout your journey.",
    },
    {
      question: "Can I follow this diet plan if I have a medical condition?",
      answer:
        "Yes! We offer specialized Medical Weight Loss Programs for conditions such as thyroid disorders, PCOS/PCOD, diabetes, hypertension, high cholesterol, fatty liver, and more. We coordinate with your healthcare provider and create condition-specific plans that support your medical treatment.",
    },
    {
      question: "How long will it take to see results?",
      answer:
        "Most clients notice positive changes within 2–4 weeks, including improved energy levels, better digestion, and initial weight changes. Significant and sustainable results typically appear within 3–6 months. We focus on long-term transformation rather than quick fixes, ensuring results that last.",
    },
    {
      question:
        "What payment modes are available, and can I make part payments?",
      answer:
        "We offer multiple payment options like Paytm, bank transfers, GPay, BHIM UPI, credit cards, and PayPal. However, we currently do not provide part-payment or EMI facilities.",
    },
    {
      question: "What if I don't lose any weight?",
      answer:
        "We always strive to provide the best results. It is very rare for a client not to lose any weight. We maintain a strong success rate, and in exceptional cases, we may extend the plan from our side. However, please note that we do not offer refunds.",
    },
    {
      question: "Will I gain weight if I stop the diet plan?",
      answer:
        "We do not recommend stopping the diet plan before reaching your target weight, as your weight may fluctuate. After completing the program, we provide a Maintenance Plan that you must follow for at least 3 months to maintain your results. The Maintenance Plan is included in every program.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: { scale: 1.02, y: -2 },
  };

  const contentVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const iconVariants: Variants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section id="faq" className="bg-gray-50 relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute "></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Get Your Questions Answered
          </motion.div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our personalized nutrition
            programs and support system
          </p>
        </motion.div>

        {/* FAQ Section → NOW 2 COLUMNS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  variants={iconVariants}
                  animate={openIndex === index ? "open" : "closed"}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-12 border-l-2 border-green-200">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Our nutrition experts are here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://wa.me/919321057899"
                target="_blank"
                className="px-6 py-3 bg-white text-green-700 rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2 inline-block" />
                Chat on WhatsApp
              </motion.a>
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href="tel:+919321057899"
                className="px-6 py-3 bg-green-700 text-white rounded-xl font-semibold"
              >
                <Phone className="w-5 h-5 mr-2 inline-block" />
                Call Now
              </motion.a>
            </div>
            {/* <p className="text-green-200 text-sm mt-4">
              Available 24/7 for your convenience
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSectioncontact;
