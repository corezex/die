// components/ProgramsSection.tsx
"use client";

import Link from "next/link";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Heart,
  Target,
  Baby,
  Diamond,
  Activity,
  Scale,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhyChooseSection from "./WhyChooseSection";
import weightlossimg from "@/public/image/weightgainimg1.jpg";
import medicalWeightLossImg from "@/public/image/MedicalWeightLoss1.jpg";
import weightGainImg from "@/public/image/weightgainimg1.jpg";
import pregnancyImg from "@/public/image/pregnancy-diet-img1.jpg";
import bridalImg from "@/public/image/bridal-dietimg2.png";
import sportsImg from "@/public/image/sports-nutritionimg1.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      image: weightlossimg,
      title: "Weight Loss Program",
      description:
        "Our Weight Loss Program is designed for individuals who want to lose weight in a healthy, sustainable way without any existing medical conditions.",
      icon: Scale,
      color: "from-blue-500 to-cyan-500",
      slug: "weight-loss",
      features: [
        "Customized Diet Plans",
        "Lifestyle Coaching",
        "Progress Tracking",
      ],
      duration: "12-16 weeks",
      clients: "5000+",
      rating: "4.9",
      popular: true,
    },
    {
      image: medicalWeightLossImg,
      title: "Medical Weight Loss Program",
      description:
        "Our Medical Weight Loss Program is specifically designed for individuals who need to lose weight while managing medical conditions.",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      slug: "medical-weight-loss",
      features: [
        "Medical Condition Management",
        "Doctor Collaboration",
        "Therapeutic Diets",
      ],
      duration: "16-24 weeks",
      clients: "3000+",
      rating: "4.8",
      popular: false,
    },
    {
      image: weightGainImg,
      title: "Weight Gain Program",
      description:
        "Our Weight Gain Program is designed for individuals with fast metabolism, hypermetabolism, or those who are underweight and want to gain healthy weight.",
      icon: Target,
      color: "from-orange-500 to-amber-500",
      slug: "weight-gain",
      features: ["Muscle Building", "Calorie Management", "Nutrition Timing"],
      duration: "12-20 weeks",
      clients: "2000+",
      rating: "4.7",
      popular: true,
    },
    {
      image: pregnancyImg,
      title: "Pregnancy Diet Plan",
      description:
        "Our Pregnancy Diet Plan is designed for women in their pregnancy stages who wish to maintain a healthy weight and balanced nutrition.",
      icon: Baby,
      color: "from-pink-500 to-rose-500",
      slug: "pregnancy-diet",
      features: [
        "Trimester-specific Plans",
        "Baby Development Focus",
        "Postpartum Care",
      ],
      duration: "40 weeks + postpartum",
      clients: "1500+",
      rating: "4.9",
      popular: false,
    },
    {
      image: bridalImg,
      title: "Bridal Diet Plan",
      description:
        "Our Bridal Diet Plan is designed to help brides look and feel their best for the wedding day by supporting skin glow, energy, and healthy weight management.",
      icon: Diamond,
      color: "from-purple-500 to-violet-500",
      slug: "bridal-diet",
      features: ["Skin Glow Focus", "Timeline-based Plan", "Stress Management"],
      duration: "12-24 weeks",
      clients: "1800+",
      rating: "4.8",
      popular: true,
    },
    {
      image: sportsImg,
      title: "Sports Nutrition Plan",
      description:
        "Our Sports Nutrition Plan helps athletes achieve peak performance and recovery through tailored diet and hydration strategies.",
      icon: Activity,
      color: "from-red-500 to-rose-500",
      slug: "sports-nutrition",
      features: [
        "Performance Optimization",
        "Recovery Nutrition",
        "Hydration Strategy",
      ],
      duration: "Ongoing",
      clients: "1200+",
      rating: "4.7",
      popular: false,
    },
  ];

  return (
    <section
      id="programs"
      className="py-10 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/40 via-transparent to-blue-50/30"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-0"></div>

      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-200 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <WhyChooseSection />

        {/* Programs Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">
              Our Specialized Programs
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Health Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the program that best fits your health goals and
            requirements. Each plan is carefully crafted for sustainable,
            life-changing results.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-100/50 group-hover:border-transparent relative">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Enhanced Image Section */}
                <div className="relative h-56 overflow-hidden">
                  {/* Gradient Overlays */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 pointer-events-none`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                  ></div>

                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Enhanced Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`absolute top-5 right-5 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <program.icon
                      className={`w-7 h-7 ${
                        program.color.replace("from-", "text-").split(" ")[0]
                      }`}
                    />
                  </motion.div>

                  {/* Program Stats */}
                  {/* <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-white text-sm font-medium">
                        {program.rating}
                      </span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-sm font-medium">
                        {program.clients}
                      </span>
                    </div>
                  </div> */}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 z-20">
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg mb-2">
                      {program.title}
                    </h3>
                    {/* <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div> */}
                  </div>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r ${program.color} group-hover:w-full transition-all duration-500 z-30`}
                  ></div>
                </div>

                {/* Enhanced Content Section */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-4 space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-center text-sm text-gray-500 group/feature"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                        <span className="group-hover/feature:text-gray-700 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/50 mt-auto">
                    <motion.div whileHover={{ x: 5 }} className="flex-1">
                      <Link
                        href={`/services/${program.slug}`}
                        className="inline-flex items-center font-semibold group/link cursor-pointer relative z-10 py-1"
                      >
                        <span
                          className={`bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                        >
                          Learn More
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 ml-2 ${
                            program.color
                              .replace("from-", "text-")
                              .split(" ")[0]
                          } group-hover/link:translate-x-1 transition-transform duration-200`}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 pointer-events-none`}
                ></div>
              </div>

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${program.color} opacity-5 -z-20 pointer-events-none`}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
