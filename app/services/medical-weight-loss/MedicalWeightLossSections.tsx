"use client";
import { motion } from "framer-motion";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

import {
  Check,
  Phone,
  MessageCircle,
  Users,
  Star,
  Heart,
  Activity,
} from "lucide-react";
import Image from "next/image";
import MedicalWeightLoss2 from "@/public/image/MedicalWeightLoss2.png";
import MedicalWeightLoss3 from "@/public/image/MedicalWeightLoss3.jpg";

// Define TypeScript interfaces
interface MedicalCondition {
  icon: string;
  title: string;
  description: string;
}

interface ProgramFeature {
  icon: string;
  title: string;
  description: string;
}

interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

interface ExpectedOutcome {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SuccessStory {
  name: string;
  age: string;
  condition: string;
  loss: string;
  duration: string;
  testimonial: string;
}

interface MedicalWeightLossSectionsProps {
  medicalConditions: MedicalCondition[];
  programFeatures: ProgramFeature[];
  methodologySteps: MethodologyStep[];
  expectedOutcomes: ExpectedOutcome[];
  successStories: SuccessStory[];
}

// Placeholder component for images
const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center">
    <span className="text-gray-500 text-sm">{text}</span>
  </div>
);

export const MedicalWeightLossSections = ({
  medicalConditions,
  programFeatures,
  methodologySteps,
  expectedOutcomes,
  successStories,
}: MedicalWeightLossSectionsProps) => {
  return (
    <>
      {/* Medical Conditions Section */}
      <section className="py-10 md:py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-[#262262] mb-4">
              Conditions We Specialize In
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical weight management for various health
              conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {medicalConditions.map(
              (condition: MedicalCondition, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 w-full"
                >
                  <div className="text-3xl md:text-4xl mb-4">
                    {condition.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {condition.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Methodology Steps Section */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-[#262262] mb-4">
              Our 4-Step Medical Approach
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic process designed for safe and effective weight
              management with medical conditions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Methodology Steps */}
            <div className="space-y-6 md:space-y-8">
              {methodologySteps.map((step: MethodologyStep, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src={MedicalWeightLoss2}
                  alt="Medical Weight Loss Methodology"
                  className="w-full rounded-2xl shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Image Left + Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="relative w-full">
                <Image
                  src={MedicalWeightLoss3}
                  alt="Program Features"
                  className="w-full rounded-2xl shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left w-full"
            >
              <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Program Features
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our program provides comprehensive, end-to-end support for
                individuals seeking medically supervised weight management. We
                combine nutritional science, clinical monitoring, and behavioral
                guidance to ensure that every participant achieves safe,
                lasting, and healthy results.
              </p>
            </motion.div>
          </div>

          {/* Program Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programFeatures.map((feature: ProgramFeature, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="text-2xl md:text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What This Support Focuses On
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A practical, sustainable nutrition approach alongside your existing medical care. Individual results vary and clinical outcomes remain the responsibility of your treating clinician.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {expectedOutcomes.map((outcome: ExpectedOutcome, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-2xl p-4 md:p-6 text-center shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 w-full"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <div className="text-white">{outcome.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
                  {outcome.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Clients Share
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Feedback themes from clients receiving nutrition support alongside their ongoing medical care. Individual results and timelines vary; DietFiniti does not guarantee clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {successStories.map((story: SuccessStory, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 md:p-8 text-white w-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {story.name}
                    </h3>
                    <p className="text-blue-200 text-sm md:text-base">
                      {story.age} · {story.condition}
                    </p>
                  </div>
                  <div className="bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                    {story.loss}
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed text-xs md:text-sm mb-3 md:mb-4">
                  {story.testimonial}
                </p>
                <div className="text-blue-200 text-xs md:text-sm">
                  {story.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-white mb-4 md:mb-6">
              Get Expert Medical Weight Loss Support
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Start your specialized weight loss journey today with expert
              guidance for your medical condition.
            </p>

            <ServiceCtaButtons
              contactColorClass="text-blue-600"
              variant="section"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto text-blue-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    2,000+
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Medical Clients
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                  <span className="text-base md:text-lg font-semibold">
                    5/5
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Satisfaction Rating
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Activity className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-base md:text-lg font-semibold">
                    99%
                  </span>
                </div>
                <div className="text-blue-100 text-xs md:text-sm mt-1">
                  Health Improvement
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
