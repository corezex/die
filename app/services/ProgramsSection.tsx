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
} from "lucide-react";
import { motion } from "framer-motion";


const ProgramsSection = () => {
  const programs = [
    {
      title: "Weight Loss Program",
      description:
        "Our Weight Loss Program is designed for individuals who want to lose weight in a healthy, sustainable way without any existing medical conditions.",
      longDescription:
        "This program focuses on creating a calorie deficit while ensuring you get all the nutrients your body needs. We don't believe in crash diets or extreme restrictions. Instead, we create balanced meal plans that help you lose weight gradually while maintaining your energy levels and overall health.",
      icon: Scale,
      features: [
        "Customized diet plans based on your lifestyle and preferences",
        "No fancy or expensive foods required",
        "Flexible meal options for variety",
        "Weekly follow-ups to track progress",
        "Daily WhatsApp support for guidance and motivation",
        "Recipe suggestions and meal preparation tips",
        "Strategies for eating out and social situations",
        "Long-term maintenance guidance",
      ],
      idealFor:
        "Individuals looking to lose weight for aesthetic reasons, improved fitness, or overall health enhancement. Perfect for those without any underlying medical conditions who want to achieve their weight goals through sustainable lifestyle changes.",
      color: "from-blue-500 to-cyan-500",
      slug: "weight-loss",
    },
    {
      title: "Medical Weight Loss Program",
      description:
        "Our Medical Weight Loss Program is specifically designed for individuals who need to lose weight while managing medical conditions.",
      longDescription:
        "This program takes a more clinical approach, considering how your medical condition affects your metabolism, nutritional needs, and weight loss capacity. We work in coordination with your healthcare provider to ensure your diet plan complements your medical treatment and helps manage your condition effectively.",
      icon: Heart,
      features: [
        "Condition-specific customized diet plans",
        "Regular monitoring of relevant health parameters",
        "Coordination with your doctor when needed",
        "Weekly follow-ups and progress tracking",
        "Daily WhatsApp support",
        "Education about managing your condition through nutrition",
        "Medication-compatible meal planning",
      ],
      conditions: [
        "Thyroid Disorders (Hypothyroidism, Hyperthyroidism)",
        "PCOS/PCOD (Polycystic Ovary Syndrome)",
        "Type 1 and Type 2 Diabetes",
        "Hypertension (High Blood Pressure)",
        "High Cholesterol and Dyslipidemia",
        "Fatty Liver Disease (NAFLD)",
        "Renal Issues (Kidney-related concerns)",
        "Cardiovascular Conditions",
      ],
      idealFor:
        "Individuals with diagnosed medical conditions who need specialized nutritional guidance for both weight management and disease management. Perfect for those who want to improve their health markers while losing weight safely.",
      color: "from-green-500 to-emerald-500",
      slug: "medical-weight-loss",
    },
    {
      title: "Weight Gain Program",
      description:
        "Our Weight Gain Program is designed for individuals with fast metabolism, hypermetabolism, or those who are underweight and want to gain healthy weight.",
      longDescription:
        "Unlike weight loss, healthy weight gain requires a strategic approach to increase calorie intake while ensuring the weight gained is primarily muscle mass and not just fat. We focus on nutrient-dense, calorie-rich foods that support healthy weight gain without relying on unhealthy junk foods or supplements.",
      icon: Target,
      features: [
        "Customized high-calorie meal plans",
        "Frequent meal and snack schedules",
        "Calorie-dense yet nutritious food options",
        "No fancy or expensive ingredients",
        "Bi-weekly follow-ups to monitor progress",
        "Daily WhatsApp support",
        "Strategies to increase appetite naturally",
        "Tips for healthy weight maintenance",
      ],
      idealFor:
        "Individuals who are underweight, have fast metabolism, struggle to gain weight despite eating regularly, or want to build a healthier physique. Perfect for those who want to gain weight in a healthy, sustainable manner without using supplements or unhealthy foods.",
      color: "from-orange-500 to-amber-500",
      slug: "weight-gain",
    },
    {
      title: "Pregnancy Diet Plan",
      description:
        "Our Pregnancy Diet Plan is designed for women in their pregnancy stages who wish to maintain a healthy weight and balanced nutrition.",
      longDescription:
        "This program provides trimester-specific nutrition guidance to support both mother and baby's health throughout pregnancy and postpartum recovery.",
      icon: Baby,
      features: [
        "Customized trimester-specific nutrient-dense diet plans",
        "Personalized physical activity recommendations for each pregnancy stage",
        "Addresses concerns like postpartum weight management",
        "Empowers new mothers to make informed, healthy lifestyle choices",
        "Regular follow ups",
        "Regular guidance on WhatsApp",
      ],
      idealFor:
        "Expecting mothers who want to maintain healthy weight during pregnancy, manage pregnancy-related nutrition concerns, and prepare for postpartum recovery. Perfect for first-time mothers and those seeking professional nutrition guidance throughout their pregnancy journey.",
      color: "from-pink-500 to-rose-500",
      slug: "pregnancy-diet",
    },
    {
      title: "Bridal Diet Plan",
      description:
        "Our Bridal Diet Plan is designed to help brides look and feel their best for the wedding day by supporting skin glow, energy, and healthy weight management.",
      longDescription:
        "This program is customized to fit around your hectic pre-wedding schedule while delivering visible results.",
      icon: Diamond,
      features: [
        "Customized plan for weight management, radiant skin, improved energy, and overall confidence",
        "Addresses hectic shopping and wedding preparation schedules",
        "Readily available ingredients - no expensive or hard-to-find foods",
        "Promote healthy diet choices for best outcome",
        "Regular follow ups",
        "Regular guidance on WhatsApp",
      ],
      idealFor:
        "Brides-to-be who want to achieve their ideal weight, glowing skin, and high energy levels for their wedding day. Perfect for those with busy wedding preparation schedules who need a practical, results-driven nutrition plan.",
      color: "from-purple-500 to-violet-500",
      slug: "bridal-diet",
    },
    {
      title: "Sports Nutrition Plan",
      description:
        "Our Sports Nutrition Plan helps athletes achieve peak performance and recovery through tailored diet and hydration strategies.",
      longDescription:
        "This program is customized based on your specific sport, training intensity, body type, and performance goals.",
      icon: Activity,
      features: [
        "Customized plans based on sport, body type, goals, and intensity",
        "Regular evaluation and adjustment according to performance and feedback from coaches",
        "Supplements only as needed after consultation",
        "Pre-workout, during-workout, and post-workout nutrition strategies",
        "Regular follow ups",
        "Regular guidance on WhatsApp",
      ],
      idealFor:
        "Athletes and fitness enthusiasts who want to optimize their performance, improve recovery, build muscle, or achieve sport-specific body composition goals. Perfect for competitive athletes, recreational sports players, and anyone training for athletic events.",
      color: "from-red-500 to-orange-500",
      slug: "sports-nutrition",
    },
  ];

  return (
   <section
  id="programs"
  className="py-10 bg-gray-50 relative overflow-hidden"
>
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    
   
    {/* Programs Grid */}
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-green-600">Programs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the program that best fits your health goals and
          requirements
        </p>
      </div>
      {programs.map((program, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Program Header */}
            <div
              className={`lg:col-span-4 bg-gradient-to-r ${program.color} p-8 text-white`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {program.title}
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>
                <Link
                  href={`/services/${program.slug}`}
                  className="inline-flex items-center justify-center w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 mt-6"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Program Content */}
            <div className="lg:col-span-8 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Program Features:
                    </h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Ideal For:
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.idealFor}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Program Details:
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {program.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default ProgramsSection;