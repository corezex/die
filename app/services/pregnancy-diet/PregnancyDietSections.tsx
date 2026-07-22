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
  Baby,
  Activity,
} from "lucide-react";
import Image from "next/image";
import pregnancydietimg2 from "@/public/image/pregnancy-diet-img2.png";
import pregnancydietimg3 from "@/public/image/pregnancy-diet-img3.jpg";

export const PregnancyDietSections = () => {
  // Trimester Data
  const trimesters = [
    {
      phase: "First Trimester",
      weeks: "Weeks 1-12",
      icon: "🌱",
      title: "Foundation Building",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      focus: "Neural tube development & organ formation",
      nutrients: [
        {
          name: "Folic Acid",
          amount: "600-800 mcg daily",
          importance: "Prevents neural tube defects",
        },
        {
          name: "Vitamin B6",
          amount: "For nausea management",
          importance: "Reduces morning sickness",
        },
        {
          name: "Iron",
          amount: "27 mg daily",
          importance: "Supports blood volume increase",
        },
      ],
      features: [
        "Small, frequent meals (6-7 per day)",
        "Morning sickness management",
        "Hydration strategies",
        "Gentle, easily digestible foods",
        "Flexible meal options for aversions",
      ],
      description:
        "The first trimester is crucial for your baby's neural tube development and organ formation. Our plans focus heavily on folic acid-rich foods and address morning sickness with small, frequent meals and easily digestible options.",
    },
    {
      phase: "Second Trimester",
      weeks: "Weeks 13-26",
      icon: "🌿",
      title: "Growth & Development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      focus: "Rapid baby growth & development",
      nutrients: [
        {
          name: "Calories",
          amount: "+300-350 daily",
          importance: "Supports growth spurt",
        },
        {
          name: "Protein",
          amount: "70-75g daily",
          importance: "Baby's tissue development",
        },
        {
          name: "Calcium",
          amount: "1000 mg daily",
          importance: "Bone development",
        },
        {
          name: "Omega-3",
          amount: "Essential",
          importance: "Brain development",
        },
      ],
      features: [
        "Increased calorie intake",
        "Protein-rich meals",
        "Iron with vitamin C for absorption",
        "Calcium for bone health",
        "Omega-3 for brain development",
      ],
      description:
        "The 'golden period' of pregnancy where energy returns and baby grows rapidly. Plans increase calories with focus on protein, iron, calcium, and omega-3s for comprehensive development.",
    },
    {
      phase: "Third Trimester",
      weeks: "Weeks 27-40",
      icon: "🌾",
      title: "Final Growth & Preparation",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      focus: "Final growth & labor preparation",
      nutrients: [
        {
          name: "Calories",
          amount: "+450-500 daily",
          importance: "Final growth spurt",
        },
        {
          name: "Vitamin K",
          amount: "90 mcg daily",
          importance: "Blood clotting for delivery",
        },
        {
          name: "Fiber",
          amount: "28g daily",
          importance: "Manages constipation",
        },
        {
          name: "Iron",
          amount: "27 mg daily",
          importance: "Peak blood volume needs",
        },
      ],
      features: [
        "Smaller, frequent meals (6-8 per day)",
        "High-fiber foods",
        "Adequate hydration (10-12 glasses)",
        "Vitamin K-rich foods",
        "Heartburn management",
      ],
      description:
        "The final growth spurt and preparation for labor. Plans focus on nutrient-dense smaller meals, managing discomfort, and ensuring energy reserves for delivery and recovery.",
    },
  ];

  // Program Features Data
  const programFeatures = [
    {
      icon: "📅",
      title: "Trimester-Specific Plans",
      description:
        "Each trimester has unique nutritional requirements. We adjust your meal plans as you progress, ensuring optimal nutrition at every stage based on your current trimester and symptoms.",
    },
    {
      icon: "🦾",
      title: "Personalized Physical Activity",
      description:
        "Safe, appropriate exercise recommendations based on your trimester and fitness level. Includes prenatal yoga, walking, swimming guidance, and activities to avoid.",
    },
    {
      icon: "👶",
      title: "Postpartum Support",
      description:
        "Comprehensive postpartum nutrition guidance for recovery, healing, and healthy weight management. Lactation-supportive plans for breastfeeding mothers.",
    },
    {
      icon: "📚",
      title: "Education & Empowerment",
      description:
        "Learn about pregnancy nutrition, why nutrients matter, and how food affects baby's development. Empowers you to make healthy choices independently.",
    },
    {
      icon: "💬",
      title: "Regular Follow-ups & Support",
      description:
        "Weekly follow-ups to track progress and daily WhatsApp access for questions about foods, symptoms, cravings, or concerns throughout your journey.",
    },
    {
      icon: "🍽️",
      title: "Practical, Affordable Meals",
      description:
        "Meal plans using regular, everyday foods that are easily available and affordable. Familiar, home-cooked Indian meals suitable for pregnancy.",
    },
  ];

  // Essential Nutrients
  const essentialNutrients = [
    {
      icon: "💚",
      name: "Folic Acid",
      sources: "Leafy greens, legumes, citrus fruits",
      importance: "Neural tube development, prevents birth defects",
    },
    {
      icon: "🩸",
      name: "Iron",
      sources: "Lean meats, beans, fortified cereals",
      importance: "Blood volume increase, prevents anemia",
    },
    {
      icon: "🦴",
      name: "Calcium",
      sources: "Dairy, fortified plant milks, leafy greens",
      importance: "Baby's bone development, maternal bone protection",
    },
    {
      icon: "💪",
      name: "Protein",
      sources: "Lean meats, eggs, dairy, legumes",
      importance: "Building blocks for baby's growth and development",
    },
    {
      icon: "🧠",
      name: "Omega-3 Fatty Acids",
      sources: "Fatty fish, walnuts, flaxseeds, chia seeds",
      importance: "Brain and eye development, cognitive function",
    },
    {
      icon: "☀️",
      name: "Vitamin D",
      sources: "Fortified milk, egg yolks, safe sun exposure",
      importance: "Bone health, works with calcium for development",
    },
  ];

  // Note: Individual results and pregnancies differ; feedback themes are illustrative and do not replace guidance from your treating clinician. DietFiniti does not guarantee outcomes.
  const successStories = [
    {
      name: "Client experience",
      age: "Expecting mother",
      testimonial:
        "Personalised, trimester-aware guidance alongside regular antenatal care made everyday food choices feel clearer and less anxious. Clinical care continued with the treating obstetrician.",
      outcome: "A steadier pregnancy nutrition routine",
    },
    {
      name: "Client experience",
      age: "First-time mother",
      testimonial:
        "First pregnancies bring lots of food questions. A personalised nutrition plan alongside antenatal appointments helped make sense of what to eat at each stage.",
      outcome: "More confidence with everyday meals",
    },
  ];

  // Postpartum Support
  const postpartumSupport = [
    {
      title: "Postpartum Recovery Nutrition",
      description:
        "Focus on iron-rich foods to restore blood loss, protein for tissue repair, and calcium to protect bone density. Foods that promote healing and boost energy for newborn care.",
      features: [
        "Tissue repair support",
        "Energy restoration",
        "Nutrient replenishment",
      ],
    },
    {
      title: "Breastfeeding Nutrition Support",
      description:
        "Additional 450-500 calories daily with increased fluids. Includes galactagogues like oats, fennel, and fenugreek to support healthy milk production.",
      features: ["Lactation support", "Increased calories", "Hydration focus"],
    },
    {
      title: "Healthy Weight Management",
      description:
        "Gradual, healthy weight loss starting 6-8 weeks postpartum. Nutrient-dense foods and sustainable habits without compromising milk supply or recovery.",
      features: [
        "Gradual weight loss",
        "Sustainable habits",
        "Energy maintenance",
      ],
    },
  ];

  return (
    <>
      {/* Trimester-Specific Nutrition Section */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Heading - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#262262] mb-4">
              Trimester-Specific Nutrition
            </h2>
          </motion.div>

          {/* Paragraph and Image Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Our trimester-specific nutrition plans are meticulously designed
                to support your unique needs at every stage of pregnancy. From
                managing first-trimester nausea and ensuring proper fetal
                development in the second trimester, to preparing your body for
                labor and breastfeeding in the third trimester - we provide
                comprehensive dietary guidance, supplement recommendations, and
                meal planning strategies tailored to each phase&apos;s specific
                requirements for optimal maternal and fetal health.
              </p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src={pregnancydietimg2}
                  alt="Trimester-Specific Nutrition"
                  className="rounded-2xl shadow-lg"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          </div>

          {/* Trimester Cards */}
          <div className="space-y-8">
            {trimesters.map((trimester, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${trimester.bgColor} rounded-3xl border-2 ${trimester.borderColor} p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column - Basic Info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${trimester.color} rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0`}
                      >
                        {trimester.icon}
                      </div>
                      <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 mb-2">
                          <Calendar className="w-3 h-3 mr-1 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">
                            {trimester.weeks}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {trimester.phase}
                        </h3>
                        <div className="text-sm text-gray-600 mb-4">
                          <strong>Focus:</strong> {trimester.focus}
                        </div>
                      </div>
                    </div>

                    {/* Key Nutrients */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-green-500" />
                        Key Nutrients
                      </h4>
                      <div className="space-y-2">
                        {trimester.nutrients.map((nutrient, idx) => (
                          <div key={idx} className="text-sm">
                            <div className="font-medium text-gray-900">
                              {nutrient.name}
                            </div>
                            <div className="text-gray-600">
                              {nutrient.amount}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Features */}
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Check className="w-5 h-5 mr-2 text-[#262262]" />
                      Program Features
                    </h4>
                    <div className="grid gap-2">
                      {trimester.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Description */}
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      {trimester.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {trimester.description}
                    </p>
                    <div className="bg-white rounded-2xl p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-2">
                        Key Focus
                      </div>
                      <div className="font-semibold text-gray-900">
                        {trimester.focus}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-5 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Heading - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Program Features
            </h2>
          </motion.div>

          {/* Image and Text Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src={pregnancydietimg3}
                  alt="Program Features"
                  className="rounded-2xl shadow-lg"
                  placeholder="blur"
                />
              </div>
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Our comprehensive program provides end-to-end support throughout
                your entire pregnancy journey and beyond. From personalized
                nutrition plans and expert guidance during each trimester to
                postpartum recovery strategies and breastfeeding support, we
                ensure you receive continuous care and evidence-based
                recommendations for optimal maternal health, fetal development,
                and smooth transition into motherhood with confidence and
                wellness.
              </p>
            </motion.div>
          </div>

          {/* Program Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-pink-100 group cursor-pointer"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Nutrients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#262262] mb-4">
              Essential Nutrients During Pregnancy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key nutrients that support both maternal health and baby&apos;s
              development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialNutrients.map((nutrient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl mb-3">{nutrient.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {nutrient.name}
                </h3>
                <div className="text-sm text-gray-600 mb-3">
                  <strong>Sources:</strong> {nutrient.sources}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {nutrient.importance}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Postpartum Support Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#262262] mb-4">
              Postpartum Support & Recovery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continued nutrition guidance for recovery, breastfeeding, and
              healthy weight management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {postpartumSupport.map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {support.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {support.description}
                </p>
                <div className="space-y-2">
                  {support.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Expecting Mothers Share
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback themes from clients receiving nutrition guidance alongside their antenatal care. Every pregnancy is different; continue to follow the advice of your obstetrician.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-pink-200">{story.age}</p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.outcome}
                  </div>
                </div>
                <p className="text-pink-100 leading-relaxed mb-4">
                  {story.testimonial}
                </p>
                <div className="flex items-center space-x-1 text-pink-200">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Your Healthy Pregnancy Journey Today
            </h2>

            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Give your baby the best start with science-backed nutrition
              guidance and continuous support throughout your pregnancy and
              beyond.
            </p>

            <ServiceCtaButtons
              contactColorClass="text-pink-600"
              variant="section"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-pink-200">
                  <Users className="w-5 h-5" />
                  <span className="text-lg font-semibold">2,000+</span>
                </div>
                <div className="text-pink-100 text-sm mt-1">Happy Mothers</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-pink-200">
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span className="text-lg font-semibold">5/5</span>
                </div>
                <div className="text-pink-100 text-sm mt-1">
                  Satisfaction Rating
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-pink-200">
                  <Baby className="w-5 h-5" />
                  <span className="text-lg font-semibold">99%</span>
                </div>
                <div className="text-pink-100 text-sm mt-1">
                  Healthy Outcomes
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
