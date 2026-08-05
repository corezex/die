"use client";
import Image from "next/image";
import homeimage from "@/public/image/homeimage.jpg";
import homemobileview from "@/public/image/home-mobile-view.jpg";

import { FaCheckCircle, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          {/* Desktop background */}
          <Image
            src={homeimage}
            alt="Dietitian Tejal at the DietFiniti nutrition consultation clinic"
            fill
            priority
            className="object-cover hidden md:block"
            sizes="100vw"
            quality={95}
            style={{ transform: "translateZ(0)" }}
          />
          {/* Mobile background */}
          <Image
            src={homemobileview}
            alt="Dietitian Tejal at DietFiniti"
            fill
            priority
            className="object-cover md:hidden"
            sizes="100vw"
            quality={95}
            style={{ transform: "translateZ(0)" }}
          />
        </div>

        {/* Gradient Overlay with Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Floating Elements - Top Right */}
      {/* <div className="absolute top-10 right-10 hidden lg:block z-20">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-teal-400 text-lg" />
            <span className="text-white text-sm font-medium">Certified Nutritionist</span>
          </div>
        </div>
      </div> */}

      <div className="container relative z-10 mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Animations */}
          <div className="text-white max-w-2xl">
            {/* Main Heading with Gradient */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="block mb-2">Personalised dietitian support for</span>
              <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                sustainable weight management
              </span>
            </h1>


            {/* Key Message */}
            <div className="mb-4 space-y-2">
              <div className="relative p-2.5 md:p-3 rounded-lg overflow-hidden max-w-xl">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-900/75 via-teal-800/45 to-transparent pointer-events-none"
                  aria-hidden
                />
                <p className="text-sm md:text-base font-semibold text-white leading-snug relative z-10">
                  Practical nutrition support for Mumbai, Thane and online across India.
                </p>
              </div>
              <div className="relative p-2.5 md:p-3 rounded-lg overflow-hidden max-w-xl">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-900/75 via-teal-800/45 to-transparent pointer-events-none"
                  aria-hidden
                />
                <p className="text-sm md:text-base text-white leading-snug relative z-10">
                  Your plan is shaped around your routine, preferences, goals and health history.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="relative flex items-start gap-2 p-2.5 md:p-3 rounded-lg overflow-hidden max-w-xl">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-900/75 via-teal-800/45 to-transparent pointer-events-none"
                  aria-hidden
                />
                <FaCheckCircle className="text-teal-300 flex-shrink-0 mt-0.5 relative z-10 text-sm" />
                <p className="text-sm md:text-base font-medium text-white leading-snug relative z-10">
                  Book an in-person or online consultation to discuss the right next step for you.
                </p>
              </div>
            </div>

            {/* Buttons with Hover Effects */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                <FaCalendarAlt className="text-lg" />
                <span>In-Person Consultation</span>
              </a>
              <a
                href="https://wa.me/919321057899"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white hover:bg-gray-50 text-teal-700 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaWhatsapp className="text-lg text-green-500" />
                <span>Online Consultation</span>
              </a>
            </div>
          </div>

          {/* Right side column is now empty - card moved to bottom right */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Credentials Card - Moved to Bottom Right */}
        <div className="hidden lg:block absolute bottom-10 right-100 z-20">
          <div className="relative">
            {/* Floating Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Profile Image Placeholder */}
              <div className="flex items-center gap-4 mb-4">

                <div>
                  <p className="text-xl font-bold text-white">Tejal Parulkar</p>
                  <div className="w-12 h-1 bg-teal-400 rounded-full my-1"></div>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-3">
                <div className="bg-teal-900/30 rounded-lg p-3 border border-teal-400/30">
                  <p className="text-teal-300 font-semibold text-base mb-1">MSc Dietetics</p>
                  <p className="text-gray-300 text-xs">Specialized in Clinical Nutrition</p>
                </div>

                <div className="bg-teal-900/30 rounded-lg p-3 border border-teal-400/30">
                  <p className="text-teal-300 font-semibold text-base mb-1">Diabetic Educator</p>
                  <p className="text-gray-300 text-xs">Certified Diabetes Care Specialist</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-teal-400 rounded-full blur-sm"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-teal-300 rounded-full blur-sm"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm p-2 rounded-xl border border-white/10">
              <FaCheckCircle className="text-teal-400 text-lg" />
            </div>
          </div>
        </div>

        {/* Mobile Credentials - Bottom Right (for mobile devices) */}
        <div className="lg:hidden mt-12">
          <div className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-4 mb-4">

              <div>
                <p className="text-xl font-bold text-white">Tejal Parulkar</p>
                <p className="text-teal-300 font-medium">MSc Dietetics, Diabetic Educator</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}