// app/about/page.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import tejalimage from "@/public/image/homeimage1.jpg"; // You'll need to add this image

import logo2 from "@/public/image/logo.png";

import {
  Users,
  Award,
  Target,
  Heart,
  Leaf,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Zap,
  Apple,
  Salad,
  Sprout,
  GraduationCap,
  Stethoscope,
  Home,
  School,
  HeartHandshake,
  Crown,
  MapPin,
  X,
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { image } from "framer-motion/client";

const certificates = [
  { src: "/CertificateTejal.png", alt: "Dietitian Tejal Certificate 1" },
  { src: "/CertificateTejal2.png", alt: "Dietitian Tejal Certificate 2" },
  { src: "/CertificateTejal3.png", alt: "Dietitian Tejal Certificate 3" },
  { src: "/CertificateTejal4.png", alt: "Dietitian Tejal Certificate 4" },
];

const AboutPage = () => {
  const [certIndex, setCertIndex] = useState(0);

  const paginateCert = (direction: number) => {
    setCertIndex(
      (prev) => (prev + direction + certificates.length) % certificates.length
    );
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingVariants: Variants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const philosophyCards = [
    {
      icon: Target,
      title: "Real Food, Real Results",
      description:
        "Simple, balanced, home-based meals using accessible Indian ingredients - no exotic foods or restrictive diets.",
      color: "green" as const,
      features: [
        "Home-based meals",
        "Indian ingredients",
        "No restrictive diets",
      ],
    },
    {
      icon: Heart,
      title: "Sustainable Lifestyle",
      description:
        "Building habits and routines that fit into modern lifestyles for long-term health transformation.",
      color: "blue" as const,
      features: ["Habit formation", "Modern lifestyle", "Long-term results"],
    },
    {
      icon: GraduationCap,
      title: "Science-Based Approach",
      description:
        "Combining 15+ years of clinical expertise with evidence-based nutrition practices for guaranteed results.",
      color: "purple" as const,
      features: ["Clinical expertise", "Evidence-based", "Medical nutrition"],
    },
    {
      icon: Users,
      title: "Holistic Wellness",
      description:
        "Integrating mindful eating, emotional wellness, and practical counselling into every program.",
      color: "pink" as const,
      features: [
        "Mindful eating",
        "Emotional wellness",
        "Practical counselling",
      ],
    },
  ];

  const expertiseAreas = [
    {
      icon: "⚖️",
      title: "Weight Loss & Management",
      description:
        "Sustainable weight management programs tailored to individual metabolism and lifestyle.",
    },
    {
      icon: "🩺",
      title: "Diabetes & Thyroid Care",
      description:
        "Specialized diets for metabolic disorders with proven results in management and reversal.",
    },
    {
      icon: "🌸",
      title: "PCOS/PCOD Management",
      description:
        "Hormonal balance through targeted nutrition and lifestyle interventions.",
    },
    {
      icon: "❤️",
      title: "Cardiac Health",
      description:
        "Cholesterol management and heart-healthy eating plans for preventive care.",
    },
    {
      icon: "🤰",
      title: "Pregnancy Nutrition",
      description:
        "Complete maternal and postpartum nutrition support for mother and child.",
    },
    {
      icon: "👨‍💼",
      title: "Corporate Wellness",
      description:
        "Workplace nutrition programs and stress management for busy professionals.",
    },
  ];

  const experienceTimeline = [
    {
      year: "2012",
      title: "Clinical Nutritionist",
      institution: "LTMG Hospital (Sion Hospital)",
      description: "Began clinical practice in prestigious medical institution",
    },
    {
      year: "2015",
      title: "Diabetic Educator",
      institution: "Bhatia Hospital, Tardeo",
      description: "Specialized in diabetes management and education",
    },
    {
      year: "2019",
      title: "Founded DietFiniti",
      institution: "Lower Parel, Mumbai",
      description:
        "Established first clinic with personalized nutrition approach",
    },
    {
      year: "2021",
      title: "National Recognition",
      institution: "India 2000 Best MSME Awards",
      description: "Nominated for excellence in health and nutrition sector",
    },
    {
      year: "2025",
      title: "Expansion to Thane",
      institution: "Kolshet Road Branch",
      description: "Second clinic launch due to outstanding client response",
    },
  ];

  const communityWork = [
    {
      icon: HeartHandshake,
      title: "Vatsalya Foundation",
      description:
        "Promoting nutrition awareness among orphan children in Mumbai",
      color: "pink",
    },
    {
      icon: Users,
      title: "BMC Anganwadi Sevikas",
      description:
        "Nutrition training for Brihanmumbai Municipal Corporation staff",
      color: "blue",
    },
    {
      icon: School,
      title: "Corporate Workshops",
      description:
        "Workplace wellness programs focusing on nutrition and mental balance",
      color: "green",
    },
  ];

  const stats = [
    {
      number: "12+",
      label: "Years Experience",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "250+",
      label: "5★ Reviews",
      icon: Star,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "2",
      label: "Clinics",
      icon: Home,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: "2000+",
      label: "Lives Transformed",
      icon: Users,
      color: "from-orange-500 to-amber-500",
    },
  ];

  const differentiators = [
    {
      icon: "🎯",
      title: "Medically Sound Plans",
      description:
        "Every plan is crafted with clinical expertise and evidence-based research.",
    },
    {
      icon: "🍛",
      title: "Indian Food Focus",
      description:
        "Real, accessible Indian foods - no restrictive or foreign diet plans.",
    },
    {
      icon: "💻",
      title: "Online & Offline",
      description:
        "Consultations available across India and abroad through multiple channels.",
    },
    {
      icon: "🧠",
      title: "Mind-Body Approach",
      description:
        "Holistic counselling focusing on both mental and physical wellness.",
    },
    {
      icon: "📊",
      title: "Measurable Results",
      description: "Trackable progress with consistent client success stories.",
    },
    {
      icon: "🤝",
      title: "Long-term Partnership",
      description:
        "We become your health partners, not just service providers.",
    },
  ];

  const consultationMethods = [
    {
      icon: "🏢",
      title: "In-Person Consultations",
      description:
        "Personalized face-to-face sessions at our Mumbai & Thane clinics",
    },
    {
      icon: "💻",
      title: "Online Consultations",
      description:
        "Virtual sessions for clients across India and internationally",
    },
    {
      icon: "📞",
      title: "Follow-up Support",
      description:
        "Continuous guidance through calls, messages, and progress tracking",
    },
  ];

  // Fixed TypeScript typing with explicit keys
  const colorMap: Record<
    string,
    { bg: string; light: string; text: string; border: string }
  > = {
    blue: {
      bg: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    green: {
      bg: "from-green-500 to-emerald-500",
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
    },
    purple: {
      bg: "from-purple-500 to-violet-500",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    pink: {
      bg: "from-pink-500 to-rose-500",
      light: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-200",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="absolute top-20 left-20"
          >
            <Apple className="w-12 h-12 text-white/20" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1 }}
            className="absolute bottom-20 right-20"
          >
            <Salad className="w-16 h-16 text-white/15" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 2 }}
            className="absolute top-1/2 left-1/4"
          >
            <Sprout className="w-10 h-10 text-white/25" />
          </motion.div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-sky-500/15 to-cyan-600/10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const randomValues = {
              left: (i * 7.5) % 100,
              top: (i * 13.3 + 5) % 100,
              duration: 4 + ((i * 0.2) % 3),
              delay: (i * 0.2) % 3,
            };

            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full"
                style={{
                  left: `${randomValues.left}%`,
                  top: `${randomValues.top}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: randomValues.duration,
                  repeat: Infinity,
                  delay: randomValues.delay,
                }}
              />
            );
          })}
        </div>

        <div className="relative max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <div className="space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-3"
              >
                <Image
                  src={logo2}
                  alt="Dietfiniti Logo"
                  width={240}
                  height={80}
                  className="object-contain mx-auto"
                  priority
                />
                {/* <div className="text-white/80 text-lg font-medium tracking-wide">
                  by DietDost
                </div> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-4xl mx-auto"
              >
                Helping people move away from confusion, restriction, and guilt
                — toward clarity and sustainable health.{" "}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto"
              >
                Most people don’t struggle with health because they lack
                discipline. They struggle because they’ve been following advice
                that was never designed for real life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Start Your Journey
                </button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-3`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 lg:mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Dietfiniti was created
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Problem Statement */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Over the years, we noticed a common pattern. People trying to
                  improve their health were:
                </p>

                <div className="space-y-4">
                  {[
                    "Jumping from one diet to another",
                    "Blaming themselves when results didn't last",
                    "Feeling overwhelmed by conflicting nutrition advice",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      </div>
                      <p className="text-gray-800 font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
                >
                  <p className="text-gray-900 font-semibold text-lg">
                    The problem wasn&apos;t effort or intention.
                  </p>
                  <p className="text-gray-700 mt-2">
                    The problem was generic solutions applied to individual
                    lives.
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Column - Solution */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
                    Our Solution
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    A better way forward
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Dietfiniti was created to offer a better way — one that
                    respects the realities of modern life while staying grounded
                    in nutritional science.
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -z-10 top-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-emerald-200 to-teal-200 opacity-30"></div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center "
            ></motion.div>
          </div>
        </motion.section>
      </section>

      {/* Our Story Section */}
      <section className=" bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 border border-green-200"
            >
              <Zap className="w-4 h-4 mr-2" />
              Founder&apos;s Vision
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
              The expert behind{" "}
              <span className="text-green-600">DietFiniti</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 leading-relaxed text-lg order-2 lg:order-1"
            >
              <p>
                <strong>
                  Dietfiniti was founded in 2019 by Dietitian Tejal
                </strong>{" "}
                with a clear purpose — to make expert nutrition practical,
                accessible, and sustainable for real life.
              </p>

              <p>
                She holds an <strong>MSc in Dietetics</strong>, is a{" "}
                <strong>Certified Diabetic Educator</strong>, and brings{" "}
                <strong>12+ years of clinical experience</strong>, including
                work at reputed institutions such as{" "}
                <strong>LTMG (Sion) Hospital</strong> and{" "}
                <strong>Bhatia Hospital</strong>.
              </p>

              <p>
                Through years of practice, she observed a recurring pattern —
                people often blamed themselves when diets failed, even though
                those plans were rarely personalised, realistic, or sustainable.
              </p>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100 mt-8">
                <h3 className="font-bold text-gray-900 text-xl mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Her approach focuses on:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Understanding the person behind the problem",
                    "Adapting nutrition to lifestyle, stress, and routines",
                    "Supporting long-term health goals over short-term fixes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                She also holds{" "}
                <strong>
                  advanced certifications in specialised areas of nutrition
                </strong>
                , enabling a deeper, more nuanced approach to individual health
                needs.
              </p>

              <p>
                What began as a{" "}
                <strong>single clinic in Lower Parel, Mumbai</strong>, has since
                expanded to <strong>Kolshet Road, Thane</strong>, driven by
                consistent client trust and outcomes.
              </p>

              <p>
                To date, <strong>thousands of individuals</strong> have improved
                their health with Dietfiniti&apos;s personalised nutrition
                approach — one that respects Indian food culture while fitting
                modern lifestyles.
              </p>

          
            </motion.div>

            {/* Right Column - Tejal's Picture */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Tejal's Profile Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 shadow-xl">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
                 
                <Image
                  src={tejalimage}
                  alt="Dietitian Tejal - Founder of DietFiniti"
                  width={400}
                  height={600}
                  className="object-cover rounded-xl w-full h-full"
                />
             
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  variants={floatingVariants}
                  animate="float"
                  className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full shadow-lg"
                />
                <motion.div
                  variants={floatingVariants}
                  animate="float"
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-400 rounded-full shadow-lg"
                />
              </div>

              {/* Green Box with Quote - Now Smaller */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
                  <div className="text-4xl font-black opacity-20 mb-2 absolute top-4 left-6">
                    &rdquo;
                  </div>
                  <p className="text-lg font-light leading-relaxed italic relative z-10">
                    &quot;Good nutrition should be practical, personalized, and
                    sustainable — transforming health into a lifestyle, not a
                    temporary goal.&quot;
                  </p>
                </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 mt-6">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-gray-900 text-lg">
                    National Recognition
                  </h4>
                </div>
                <p className="text-gray-700">
                  Dietfiniti has also received national recognition as part of
                  the <strong>India 2000 Best MSME Awards</strong>, reinforcing
                  its commitment to quality and impact in healthcare.
                </p>
              </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-10 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Qualifications & Credentials
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
              Expert <span className="text-blue-600">Qualifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Excellence Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
            >
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">
                Academic Excellence
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>MSc in Dietetics</strong> - Advanced specialization
                    in clinical nutrition
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Certified Diabetic Educator</strong> - Specialized
                    diabetes management training
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Medical Nutrition Therapy</strong> - Evidence-based
                    therapeutic nutrition
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Clinical Training Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
            >
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">
                Clinical Training
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>LTMG Hospital (Sion Hospital)</strong> -
                    Comprehensive clinical practice
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Bhatia Hospital, Tardeo</strong> - Diabetic care
                    specialization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>CTC BMT Centre, Mumbai</strong> - Advanced medical
                    nutrition therapy
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Certificate Display Section - Shows like an image/section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-4 border border-amber-200"
              >
                <Award className="w-4 h-4 mr-2" />
                Official Certification
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Dietitian Tejal&apos;s Certificate
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Official certification showcasing professional qualifications
                and expertise in clinical nutrition
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="relative aspect-[4/3] bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-200 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={certIndex}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-3 sm:inset-4"
                    >
                      <Image
                        src={certificates[certIndex].src}
                        alt={certificates[certIndex].alt}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  onClick={() => paginateCert(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 transition-all"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => paginateCert(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 transition-all"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {certificates.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCertIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === certIndex
                        ? "w-8 bg-amber-500"
                        : "w-2 bg-gray-300 hover:bg-amber-300"
                    }`}
                    aria-label={`Go to certificate ${i + 1}`}
                  />
                ))}
              </div>

              <p className="text-center text-xs text-gray-500 mt-2">
                {certIndex + 1} / {certificates.length}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Enhanced Philosophy Section */}
      <section className="py-10 lg:py-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[size:60px_60px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-green-700 text-sm font-semibold shadow-lg mb-6 border border-green-200"
            >
              <Target className="w-4 h-4 mr-2" />
              Our Healthy Philosophy
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
              Real Food. Real Science.{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Real Results.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four foundational principles that guide every transformation at
              DietFiniti
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {philosophyCards.map((philosophy, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${
                    colorMap[philosophy.color].bg
                  } opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 ${
                        colorMap[philosophy.color].light
                      } rounded-2xl flex items-center justify-center shadow-lg border ${
                        colorMap[philosophy.color].border
                      }`}
                    >
                      <philosophy.icon
                        className={`w-8 h-8 ${colorMap[philosophy.color].text}`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {philosophy.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {philosophy.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {philosophy.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`h-1 bg-gradient-to-r ${
                      colorMap[philosophy.color].bg
                    } rounded-full mt-6`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-10 lg:py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-200"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              Areas of Specialization
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{" "}
              <span className="text-blue-600">Nutrition Care</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Expert guidance for all your health and wellness needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6 border border-purple-200"
            >
              <Award className="w-4 h-4 mr-2" />
              Professional Journey
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              15+ Years of <span className="text-purple-600">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>

            <div className="space-y-12">
              {experienceTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                      <div className="text-sm text-purple-600 font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-600 font-medium mb-2">
                        {item.institution}
                      </p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Year indicator */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <div
                      className={`text-2xl font-bold text-gray-400 text-center ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-10 lg:py-10 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6 border border-teal-200"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Our Clinics
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Us in <span className="text-teal-600">Mumbai & Thane</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Lower Parel Clinic
                  </h3>
                  <p className="text-teal-600 font-medium">Since 2019</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our flagship clinic where it all began, serving clients from
                across Mumbai with personalized nutrition care.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📍 Lower Parel, Mumbai</p>
                <p>🏢 Established: 2019</p>
                <p>⭐ Original Location</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  New
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Thane Clinic
                  </h3>
                  <p className="text-orange-600 font-medium">New in 2025</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Our newest location opened in response to overwhelming client
                demand, bringing expert nutrition care to Thane.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>📍 Kolshet Road, Thane</p>
                <p>🏢 Established: 2025</p>
                <p>🚀 Expansion Location</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Both clinics offer the same high-quality, personalized nutrition
              care that has made DietFiniti trusted by thousands.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-white bg-teal-500 rounded-xl hover:bg-teal-600 transition-colors duration-300 font-semibold"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions & Contact Info
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Work */}
      <section className="py-10 lg:py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-medium mb-6 border border-pink-200"
            >
              <HeartHandshake className="w-4 h-4 mr-2" />
              Community Outreach
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Giving Back to <span className="text-pink-600">Society</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Beyond the clinic - nurturing health awareness in the community
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {communityWork.map((work, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 ${
                      colorMap[work.color].light
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      colorMap[work.color].border
                    } border`}
                  >
                    <work.icon
                      className={`w-10 h-10 ${colorMap[work.color].text}`}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {work.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-10 lg:py-10 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6 border border-amber-200"
            >
              <Crown className="w-4 h-4 mr-2" />
              Why Choose DietFiniti
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beyond <span className="text-amber-600">Ordinary</span> Nutrition
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-6 right-6 text-gray-400 group-hover:text-amber-500 transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Consultation Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Consultation Options
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We meet you where you are with multiple consultation channels
                for your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {consultationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl border border-amber-200 shadow-lg"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-amber-200 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Health?
              </h3>
              {/* <p className="text-gray-600 text-lg mb-8">
                Join 5,000+ individuals who have transformed their lives with
                DietFiniti
              </p> */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
