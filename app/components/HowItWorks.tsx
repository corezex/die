// components/HowItWorks.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  MessageCircle, 
  Users,
  CheckCircle,
  Clock
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Step {
  step: number;
  icon: LucideIcon;
  title: string;
  features: string[];
  color: 'blue' | 'green' | 'purple' | 'orange';
  duration: string;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      step: 1,
      icon: Calendar,
      title: "Individual Assessment",
      features: ["15-20 minute call", "Goal assessment", "No commitment"],
      color: "blue",
      duration: "15-20 min"
    },
    {
      step: 2,
      icon: FileText,
      title: "Personalized Plan Creation & Discussion",
      features: ["Custom meal plans", "Portion guidance", "Detailed walkthrough"],
      color: "green",
      duration: "24-48 hours"
    },
    {
      step: 3,
      icon: MessageCircle,
      title: "Implementation Support",
      features: ["WhatsApp support", "Meal reviews", "Daily guidance"],
      color: "purple",
      duration: "30-45 min"
    },
    {
      step: 4,
      icon: Users,
      title: "Regular Monitoring & Optimization",
      features: ["Progress tracking", "Plan optimization", "Goal adjustment"],
      color: "orange",
      duration: "Ongoing"
    }
  ];

  // Properly typed color map
  const colorMap = {
    blue: { bg: "from-blue-500 to-blue-600", light: "bg-blue-50", text: "text-blue-600" },
    green: { bg: "from-green-500 to-green-600", light: "bg-green-50", text: "text-green-600" },
    purple: { bg: "from-purple-500 to-purple-600", light: "bg-purple-50", text: "text-purple-600" },
    orange: { bg: "from-orange-500 to-orange-600", light: "bg-orange-50", text: "text-orange-600" }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const stepNumberVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
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
            <CheckCircle className="w-4 h-4 mr-2" />
            Simple 4-Step Process
          </motion.div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-green-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to better health through our proven, step-by-step process designed for your success
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => {
            const StepIcon = step.icon;
            const colors = colorMap[step.color];
            
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative h-full flex flex-col"
              >
                {/* Step Number with Icon */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    variants={stepNumberVariants}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.bg} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {step.step}
                  </motion.div>
                  <div className={`p-2 rounded-lg ${colors.light}`}>
                    <StepIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Duration */}
                  {/* <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div> */}

                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.bg} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;