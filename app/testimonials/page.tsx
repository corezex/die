'use client';

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonialService, Testimonial } from "./testimonialService";
import ImageCarousel, { CarouselSlide } from "./ImageCarousel";
import {
  testimonialSlides,
  shuffleMixedTestimonialSlides,
} from "./carouselSlides";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TestimonialsPage() {
  const [mixedSlides, setMixedSlides] = useState<CarouselSlide[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMixedSlides(shuffleMixedTestimonialSlides(testimonialSlides));
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [currentPage]);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await testimonialService.getAll(currentPage, 50);

      if (response.success && response.data) {
        setTestimonials(response.data);
        setError(null);
        setTotalCount(response.totalItems || response.data.length);
      } else {
        setError("Could not load testimonials from server.");
        setTestimonials([]);
        setTotalCount(0);
      }
    } catch (err) {
      setError("Could not load testimonials from server.");
      setTestimonials([]);
      setTotalCount(0);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const displayedTestimonials = testimonials.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const toggleReadMore = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const shouldShowReadMore = (content: string = "") => {
    return content.length > 200;
  };

  const truncateContent = (content: string = "", maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  const formatAchievement = (testimonial: Testimonial) => {
    if (testimonial.growth) {
      return testimonial.growth;
    }
    return "Success Story";
  };

  const showApiLoading = loading && testimonials.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/10 to-green-400/10"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-xl"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Client <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-2"
            >
              Experiences shared by people who chose{" "}
              <span className="font-semibold text-green-600">DietFiniti</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Individual experiences and outcomes vary. Testimonials are personal accounts and are not a promise of a particular health or weight result.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {mixedSlides.length > 0 && (
          <ImageCarousel
            title="Client experiences"
            subtitle="Individual experiences and outcomes vary"
            slides={mixedSlides}
            autoPlayMs={4500}
          />
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {error}
          </div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Client Success Stories
        </motion.h2>

        {showApiLoading ? (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading success stories...</p>
            </div>
          </div>
        ) : displayedTestimonials.length > 0 ? (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            >
              {displayedTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial._id}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 flex flex-col h-full"
                >
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {getInitials(testimonial.name)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                          {testimonial.age ? `Age ${testimonial.age} | ` : ""}
                          {formatAchievement(testimonial)}
                        </p>
                        {testimonial.servicestype && (
                          <span className="inline-block mt-1 px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {testimonial.servicestype}
                          </span>
                        )}
                      </div>
                    </div>

                    {testimonial.description && (
                      <div className="mt-4 flex-grow">
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                          {expandedCards.has(testimonial._id)
                            ? testimonial.description
                            : truncateContent(testimonial.description)}
                        </p>

                        {shouldShowReadMore(testimonial.description) && (
                          <button
                            onClick={() => toggleReadMore(testimonial._id)}
                            className="mt-3 text-green-600 hover:text-green-700 font-medium text-xs sm:text-sm transition-colors duration-200 flex items-center"
                          >
                            {expandedCards.has(testimonial._id)
                              ? "Read Less"
                              : "Read More"}
                          </button>
                        )}
                      </div>
                    )}

                    {testimonial.createdAt && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">
                          {new Date(testimonial.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {visibleCount < testimonials.length && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <button
                  onClick={loadMore}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-full text-sm sm:text-base hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Load More Stories ({testimonials.length - visibleCount}{" "}
                  remaining)
                </button>
              </motion.div>
            )}
          </>
        ) : (
          !error && (
            <div className="text-center py-8 bg-white rounded-2xl shadow-lg mb-8">
              <p className="text-gray-600 text-lg mb-6">No client stories available right now.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {[
                  { name: "Priya M.", service: "Weight Loss", text: "After years of trying generic diets, the personalised approach finally made sense. My energy stayed stable and the WhatsApp support kept me consistent." },
                  { name: "Rahul K.", service: "Medical Weight Loss", text: "Working with my doctor and Dietitian Tejal together made food planning clear. I understood what to eat and why, without confusion." },
                  { name: "Anjali S.", service: "Bridal Diet", text: "The 3-month timeline fit my wedding prep perfectly. Simple Indian meals, no exotic ingredients, and visible results without stress." },
                ].map((t) => (
                  <div key={t.name} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100 p-6 text-left shadow-sm">
                    <h4 className="font-bold text-slate-900">{t.name} · {t.service}</h4>
                    <p className="text-sm text-slate-700 mt-3 leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Your transformation journey starts with a simple consultation. Let
            us help you achieve your health goals with personalized nutrition
            plans and continuous support.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-full text-base sm:text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-2xl"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
