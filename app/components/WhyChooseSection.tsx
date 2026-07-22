// components/AboutTrustSection.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import tejalImage from "@/public/image/homeimage1.jpg"; // You'll need to add this image

const AboutTrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-cyan-400"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What actually works instead
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Sustainable weight loss happens when nutrition works with your
                body — not against it.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    At Dietfiniti, we focus on:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Personalised nutrition instead of rigid rules",
                      "Long-term consistency, not short-term results",
                      "Plans that adapt to your lifestyle, not disrupt it",
                    ].map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-4"></div>
                        <p className="text-lg text-gray-700">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">
                        No extreme restrictions.
                      </p>
                      <p className="font-semibold text-gray-900 text-lg mb-1">
                        No unrealistic promises.
                      </p>
                      <p className="text-gray-700 mt-2">
                        Just practical, science-backed nutrition support.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Our programs are designed to help you:
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Lose weight steadily",
                        "Improve energy and digestion",
                        "Build habits you can maintain",
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mr-3 mt-0.5" />
                          <p className="text-gray-700">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Founded & Led by Dietitian Tejal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={tejalImage}
                  alt="Dietitian Tejal - Founder & Head Dietitian at Dietfiniti"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority={false}
                />
                {/* Professional badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-gray-800">
                      12+ Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Founded & Led by Dietitian Tejal
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-800 rounded-full text-sm font-semibold">
                    Where Nutrition Meets Real Life
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold">
                    Mumbai&apos;s Trusted Dietician
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Dietfiniti is led by{" "}
                    <span className="font-semibold text-gray-900">
                      Dietitian Tejal
                    </span>
                    , a qualified nutrition expert with{" "}
                    <span className="font-semibold text-gray-900">
                      12+ years of experience
                    </span>
                    , who has worked with individuals struggling with weight
                    loss, PCOS, and metabolic health.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <p className="text-lg italic text-gray-800 leading-relaxed">
                      &quot;After seeing how often people blamed themselves for plans
                      that were never designed for real life, I built Dietfiniti
                      around a simple belief: Nutrition should support your life
                      — not control it.&quot;
                    </p>
                    <p className="mt-4 font-semibold text-gray-900">
                      — Dietitian Tejal
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Through clinics in Mumbai and Thane, Dietfiniti continues to
                    help people move away from extreme dieting and toward
                    sustainable, confidence-building results.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <Link
                      href="/about"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Know more about Dietician Tejal
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default AboutTrustSection;
