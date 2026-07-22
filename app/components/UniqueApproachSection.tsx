// components/UniqueApproachSection.tsx
"use client";

import { motion } from "framer-motion";

const UniqueApproachSection = () => {
  const uniqueApproach = [
    {
      icon: "🎯",
      title: "Personalization at Core",
      description:
        "Every diet plan is customized based on your unique needs, lifestyle, and health goals. No one-size-fits-all approaches.",
    },
    {
      icon: "🍽️",
      title: "No Fancy Foods Required",
      description:
        "We design plans using everyday, affordable ingredients. No expensive superfoods or imported items needed.",
    },
    {
      icon: "⏰",
      title: "Lifestyle Integration",
      description:
        "Your diet plan fits your schedule, not the other way around. Seamlessly integrates into your daily routine.",
    },
    {
      icon: "💬",
      title: "Continuous Support",
      description:
        "Regular follow-ups and daily WhatsApp guidance ensure you stay motivated and on track throughout your journey.",
    },
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uniqueApproach.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:border-green-200 relative overflow-hidden h-full flex flex-col">
                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-cyan-500"></div>

                {/* Icon Row */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-md">
                    <span className="text-2xl">{approach.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm text-center flex-1">
                    {approach.description}
                  </p>
                </div>

                {/* Background Pattern */}
                <div className="absolute right-2 bottom-2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <span className="text-4xl">{approach.icon}</span>
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