"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Scale, 
  HeartPulse, 
  Baby, 
  Trophy, 
  MapPin,
  Clock,
  Users,
  CheckCircle 
} from "lucide-react";

export default function BelowHeroSection() {
  const quickAnswers = [
    {
      icon: Scale,
      title: "Weight Loss Dietitian Mumbai",
      answer: "Sustainable Indian meal plans focused on your lifestyle, not crash diets. Realistic 0.5-1kg/week progress.",
      href: "/services/weight-loss",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HeartPulse,
      title: "Medical Weight Loss (PCOS, Thyroid, Diabetes)",
      answer: "Nutrition plans that work alongside your doctor. Safe support for PCOS, thyroid, diabetes & more.",
      href: "/services/medical-weight-loss",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Baby,
      title: "Pregnancy & Postpartum Diet",
      answer: "Trimester-specific Indian plans for healthy pregnancy and recovery. Safe for mother and baby.",
      href: "/services/pregnancy-diet",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Trophy,
      title: "Sports & Performance Nutrition",
      answer: "Fuel your training with practical Indian meals. Recovery, performance & energy optimisation.",
      href: "/services/sports-nutrition",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const trustSignals = [
    { icon: MapPin, label: "Mumbai (Lower Parel) & Thane Clinics" },
    { icon: Clock, label: "Same-week appointments available" },
    { icon: Users, label: "Personalised 1:1 support" },
    { icon: CheckCircle, label: "Indian meals you already cook" },
  ];

  return (
    <section 
      aria-labelledby="quick-answers-heading"
      className="bg-white border-b border-gray-100 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Direct Answer for AI Overviews & Featured Snippets */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 border border-teal-200">
            <CheckCircle className="w-4 h-4" />
            Trusted by 5000+ clients in Mumbai, Thane &amp; online
          </div>
          
          <h2 id="quick-answers-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Looking for a <span className="text-teal-700">dietitian in Mumbai</span>?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Get straight answers and the right plan for you. Practical Indian nutrition, 
            no generic charts, no supplements.
          </p>
        </div>

        {/* Quick Answers Grid - Perfect for AEO / AI Overviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {quickAnswers.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-gray-200 hover:border-teal-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {item.answer}
                </p>
                
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 group/link"
                >
                  Learn more 
                  <span className="ml-1.5 group-hover/link:translate-x-0.5 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Bar - Strong for local SEO and AI summaries */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-white border border-teal-100 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Why people choose DietFiniti</p>
              <p className="text-sm text-gray-600">Led by Dietitian Tejal (MSc Dietetics, Certified Diabetic Educator)</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {trustSignals.map((signal, idx) => {
                const Icon = signal.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-sm leading-tight text-gray-700">{signal.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-teal-100 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/contact" className="font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5">
              Book in-person (Lower Parel / Thane)
            </Link>
            <Link href="/online-dietitian-consultation" className="font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5">
              Start online consultation anywhere in India
            </Link>
            <Link href="/bmi-calculator" className="font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1.5">
              Calculate your BMI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
