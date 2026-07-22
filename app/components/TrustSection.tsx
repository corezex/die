"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Trophy, Calendar, Award, Star, MapPin } from "lucide-react";
import ImageCarousel, { CarouselSlide } from "@/app/testimonials/ImageCarousel";
import {
  testimonialSlides,
  shuffleMixedTestimonialSlides,
} from "@/app/testimonials/carouselSlides";

const stats = [
  { icon: MapPin, number: "2", suffix: "", label: "Clinic locations", color: "from-blue-500 to-cyan-500" },
  { icon: Calendar, number: "Online", suffix: "", label: "Consultations across India", color: "from-green-500 to-emerald-500" },
  { icon: Users, number: "Personal", suffix: "", label: "Nutrition support", color: "from-orange-500 to-amber-500" },
];

const TrustSection = () => {
  const [mixedSlides, setMixedSlides] = useState<CarouselSlide[]>([]);

  useEffect(() => {
    setMixedSlides(shuffleMixedTestimonialSlides(testimonialSlides));
  }, []);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8  bg-white">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why clients trust Dietfiniti
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Many of our clients come to us after trying multiple diets with
            little success.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What they find here is:
              </h3>
              <div className="space-y-4">
                {[
                  "Clarity instead of confusion",
                  "Support instead of pressure",
                  "Progress that feels realistic",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 pt-1">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                With clinics in Mumbai and Thane, Dietfiniti has helped
                individuals build healthier relationships with food — and see
                results that last.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Stats and Client Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Client Experience Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
            >
              {/* <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    Client Experience
                  </h4>
                  <p className="text-gray-600 text-sm">What our clients say</p>
                </div>
              </div> */}

              <div className="space-y-4">
                {/* <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500"
                        fill="#f59e0b"
                      />
                    ))}
                  </div>
                </div> */}

                {mixedSlides.length > 0 && (
                  <ImageCarousel slides={mixedSlides} autoPlayMs={4500} />
                )}

                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://www.google.com/search?sca_esv=21fd1ad54828f0e3&sxsrf=ANbL-n6GkHlPUQdILL7YojzwK7e-xbWjYg:1770888691933&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfl89iUqcFh2jCZ6lNAKM9TPQEqznMtSdfw8kz5xkZBtyTRkOeDyhxkoHDTMtDs9EfqzSP1AGr7ZgqBbeNZNcauG150nsTG9nwDfiaZKtBU--gRaPoVLmOh7p0CnJDlUUjZWpYM%3D&q=DietFiniti+by+Dietitian+Tejal,+Mumbai+Reviews&sa=X&ved=2ahUKEwivna270tOSAxWSTGwGHRuwEPgQ0bkNegQIHRAF&cshid=1770888701713339&biw=1280&bih=551&dpr=1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-500 group w-full lg:w-auto"
                  >
                    <div className="flex items-center w-full">
                      <div className="mr-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" fill="white" />
                        </div>
                      </div>
                      <div className="text-left flex-1">
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
                            View reviews
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Reviews may reflect individual experiences
                        </p>
                      </div>
                      <div className="ml-4">
                        <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Grid - Moved outside the main grid and fixed */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustSection;
