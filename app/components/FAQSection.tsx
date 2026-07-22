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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How it works?",
      answer:
        "Once you make the payment, you need to fill in our extensive history form. One dietitian and counsellor will be assigned to you who will be in touch with you throughout the journey. You need to update your progress every week, and based on that, you will receive a new desi diet plan.",
    },
    {
      question: "Do I need to join gym?",
      answer:
        "No, gym is not required. But along with our diet plans, you need to follow any 30–45 minutes of activity of your choice (yoga, brisk walk, dance, home exercises) for better results.",
    },
    {
      question: "Do you give any kind of guarantee for weight loss?",
      answer:
        "No. Results vary with health history, lifestyle, medications and consistency. We focus on realistic, sustainable habits rather than promising a specific outcome.",
    },
    {
      question:
        "I have PCOD, thyroid issues, diabetes & other medical conditions. Will that be cured with this diet?",
      answer:
        "Your medical condition requires proper medical assistance along with proper diet, which plays a supplementary role. Your medical condition cannot be completely cured but can be managed by diet, and it will also help to prevent further issues by keeping you healthy.",
    },
    {
      question: "I stay in hostel/PG. Can I follow this diet?",
      answer:
        "It's comparatively difficult to follow our program since cooking is required. If you can manage cooking, you can follow the program. We will give you options accordingly.",
    },
    {
      question: "I have just delivered a baby. Can I start your diet plan?",
      answer:
        "It is advisable to start your weight loss journey after 6 months of delivery.",
    },
    {
      question: "How much weight will I be able to lose?",
      answer:
        "Weight loss depends on metabolic rate, body type, medical condition, and how well you follow the plan. Typically, a person loses 0.5–1 kg per week, but results differ from person to person.",
    },
    {
      question:
        "Do you give any medicines, powders or supplements for weight loss?",
      answer:
        "We believe in natural weight loss, so we do not provide any powders, medicines, or supplements. We provide healthy diet plans for weight loss.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

          <h2 className="text-3xl lg:text-4xl font-bold text-[#262262] mb-4">
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

export default FAQSection;
