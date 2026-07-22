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
  Sparkles,
  Heart,
  Crown,
  Clock,
  Zap,
  Smile,
} from "lucide-react";
import Image from "next/image";
import bridaldietimg2 from "@/public/image/bridal-dietimg2.png";
import bridaldietimg3 from "@/public/image/bridal-dietimg3.jpg";
import bridaldietimg1 from "@/public/image/bridal-dietimg1.png";

// Structured Data Component

// Main Sections Component
export const BridalDietSections = () => {
  const timelinePhases = [
    {
      phase: "Phase 1",
      duration: "Months 6-4 before wedding",
      icon: "🌺",
      title: "Foundation Building",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      focus: "Establishing Healthy Habits",
      weightLoss: "Foundation phase",
      highlights: [
        "Comprehensive health assessment",
        "Moderate calorie reduction",
        "Balanced nutrition principles",
        "Consistent eating routine building",
        "Address underlying health issues",
      ],
      description:
        "Phase 1 focuses on establishing a strong foundation of healthy eating habits and beginning your weight loss journey. We create habits that you can maintain throughout wedding planning chaos, addressing any underlying issues that might affect your skin and energy.",
    },
    {
      phase: "Phase 2",
      duration: "Months 3-2 before wedding",
      icon: "✨",
      title: "Results & Refinement",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      focus: "Visible Transformation",
      weightLoss: "Continued steady loss",
      highlights: [
        "Fine-tuned meal plans",
        "Skin radiance optimization",
        "Stress management nutrition",
        "Hair and nail health focus",
        "Confidence boosting results",
      ],
      description:
        "Phase 2 is where the real transformation becomes visible. Your weight loss continues, skin starts glowing, and energy levels stabilize. We optimize nutrition for bridal glow and incorporate stress management strategies.",
    },
    {
      phase: "Phase 3",
      duration: "Month 1 before wedding",
      icon: "💎",
      title: "Final Glow & Perfection",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      focus: "Peak Appearance",
      weightLoss: "Maintenance & fine-tuning",
      highlights: [
        "Bloating reduction strategies",
        "Skin radiance maximization",
        "Final week meal planning",
        "Energy optimization",
        "Stress management",
      ],
      description:
        "The final month focuses on achieving and maintaining peak appearance. We fine-tune your diet to reduce bloating, enhance skin radiance for photos, and ensure peak energy for wedding festivities.",
    },
  ];

  const uniqueFeatures = [
    {
      icon: "📅",
      title: "Accommodates Your Hectic Schedule",
      description:
        "Wedding planning is overwhelming with endless tasks. Our meal plans are designed to fit into this chaos with quick meal options, grab-and-go breakfast ideas, and simple recipes that don't require hours in the kitchen.",
    },
    {
      icon: "👑",
      title: "Focus on Complete Bridal Glow",
      description:
        "We don't just focus on weight loss. Our plans include specific nutritional strategies for glowing skin, lustrous hair, strong nails, sustained energy, and stress management for complete transformation.",
    },
    {
      icon: "🥗",
      title: "Readily Available Ingredients",
      description:
        "No time to hunt for exotic superfoods. Our bridal meal plans use regular, everyday ingredients available in any grocery store. Healthy eating for your wedding doesn't have to break the bank.",
    },
    {
      icon: "💬",
      title: "WhatsApp Support for Busy Brides",
      description:
        "Quickly check if a food is allowed, get recipe suggestions while shopping, share meal photos for instant feedback, or get motivation when stressed – all via WhatsApp (6 days a week).",
    },
    {
      icon: "🔄",
      title: "Regular Follow-ups & Adjustments",
      description:
        "Weekly follow-ups ensure your plan is always optimized. We track weight, measurements, energy levels, skin condition, and adjust immediately if something isn't working or your schedule changes.",
    },
    {
      icon: "🎂",
      title: "Event-Specific Strategies",
      description:
        "Pre-wedding period involves numerous events. We provide specific strategies for managing these occasions – what to eat, how much to eat, and how to balance indulgences while staying on track.",
    },
  ];

  const bridalBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Weight Management Support",
      description:
        "Practical, personalised nutrition guidance to work towards your wedding-day goal. The focus is on a steady, sustainable approach that fits alongside training and daily routine. Individual results vary.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Radiant Skin & Bridal Glow",
      description:
        "Achieve that enviable natural glow with antioxidant-rich foods, adequate hydration, and nutrients that promote clear, glowing skin. Less makeup needed for that perfect photo-ready complexion.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Hair & Nails Health",
      description:
        "Strong, lustrous hair and healthy nails with adequate protein, biotin, iron, and B-vitamins. Counter pre-wedding stress effects with proper nutrition for hair strength and nail health.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy & Stamina",
      description:
        "Sustained energy throughout demanding wedding preparations with complex carbohydrates, adequate protein, healthy fats, and proper meal timing. Feel energized, not exhausted.",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Confidence & Mental Wellness",
      description:
        "Natural confidence boost from looking and feeling your best. Foods that support mental wellness and mood stability help manage wedding stress and keep you calm and excited.",
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Stress Management",
      description:
        "Nutritional approach includes foods that help manage cortisol levels. Magnesium-rich foods, omega-3s, and complex carbs support your body's stress response during hectic planning.",
    },
  ];

  const weddingTimelines = [
    {
      duration: "6-Month Timeline",
      idealFor: "Longer runway for a gradual, sustainable approach",
      icon: "📅",
      results:
        "Most time to build habits at a steady pace and refine the plan over multiple follow-ups",
      features: [
        "Sustainable, gradual pace",
        "Ample time for lifestyle change",
        "Room to adjust for plateaus",
        "Longest window for skin and hair routines",
        "Space for complete lifestyle change",
      ],
    },
    {
      duration: "3-Month Timeline",
      idealFor: "A steady pace alongside wedding preparation",
      icon: "⏰",
      results:
        "Balanced window to build a practical routine that fits busy wedding planning",
      features: [
        "Steady, sensible pace",
        "Time to embed everyday habits",
        "Fits alongside wedding preparation",
        "Focus on routine, not restriction",
        "Confidence-building follow-ups",
      ],
    },
    {
      duration: "1-2 Month Quick Prep",
      idealFor: "Short lead-time — focus on realistic, everyday routines",
      icon: "⚡",
      results:
        "Realistic short-window focus on daily meals, hydration and routine — not dramatic transformations",
      features: [
        "Focus on daily consistency",
        "Attention to hydration and routine",
        "Simple, familiar meal ideas",
        "Digestion-friendly choices",
        "A lighter, more settled routine",
      ],
    },
  ];

  // Note: Individual results and timelines vary; these reflect general client feedback themes and do not represent guaranteed outcomes.
  const successStories = [
    {
      name: "Client experience",
      age: "Bride-to-be",
      loss: "Goal met",
      duration: "Over ~5 months",
      testimonial:
        "With the wedding a few months away, the personalised plan fit around a busy shopping and prep schedule. Practical food choices made it easier to feel confident on the big day.",
      outcome: "A steady pre-wedding routine",
    },
    {
      name: "Client experience",
      age: "Bride-to-be",
      loss: "Goal met",
      duration: "Over ~3 months",
      testimonial:
        "Was worried a pre-wedding plan would feel restrictive, but this one focused on familiar foods and steady routines. Felt energised and looked forward to the meals.",
      outcome: "A practical, enjoyable routine",
    },
  ];

  return (
    <>
      {/* Bridal Timeline Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#262262] mb-6">
              Bridal Goal Planning Timeline
            </h1>
          </motion.div>

          {/* Text + Image Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Every bride&apos;s journey is unique — which is why this
                timeline adapts to your body, lifestyle, and wedding schedule.
                Our team helps you balance nutrition, skincare, and mindset in
                harmony, so you not only achieve visible transformation but also
                feel calm, strong, and radiant from within. Our bridal goal
                planning timeline is a carefully structured and holistic journey
                that empowers you to reach your dream look and feel your
                absolute best before your wedding.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <Image
                src={bridaldietimg2}
                alt="Bridal Goal Planning Timeline"
                className="w-full max-w-md h-auto rounded-2xl lg:rounded-3xl shadow-lg"
                priority
              />
            </motion.div>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {timelinePhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${phase.bgColor} rounded-2xl lg:rounded-3xl border-2 ${phase.borderColor} p-6 lg:p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <div
                        className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white text-xl lg:text-2xl flex-shrink-0`}
                      >
                        {phase.icon}
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 mb-2">
                          <Calendar className="w-3 h-3 mr-1 text-gray-500" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {phase.duration}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                          {phase.phase}
                        </h3>
                        <div className="text-xs sm:text-sm text-gray-600 mb-1">
                          <strong>Focus:</strong> {phase.focus}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          <strong>Phase focus:</strong> {phase.weightLoss}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-green-500" />
                      Key Highlights
                    </h4>
                    <div className="grid gap-2">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-xs sm:text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      {phase.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262262] mb-4">
              What Makes Our Bridal Plan Unique
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specifically designed features to make your wedding preparation
              journey smooth and effective
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-rose-100"
              >
                <div className="text-2xl lg:text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262262] mb-4">
              Bridal Benefits You&apos;ll Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive transformation that goes beyond just weight loss
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bridalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl lg:rounded-2xl p-6 border border-rose-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Timelines Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262262] mb-6">
              Wedding Timeline Approach
            </h2>
          </motion.div>

          {/* Image + Text Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center order-1 lg:order-1"
            >
              <Image
                src={bridaldietimg3}
                alt="Bridal Timeline Approach"
                className="w-full max-w-md h-auto rounded-2xl lg:rounded-3xl shadow-lg"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2"
            >
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Customized plans tailored to your bridal journey — ensuring you
                look and feel your absolute best. Whether you have months to
                prepare or just a few weeks, our phased approach covers
                nutrition, fitness, skin glow, and mental wellness so you can
                walk down the aisle with unmatched confidence and radiance.
              </p>
            </motion.div>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingTimelines.map((timeline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl lg:rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl lg:text-3xl mb-4">{timeline.icon}</div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                  {timeline.duration}
                </h3>
                <div className="text-sm text-rose-600 font-medium mb-3">
                  {timeline.idealFor}
                </div>

                <div className="bg-rose-50 rounded-lg lg:rounded-xl p-3 lg:p-4 mb-4">
                  <div className="text-xs text-rose-600 font-medium mb-1">
                    Expected Results
                  </div>
                  <div className="text-sm text-gray-700">
                    {timeline.results}
                  </div>
                </div>

                <div className="space-y-2">
                  {timeline.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Bridal Clients Share
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback themes from brides-to-be. Individual results and timelines vary; DietFiniti does not guarantee outcomes for weight, skin or appearance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl lg:rounded-3xl p-6 text-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-rose-200 text-sm">
                      {story.age} · {story.duration}
                    </p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.loss}
                  </div>
                </div>
                <p className="text-rose-100 leading-relaxed text-sm lg:text-base mb-4">
                  {story.testimonial}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="text-rose-200 text-sm font-medium">
                    {story.outcome}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-pink-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 lg:w-40 lg:h-40 bg-white/10 rounded-full blur-xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Start Your Bridal Transformation Journey
            </h2>

            <p className="text-lg text-rose-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Achieve your dream wedding look with personalized nutrition
              guidance and continuous support throughout your wedding
              preparation.
            </p>

            <div className="flex justify-center mb-8">
              <ServiceCtaButtons
                contactColorClass="text-rose-600"
                variant="bridal"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-rose-200">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-base lg:text-lg font-semibold">
                    2,000+
                  </span>
                </div>
                <div className="text-rose-100 text-xs lg:text-sm mt-1">
                  Happy Brides
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-rose-200">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" />
                  <span className="text-base lg:text-lg font-semibold">
                    5/5
                  </span>
                </div>
                <div className="text-rose-100 text-xs lg:text-sm mt-1">
                  Bride Satisfaction
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-rose-200">
                  <Crown className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="text-base lg:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-rose-100 text-xs lg:text-sm mt-1">
                  Goal Achievement
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
