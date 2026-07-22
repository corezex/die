"use client";

import { motion } from "framer-motion";

const UniqueApproachSection = () => {
  const uniqueApproach = [
    {
      icon: "🎯",
      title: "Personalization at Core",
      points: [
        "Every diet plan is customized based on your unique needs, lifestyle, food preferences, and health goals.",
        "We don't believe in one-size-fits-all approaches.",
        "Your plan is designed specifically for you, considering your work schedule, cooking abilities, family dynamics, and even your taste preferences.",
        "We understand that what works for one person may not work for another.",
        "We take the time to understand your individual circumstances before creating your personalized nutrition roadmap."
      ]
    },
    {
      icon: "🍽️",
      title: "No Fancy Foods Required",
      points: [
        "We design plans using everyday, affordable ingredients available in your kitchen.",
        "No expensive superfoods or imported items needed.",
        "Our philosophy is simple: healthy eating should be accessible to everyone.",
        "We work with common Indian ingredients and meals that can be prepared at home with minimal effort.",
        "Whether it's dal, roti, rice, vegetables, or regular proteins, we show you how to use everyday foods to achieve extraordinary results.",
        "This approach ensures that you can sustain your healthy eating habits even after completing our program."
      ]
    },
    {
      icon: "⏰",
      title: "Lifestyle Integration",
      points: [
        "Your diet plan fits your schedule, not the other way around.",
        "We consider your work hours, social commitments, and daily routine.",
        "Whether you're a busy professional, a homemaker, a student, or someone with irregular work hours, we ensure your diet plan integrates seamlessly into your life.",
        "We understand that real life involves social gatherings, travel, and unexpected events.",
        "We teach you how to make healthy choices in any situation without feeling restricted or deprived."
      ]
    },
    {
      icon: "💬",
      title: "Continuous Support",
      points: [
        "Regular follow-ups and daily WhatsApp guidance ensure you stay motivated and on track.",
        "We're with you throughout your journey.",
        "Our nutritionists are available to answer your questions, provide motivation when you need it, review your meal photos, suggest alternatives, and help you navigate challenges.",
        "This ongoing support is what sets us apart and ensures your long-term success.",
        "You're never alone in your journey – we celebrate your wins with you and help you overcome obstacles together."
      ]
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Unique Approach</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What makes DietFiniti different from other nutrition services? We
            focus on sustainable, practical solutions that work in real life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {uniqueApproach.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:border-green-200 relative overflow-hidden h-full">
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-cyan-500"></div>

                <div className="flex items-start space-x-6 ml-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-md">
                      <span className="text-xl">{approach.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {approach.title}
                    </h3>
                    <ul className="space-y-3">
                      {approach.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + pointIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 leading-relaxed text-sm">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <span className="text-6xl">{approach.icon}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueApproachSection;