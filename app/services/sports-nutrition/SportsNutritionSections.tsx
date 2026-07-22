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
  Activity,
  Clock,
  Droplets,
  Dumbbell,
  Heart,
} from "lucide-react";
import Image from "next/image";
import sportsnutritionimg2 from "@/public/image/sports-nutritionimg2.png";
import sportsnutritionimg3 from "@/public/image/sports-nutritionimg3.png";

export const SportsNutritionSections = () => {
  // Sports Categories
  const sportsCategories = [
    {
      category: "Endurance Sports",
      sports: "Marathon running, distance cycling, swimming, triathlon",
      icon: "🏃",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      focus: "Sustained energy & glycogen management",
      strategies: [
        "High carbohydrate intake (55-65% of calories)",
        "Strategic carbohydrate loading",
        "Electrolyte & hydration management",
        "BCAAs to prevent muscle breakdown",
        "Iron-rich foods for oxygen transport",
      ],
      description:
        "Endurance athletes need sustained energy for long-duration activities. Our plans focus on optimal glycogen storage, electrolyte balance, and preventing muscle breakdown during extended sessions.",
    },
    {
      category: "Strength Sports",
      sports: "Weightlifting, powerlifting, bodybuilding",
      icon: "🏋️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      focus: "Muscle building & recovery",
      strategies: [
        "High protein intake (1.6-2.2g/kg body weight)",
        "Strategic carbohydrate timing",
        "Healthy fats for hormone production",
        "Calorie management for bulking/cutting",
        "Creatine supplementation when appropriate",
      ],
      description:
        "Strength athletes require precise nutrition for muscle protein synthesis, strength gains, and body composition management. Our plans optimize protein distribution and nutrient timing.",
    },
    {
      category: "Team Sports",
      sports: "Cricket, football, basketball, hockey",
      icon: "⚽",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      focus: "Balanced energy & quick recovery",
      strategies: [
        "Balanced macronutrient intake",
        "Pre-game meals for sustained energy",
        "During-game fueling strategies",
        "Post-game recovery nutrition",
        "Hydration for outdoor sports",
      ],
      description:
        "Team sport athletes need a balance of quick energy and sustained endurance. Our plans address the stop-start nature of these sports with strategic fueling and recovery protocols.",
    },
    {
      category: "Combat Sports",
      sports: "Boxing, MMA, martial arts, wrestling",
      icon: "🥊",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      focus: "Weight management & explosive power",
      strategies: [
        "Safe weight cutting strategies",
        "High protein to maintain muscle mass",
        "Strategic carbohydrate cycling",
        "Rehydration protocols after weigh-ins",
        "Nutrition for high-intensity training",
      ],
      description:
        "Combat sports require careful weight management while maintaining explosive power. Our plans focus on safe weight cutting and performance optimization.",
    },
  ];

  // Program Features
  const programFeatures = [
    {
      icon: "🎯",
      title: "Customized Sport-Specific Plans",
      description:
        "Meal plans designed specifically for your sport's energy demands, duration, intensity, and nutritional requirements. Includes plans for training days, rest days, competition days, and recovery periods.",
    },
    {
      icon: "📈",
      title: "Regular Evaluation & Adjustment",
      description:
        "Weekly tracking of performance metrics, energy levels, recovery quality, and body composition. Strategic adjustments based on your feedback and coach input for continuous optimization.",
    },
    {
      icon: "💊",
      title: "Evidence-Based Supplement Guidance",
      description:
        "Food-first approach with evidence-based supplement recommendations only when needed. Creatine, beta-alanine, electrolytes, or protein powder based on your specific needs and scientific backing.",
    },
    {
      icon: "⏱️",
      title: "Nutrient Timing Strategies",
      description:
        "Detailed guidance on pre-workout nutrition (2-3 hours before), during-workout fueling, and post-workout recovery (within 30-60 minutes). Competition day meal timing for peak performance.",
    },
    {
      icon: "💧",
      title: "Hydration Strategy Guidance",
      description:
        "Comprehensive hydration strategies including daily water targets, pre/during/post-workout protocols, electrolyte management, and strategies for hot/humid conditions or heavy sweaters.",
    },
    {
      icon: "💬",
      title: "Daily WhatsApp Support",
      description:
        "Quick answers to questions about pre-game meals, recovery nutrition, supplement timing, or travel adjustments. Share meal photos, get competition advice, and stay on track with real-time support.",
    },
  ];

  // Performance Nutrition Timeline
  const nutritionTimeline = [
    {
      phase: "Pre-Workout",
      timing: "2-3 hours before + 30-60 min before",
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      focus: "Energy Optimization",
      color: "from-green-500 to-emerald-500",
      strategies: [
        "2-3 hours: Balanced meal with moderate protein, carbs, low fat/fiber",
        "30-60 min: Small, easily digestible carb-rich snack",
        "Hydration: 400-600ml water 2-3 hours before",
        "Examples: Chicken with rice, banana, toast with honey",
      ],
    },
    {
      phase: "During Workout",
      timing: "During training session",
      icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />,
      focus: "Sustained Performance",
      color: "from-blue-500 to-cyan-500",
      strategies: [
        "<60 min: Water only usually needed",
        "60-90 min: Water + electrolytes, small carbs",
        ">90 min: 30-60g carbs/hour + electrolytes",
        "Hydration: 150-250ml every 15-20 minutes",
        "Practice during-workout nutrition in training",
      ],
    },
    {
      phase: "Post-Workout",
      timing: "Within 30-60 minutes + 2-3 hours",
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      focus: "Recovery & Repair",
      color: "from-purple-500 to-pink-500",
      strategies: [
        "30-60 min: Protein (20-25g) + carbs (3:1 ratio)",
        "2-3 hours: Complete balanced meal",
        "Rehydrate with 150% of fluid lost",
        "Examples: Protein shake with banana, chicken sandwich",
        "Include electrolytes if sweat loss significant",
      ],
    },
  ];

  // Note: Individual results vary. Feedback themes shared for illustration; DietFiniti does not guarantee performance outcomes.
  const successStories = [
    {
      name: "Client experience",
      age: "Amateur athlete",
      sport: "Cricket",
      testimonial:
        "Nutrition around training used to feel confusing. A personalised plan built around match schedules and recovery routines made day-to-day food choices clearer.",
      outcome: "Clearer nutrition routine around training",
    },
    {
      name: "Client experience",
      age: "Recreational athlete",
      sport: "Strength training",
      testimonial:
        "Balancing training goals with everyday eating became easier when the plan was shaped around real preferences and schedule — rather than a generic template.",
      outcome: "A practical, sustainable food routine",
    },
  ];

  // Body Type Considerations
  const bodyTypes = [
    {
      type: "Ectomorph",
      characteristics:
        "Naturally lean, fast metabolism, difficulty gaining muscle",
      strategies: [
        "Higher calorie intake with frequent meals",
        "Emphasis on complex carbohydrates",
        "Protein with every meal for muscle support",
        "Strategic use of healthy fats for calories",
        "Post-workout nutrition critical",
      ],
    },
    {
      type: "Mesomorph",
      characteristics:
        "Naturally athletic build, gains muscle easily, responsive to training",
      strategies: [
        "Balanced macronutrient distribution",
        "Moderate carbohydrate intake timed around workouts",
        "Adequate protein for maintenance and growth",
        "Consistent meal timing throughout day",
        "Good response to varied training and nutrition",
      ],
    },
    {
      type: "Endomorph",
      characteristics:
        "Tendency to store fat easily, slower metabolism, strong strength potential",
      strategies: [
        "Careful carbohydrate timing around workouts",
        "Slightly higher protein intake",
        "Emphasis on fiber and vegetable intake",
        "Regular meal timing to manage blood sugar",
        "Focus on nutrient timing over total calories",
      ],
    },
  ];

  return (
    <>
      {/* Sports-Specific Programs Section */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Sports-Specific Programs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Customized nutrition strategies for different athletic disciplines
              and energy demands
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {sportsCategories.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${sport.bgColor} rounded-3xl border-2 ${sport.borderColor} p-6 md:p-8 hover:shadow-xl transition-all duration-300 w-full`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${sport.color} rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0`}
                  >
                    {sport.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {sport.category}
                    </h3>
                    <div className="text-xs md:text-sm text-gray-600 mb-2">
                      <strong>Sports:</strong> {sport.sports}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      <strong>Focus:</strong> {sport.focus}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    Key Strategies
                  </h4>
                  <div className="grid gap-2">
                    {sport.strategies.map((strategy, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs md:text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 md:mr-3"></div>
                        {strategy}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {sport.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30 w-full">
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
              Comprehensive support system to optimize your athletic performance
              through nutrition
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-blue-100 group cursor-pointer w-full"
              >
                <div className="text-2xl md:text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors duration-300">
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

      {/* Performance vs Recovery Nutrition */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Performance vs Recovery Nutrition
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic nutrition timing for optimal performance and recovery
            </p>
          </motion.div>

          {/* Content Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side — Cards */}
            <div className="space-y-4 md:space-y-6">
              {nutritionTimeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 md:p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 w-full"
                >
                  <div
                    className={`w-auto px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center gap-2 mb-3 md:mb-4`}
                  >
                    <div className="text-white text-lg md:text-xl">
                      {phase.icon}
                    </div>
                    <div className="text-white font-medium text-sm md:text-base">
                      {phase.phase}
                    </div>
                  </div>

                  <div className="text-xs md:text-sm text-blue-600 font-medium mb-3 md:mb-4">
                    {phase.timing}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                    <strong>Focus:</strong> {phase.focus}
                  </div>
                  <div className="space-y-2">
                    {phase.strategies.map((strategy, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-xs md:text-sm text-gray-700"
                      >
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strategy}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md mx-auto lg:mx-0"
            >
              <Image
                src={sportsnutritionimg2}
                alt="Performance vs Recovery Nutrition"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
                placeholder="blur"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body Type Considerations */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Body Type Considerations
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Customized nutrition strategies based on your natural body type
              and metabolism
            </p>
          </motion.div>

          {/* Layout: Image Left | Cards Right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center w-full"
            >
              <Image
                src={sportsnutritionimg3}
                alt="Sports Nutrition Illustration"
                className="w-full max-w-md rounded-2xl shadow-lg"
                placeholder="blur"
              />
            </motion.div>

            {/* Right Side - Cards (one per row) */}
            <div className="space-y-4 md:space-y-6">
              {bodyTypes.map((bodyType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 w-full"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {bodyType.type}
                  </h3>
                  <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 p-2 md:p-3 bg-gray-50 rounded-lg">
                    {bodyType.characteristics}
                  </div>
                  <div className="space-y-2">
                    {bodyType.strategies.map((strategy, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs md:text-sm text-gray-700"
                      >
                        <Target className="w-3 h-3 md:w-4 md:h-4 text-blue-500 mr-2" />
                        {strategy}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Active Clients Share
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback themes from athletes and active clients. Individual results vary; performance and recovery outcomes depend on many factors beyond nutrition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-6 md:p-8 text-white w-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {story.name}
                    </h3>
                    <p className="text-blue-200 text-sm md:text-base">
                      Age {story.age} | {story.sport}
                    </p>
                  </div>
                  <div className="bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                    {story.outcome}
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
                  {story.testimonial}
                </p>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden w-full">
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
              Elevate Your Athletic Performance
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Achieve your peak performance with science-backed nutrition
              strategies tailored to your sport, goals, and training regimen.
            </p>

            <ServiceCtaButtons
              contactColorClass="text-blue-600"
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
                <div className="flex items-center justify-center space-x-2 text-blue-200">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    2,00+
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Athletes Supported
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-blue-200">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Performance Improvement
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-blue-200">
                  <Activity className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Faster Recovery
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
