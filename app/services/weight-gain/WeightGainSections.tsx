"use client";
import { motion } from "framer-motion";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

import {
  Check,
  Phone,
  MessageCircle,
  Users,
  Star,
  Calendar,
  TrendingUp,
  Target,
  Award,
  Zap,
  Dumbbell,
  Utensils,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";
import weightlossimg2 from "@/public/image/weightgainimg2.png";

export const WeightGainSections = () => {
  // Program Features Data
  const programFeatures = [
    {
      icon: "🍽️",
      title: "Customized Weight Gain Plans",
      description:
        "Your plan is tailored to your specific metabolism, lifestyle, and preferences. We determine the right calorie target and create meal plans that make reaching those calories achievable and enjoyable with detailed meal timings and multiple food options.",
    },
    {
      icon: "🥑",
      title: "Nutrient-Dense Foods",
      description:
        "Focus on calorie-dense yet nutritious foods like nuts, nut butters, seeds, dried fruits, whole milk, cheese, eggs, avocados, olive oil, and healthy proteins that provide maximum calories while delivering essential nutrients.",
    },
    {
      icon: "⏰",
      title: "Frequent Meal Schedule",
      description:
        "Instead of three large meals, we design a schedule with 5-7 smaller, frequent meals and snacks throughout the day. This makes it easier to consume required calories without feeling uncomfortably full.",
    },
    {
      icon: "🔄",
      title: "Bi-weekly Follow-ups",
      description:
        "Regular follow-ups every two weeks to track your progress and make necessary adjustments. Weight gain requires patience and consistency, and these check-ins keep you motivated and accountable.",
    },
    {
      icon: "📱",
      title: "WhatsApp Support",
      description:
        "Daily access to your nutritionist via WhatsApp for meal photo reviews, recipe suggestions, tips to increase appetite, and continuous motivation. Crucial support for those with naturally low appetite.",
    },
    {
      icon: "💪",
      title: "Strength Building Focus",
      description:
        "Guidance on incorporating light resistance training to ensure weight gain includes muscle mass, not just fat. Helps you build a stronger, healthier physique with adjusted calorie intake for exercise.",
    },
  ];

  // What to Expect Timeline
  const timelineSteps = [
    {
      phase: "Week 1-2",
      title: "Adjustment Phase",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 weeks",
      weightGain: "Minimal",
      focus: "Body adaptation",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      highlights: [
        "Body adjusts to increased food intake",
        "Frequent meal schedule establishment",
        "Initial digestive adaptation",
        "Support for fullness management",
      ],
      description:
        "Your body adjusts to increased food intake and frequent meals. You might feel fuller than usual initially as your stomach adapts. We provide support to help you manage this adjustment. Minimal weight gain in these first weeks as your body adapts.",
    },
    {
      phase: "Week 3-4",
      title: "Appetite Increases",
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 weeks",
      weightGain: "Progress phase",
      focus: "Appetite development",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      highlights: [
        "Natural appetite increase begins",
        "Initial weight gain visible",
        "Comfort with meal schedule",
        "Improved energy levels",
      ],
      description:
        "Your appetite begins to increase naturally as your body adapts to higher calorie intake. You start seeing initial weight gain and feel more comfortable with frequent meals. Energy levels improve as you provide adequate fuel to your body.",
    },
    {
      phase: "Month 2-3",
      title: "Consistent Gains",
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "2 months",
      weightGain: "Consolidation phase",
      focus: "Steady routine",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      highlights: [
        "Consistent weight gain established",
        "Clothes fit better",
        "Increased strength and confidence",
        "Healthy eating routine established",
      ],
      description:
        "By months 2-3 the food routine tends to feel more natural. Many clients report better strength, steadier appetite and more consistent eating patterns. Progress signals vary between individuals; ongoing follow-ups keep the plan realistic for you.",
    },
    {
      phase: "Month 4+",
      title: "Goal Achievement",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      duration: "Ongoing",
      weightGain: "Maintenance phase",
      focus: "Long-term habits",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      highlights: [
        "Significant healthy weight gained",
        "Improved body composition",
        "Sustainable eating habits",
        "Maintenance guidance",
      ],
      description:
        "By month 4 and beyond, you've gained significant healthy weight. Your body composition has improved, you feel stronger and more energetic, and you've developed sustainable eating habits that support maintaining your new weight with proper maintenance guidance.",
    },
  ];

  // Note: Individual results and timelines vary; feedback themes are illustrative and do not represent guaranteed outcomes.
  const successStories = [
    {
      name: "Client experience",
      age: "Young adult",
      gain: "Goal met",
      duration: "Over ~4 months",
      testimonial:
        "Being underweight for years affected daily confidence. A personalised plan built around familiar foods and a manageable meal schedule made the routine easier to sustain.",
    },
    {
      name: "Client experience",
      age: "Working professional",
      gain: "Goal met",
      duration: "Over ~3 months",
      testimonial:
        "A structured, calorie-dense meal plan and steady follow-ups made a real difference. The reasoning behind the plan was explained clearly, so maintaining routine became easier.",
    },
  ];

  const overallResults = [
    {
      icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />,
      text: "A steady, sustainable weight-gain approach",
    },
    {
      icon: <Dumbbell className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Improved muscle mass and strength",
    },
    {
      icon: <Heart className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Better energy levels and immunity",
    },
    {
      icon: <Utensils className="w-4 h-4 md:w-5 md:h-5" />,
      text: "Lifetime healthy eating habits",
    },
  ];

  return (
    <>
      {/* Program Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/30 w-full">
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
              Everything you need for successful and sustainable weight gain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-amber-100 group cursor-pointer w-full"
              >
                <div className="text-2xl md:text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-amber-700 transition-colors duration-300">
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

      {/* What to Expect Timeline */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Your Weight Gain Journey Timeline
            </h2>
          </motion.div>

          {/* Text Left + Image Right */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-20">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left w-full"
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our weight gain timeline ensures healthy, sustainable progress
                through scientifically designed phases. You&apos;ll move
                step-by-step from improving your metabolism and digestion to
                structured muscle-building and strength enhancement. Each phase
                includes personalized meal planning, targeted workout programs,
                and medical supervision — ensuring your body gains lean mass
                safely while maintaining balance. With regular evaluations and
                adjustments, this journey focuses not only on visible
                transformation but also on boosting energy, confidence, and
                long-term health.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-md md:max-w-lg mx-auto lg:mx-0"
            >
              <Image
                src={weightlossimg2}
                alt="Weight Gain Journey Timeline"
                className="w-full rounded-3xl shadow-2xl object-cover"
                placeholder="blur"
              />
            </motion.div>
          </div>

          {/* Timeline Steps */}
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
                  {/* Phase Info */}
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
                            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            <span>Focus: {step.weightGain}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
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

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories & Results */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Success Stories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                What Clients Share
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
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
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-bold text-base md:text-lg text-gray-900">
                          {story.name}
                        </span>
                        <span className="text-gray-600 ml-2 text-sm md:text-base">
                          {story.age}
                        </span>
                      </div>
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                        {story.gain}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2">
                      {story.testimonial}
                    </p>
                    <div className="text-xs text-gray-500">
                      {story.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Overall Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 md:p-8 text-white h-full w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Overall Program Results
                </h3>
                <p className="text-amber-100 text-sm md:text-base mb-6 md:mb-8">
                  What you&apos;ll achieve by completing your weight gain
                  journey
                </p>

                <div className="space-y-4 md:space-y-6">
                  {overallResults.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          {result.icon}
                        </div>
                        <p className="text-amber-50 font-medium text-sm md:text-base">
                          {result.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden w-full">
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
              Ready to Start Your Weight Gain Journey?
            </h2>

            <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of clients who have successfully gained healthy
              weight and transformed their confidence with our personalized
              approach.
            </p>

            <ServiceCtaButtons
              contactColorClass="text-amber-600"
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
                <div className="flex items-center justify-center space-x-2 text-amber-200">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    2,000+
                  </span>
                </div>
                <div className="text-amber-100 text-xs md:text-sm mt-1">
                  Clients Gained Weight
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-amber-200">
                  <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                  <span className="text-base md:text-lg font-semibold">
                    5/5
                  </span>
                </div>
                <div className="text-amber-100 text-xs md:text-sm mt-1">
                  Client Rating
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-amber-200">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-amber-100 text-xs md:text-sm mt-1">
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
