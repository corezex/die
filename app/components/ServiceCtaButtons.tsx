"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/919321057899";

type ServiceCtaButtonsProps = {
  contactColorClass: string;
  whatsappLabel?: string;
  variant?: "hero" | "section" | "bridal";
};

export function ServiceCtaButtons({
  contactColorClass,
  whatsappLabel = "WhatsApp Us",
  variant = "hero",
}: ServiceCtaButtonsProps) {
  const wrapperClass =
    variant === "section"
      ? "flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12"
      : variant === "bridal"
        ? "flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8"
        : "flex flex-col sm:flex-row gap-4 w-full";

  const contactBtnClass =
    variant === "bridal"
      ? `w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-white ${contactColorClass} font-bold rounded-xl lg:rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer`
      : `px-6 py-4 bg-white ${contactColorClass} font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer`;

  const whatsappBtnClass =
    variant === "bridal"
      ? "w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-white/20 text-white font-bold rounded-xl lg:rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
      : "px-6 py-4 bg-white/20 text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer";

  const iconClass = variant === "bridal" ? "w-4 h-4 lg:w-5 lg:h-5" : "w-5 h-5";
  const textClass = "text-sm lg:text-base";

  const motionProps = {
    whileHover: { scale: 1.05 as const },
    whileTap: { scale: 0.95 as const },
  };

  return (
    <div className={wrapperClass}>
      <motion.a href="/contact" {...motionProps} className={contactBtnClass}>
        <Phone className={iconClass} />
        <span className={textClass}>Contact Us</span>
      </motion.a>
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        className={whatsappBtnClass}
      >
        <MessageCircle className={iconClass} />
        <span className={textClass}>{whatsappLabel}</span>
      </motion.a>
    </div>
  );
}
