"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

import weightlossimg4 from "@/public/image/weightlossimg4.jpg";
import {
  Target,
  Utensils,
  Clock,
  TrendingUp,
  MessageCircle,
  ChefHat,
  Check,
  Phone,
  MessageCircle as MessageCircleIcon,
  Users,
  Star,
  Calendar,
  Award,
  Droplets,
  Shirt,
  Zap,
  Scale,
  TrendingDown,
} from "lucide-react";

export const WeightLossSections = () => {
  // Program Features Data
  const features = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Customized Diet Plans",
      description:
        "Your diet plan is designed specifically for you, considering your unique metabolism, lifestyle, food preferences, and weight loss goals.",
    },
    {
      icon: <Utensils className="w-6 h-6 md:w-8 md:h-8" />,
      title: "No Fancy Foods Required",
      description:
        "We design plans using regular, everyday foods that are easily available and affordable. No expensive superfoods or exotic ingredients needed.",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Lifestyle-Based Planning",
      description:
        "Your diet plan fits seamlessly into your existing lifestyle, whether you're a professional, homemaker, student, or frequent traveler.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Regular Follow-ups",
      description:
        "Weekly sessions to review progress, discuss challenges, and make necessary adjustments to keep you on track.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "WhatsApp Guidance",
      description:
        "Daily WhatsApp support (6 days/week) for questions, meal feedback, recipe suggestions, and motivation.",
    },
    {
      icon: <ChefHat className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Recipe Collection",
      description:
        "Access to healthy, delicious recipes using simple ingredients. Plenty of variety to keep meals interesting.",
    },
  ];

  const programIncludes = [
    "Personalized calorie-controlled meal plans",
    "Macro-balanced nutrition guidance",
    "Weekly progress tracking & adjustments",
    "Daily WhatsApp support (6 days/week)",
    "Recipe collection & meal prep guide",
    "Emotional eating strategies",
    "Portion control education",
    "Maintenance phase guidance",
    "Exercise recommendations",
    "Lifetime habit building",
  ];

  // Note: Individual results and timelines vary; these reflect general client feedback themes and do not represent guaranteed outcomes.
  const successStories = [
    {
      name: "Client experience",
      loss: "Goal met",
      duration: "Over ~4 months",
      testimonial:
        "Felt satisfied and rarely hungry between meals. The personalised approach and steady follow-ups made the difference.",
    },
    {
      name: "Client experience",
      loss: "Goal met",
      duration: "Over ~6 months",
      testimonial:
        "Finally found a sustainable way to manage weight — energy levels stayed stable throughout.",
    },
    {
      name: "Client experience",
      loss: "Goal met",
      duration: "Over ~3 months",
      testimonial:
        "The WhatsApp support kept motivation up week after week. A worthwhile investment in long-term health.",
    },
  ];

  // What to Expect Data
  const timelineSteps = [
    {
      phase: "Week 1-2",
      title: "Initial Adjustment Phase",
      icon: <Droplets className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 weeks",
      weightLoss: "Adjustment phase",
      lossType: "Habit foundations",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      highlights: [
        "Body adapts to new eating patterns",
        "Learn portion control & meal prep",
        "Intensive daily support",
        "Establish foundational habits",
      ],
      description:
        "The first two weeks focus on settling into your new eating pattern. Your body adjusts to the calorie intake and meal timing that suit you. This phase includes closer support so early challenges can be discussed and foundational habits established. Individual responses vary.",
    },
    {
      phase: "Week 3-4",
      title: "Fat Loss Begins",
      icon: <TrendingDown className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 weeks",
      weightLoss: "Progress phase",
      lossType: "Habit consistency",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      highlights: [
        "Real fat loss begins",
        "Energy levels stabilize",
        "Clothes feel looser",
        "Cravings significantly reduce",
      ],
      description:
        "By week 3-4, many people notice steadier energy and that healthy eating starts feeling more natural. Progress signals such as how clothes fit can vary by individual — the focus is consistency with your personalised plan.",
    },
    {
      phase: "Month 2-3",
      title: "Visible Transformation",
      icon: <Shirt className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 months",
      weightLoss: "Consolidation phase",
      lossType: "Sustainable routine",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      highlights: [
        "Visible body composition changes",
        "Others notice your transformation",
        "Healthy eating becomes habit",
        "Increased confidence & energy",
      ],
      description:
        "Months 2-3 are often when healthy eating shifts from effort to routine. Visible changes and progress markers vary between individuals; ongoing follow-ups keep the plan aligned with what is realistic for you.",
    },
    {
      phase: "Month 4+",
      title: "Goal Achievement & Maintenance",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "Ongoing",
      weightLoss: "Maintenance phase",
      lossType: "Lifetime habits",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      highlights: [
        "Achieve your target weight",
        "Master nutrition knowledge",
        "Build sustainable habits",
        "Learn maintenance strategies",
      ],
      description:
        "By month 4 and beyond, you're well on your way to achieving your weight loss goal. You've developed a strong understanding of nutrition and have built sustainable healthy eating habits for long-term success.",
    },
  ];

  const overallResults = [
    {
      icon: <Scale className="w-4 h-4 md:w-5 md:h-5" />,
      text: "A steady, sustainable weight-management approach",
    },
    {
      icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Improved energy levels & vitality",
    },
    {
      icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Lifetime healthy eating habits",
    },
    {
      icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Long-term weight maintenance skills",
    },
  ];

  return (
    <>
      {/* Program Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50/30 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Program Features
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a successful and sustainable weight loss
              journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-green-100 group cursor-pointer w-full"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included & Success Stories */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 h-full w-full">
                <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  What&apos;s Included in Your Program
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                  Complete support system designed for your weight loss success
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programIncludes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-xs md:text-sm">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-6 md:p-8 text-white h-full w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  What Clients Share
                </h3>
                <p className="text-xs md:text-sm text-emerald-100/80 mb-4 md:mb-6">
                  Feedback themes from past clients. Individual results and timelines vary; DietFiniti does not guarantee outcomes.
                </p>
                <div className="space-y-4 md:space-y-6">
                  {successStories.map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-base md:text-lg">
                          {story.name}
                        </span>
                        <span className="bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                          {story.loss}
                        </span>
                      </div>
                      <p className="text-green-100 text-xs md:text-sm leading-relaxed mb-2">
                        {story.testimonial}
                      </p>
                      <div className="text-xs text-green-200 opacity-80">
                        {story.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-12 md:mb-16 bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 w-full"
          >
            {/* Left Side - Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
                Your Weight Loss Journey Timeline
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Understand exactly what to expect at each phase of your
                transformation journey. From the moment you begin, our program
                guides you step-by-step — helping you build healthy habits,
                track your progress, and overcome challenges with confidence.
                Each phase is carefully designed to balance nutrition, fitness,
                and mindset, ensuring lasting results and a sustainable
                lifestyle change that keeps you feeling energized, focused, and
                proud of your progress.
              </p>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center w-full"
            >
              <Image
                src={weightlossimg4}
                alt="Weight Loss Program Features"
                className="w-full max-w-[400px] md:max-w-[500px] h-auto rounded-2xl shadow-lg object-cover"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${step.bgColor} rounded-3xl border-2 ${step.borderColor} p-6 md:p-8 hover:shadow-xl transition-all duration-300 w-full`}
              >
                <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-white border border-gray-200 mb-2">
                          <Calendar className="w-3 h-3 mr-1 text-gray-500" />
                          <span className="text-xs md:text-sm font-medium text-gray-700">
                            {step.phase}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-xs md:text-sm text-gray-600">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>Duration: {step.duration}</span>
                          </div>
                          <div className="flex items-center text-xs md:text-sm text-gray-600">
                            <TrendingDown className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>Focus: {step.weightLoss}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                      <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-500" />
                      Key Achievements
                    </h4>
                    <div className="grid gap-2">
                      {step.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-xs md:text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 md:mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 md:p-8 text-white w-full"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Overall Program Results
              </h3>
              <p className="text-green-100 text-sm md:text-base">
                What you&apos;ll achieve by completing your journey
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {overallResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {result.icon}
                  </div>
                  <p className="text-green-50 font-medium text-sm md:text-base">
                    {result.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Start Your Weight Loss Journey?
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of clients who have successfully transformed their
              health and achieved their weight goals with our personalized
              approach.
            </p>

            <ServiceCtaButtons
              contactColorClass="text-green-600"
              variant="section"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    2,000+
                  </span>
                </div>
                <div className="text-green-100 text-xs md:text-sm mt-1">
                  Clients Served
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                  <span className="text-base md:text-lg font-semibold">
                    5/5
                  </span>
                </div>
                <div className="text-green-100 text-xs md:text-sm mt-1">
                  Client Rating
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-green-200">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-green-100 text-xs md:text-sm mt-1">
                  Success Rate
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
