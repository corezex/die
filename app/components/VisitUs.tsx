"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Home,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";

const VisitUs = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919321057899"; // Replace with actual WhatsApp number
    const message = "Hi! I'd like to book a consultation with DietFiniti.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* New "Our Clinics" Section */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#262262] leading-tight mb-6">
                  Ready to stop guessing and start progressing?
                </h2>

                <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8"></div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  If you're done with trial-and-error dieting, a personalised
                  approach can change everything.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Personalized meal plans tailored to your lifestyle",
                    "One-on-one guidance from certified nutritionists",
                    "Sustainable habits for long-term success",
                    "Progress tracking and regular check-ins",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleWhatsAppRedirect}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg group"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Your Consultation Today
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-gray-200"
                >
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-500"
                          fill="#f59e0b"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-semibold text-gray-900">
                      5/5
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">2000+ Happy Clients</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm">12 Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Clinic Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6">
                  <div className="flex items-center">
                    <MapPin className="w-8 h-8 text-white mr-3" />
                    <h3 className="text-2xl font-bold text-white">
                      Our Clinics
                    </h3>
                  </div>
                  <p className="text-teal-100 mt-2">
                    Visit us in person for personalized care
                  </p>
                </div>

                {/* Clinic Cards */}
                <div className="p-6 space-y-6">
                  {/* Mumbai Clinic */}
                  <Link href="/contact" className="block" aria-label="View Lower Parel clinic address on contact page">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                        <Home className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            Lower Parel Clinic
                          </h4>
                          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                            Flagship
                          </span>
                        </div>
                        <p className="text-gray-600">Since 2019 • Mumbai</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-3 text-teal-500" />
                        <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-3 text-teal-500" />
                        <span>Lower Parel, Mumbai, Maharashtra</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star
                          className="w-4 h-4 text-amber-500 mr-1"
                          fill="#f59e0b"
                        />
                        <span className="font-medium">4.9/5</span>
                        <span className="mx-2">•</span>
                        <span>500+ Google Reviews</span>
                      </div>
                    </div>
                  </motion.div>
                  </Link>

                  {/* Thane Clinic */}
                  <Link href="/contact" className="block" aria-label="View Thane clinic address on contact page">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer relative"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        New
                      </span>
                    </div>

                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Home className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            Thane Clinic
                          </h4>
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                            New Location
                          </span>
                        </div>
                        <p className="text-gray-600">New in 2025 • Thane</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-3 text-orange-500" />
                        <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                        <span>Kolshet Road, Thane, Maharashtra</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star
                          className="w-4 h-4 text-amber-500 mr-1"
                          fill="#f59e0b"
                        />
                        <span className="font-medium">5/5</span>
                        <span className="mx-2">•</span>
                        <span>Perfect Rating</span>
                      </div>
                    </div>
                  </motion.div>
                  </Link>
                </div>

          
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Original Clinic Section (Optional - keep if you want both sections) */}
      {/* ... rest of your original code ... */}
    </div>
  );
};

export default VisitUs;
