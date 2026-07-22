"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselSlide = {
  src: StaticImageData;
  alt: string;
  label?: string;
};

type ImageCarouselProps = {
  title?: string;
  subtitle?: string;
  slides: CarouselSlide[];
  autoPlayMs?: number;
};

export default function ImageCarousel({
  title,
  subtitle,
  slides,
  autoPlayMs = 5000,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const paginate = useCallback(
    (direction: number) => {
      setIndex((prev) => (prev + direction + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => paginate(1), autoPlayMs);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayMs, paginate]);

  if (slides.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 sm:mb-14"
    >
      {(title || subtitle) && (
        <div className="text-center mb-5 sm:mb-6">
          {title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-1.5 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto group">
        <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[5/4] rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                className="object-contain bg-gray-50 p-1 sm:p-2"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 512px"
                priority={index === 0}
              />
              {slides[index].label && (
                <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-green-600/90 text-white shadow-md">
                  {slides[index].label}
                </span>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-white hover:scale-105 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex justify-center gap-1.5 mt-3 flex-wrap max-w-full px-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-green-600"
                      : "w-2 bg-gray-300 hover:bg-green-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
              {index + 1} / {slides.length}
            </p>
          </>
        )}
      </div>
    </motion.section>
  );
}
