// components/Footer.tsx
"use client";
import Image from "next/image";
import footerlogo from "@/public/image/footerlogo.png";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  ArrowRight,
  Heart,
  Calendar,
  Clock,
  Star,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Success Stories", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book a Consultation", href: "/contact" },
];

const services = [
  { name: "Personalized Weight Management", slug: "weight-loss" },
  { name: "Medical Nutrition Therapy", slug: "medical-weight-loss" },
  { name: "Healthy Weight Gain Program", slug: "weight-gain" },
  { name: "Pregnancy & Postpartum Nutrition", slug: "pregnancy-diet" },
  { name: "Bridal Wellness Program", slug: "bridal-diet" },
  { name: "Sports Performance Nutrition", slug: "sports-nutrition" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Payment & Refund Policy", href: "/payment-refund-policy" },
  { name: "Community Guidelines", href: "/community-guidelines" },
  { name: "Disclaimer", href: "/disclaimer" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/dieticiantejal/", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#FAF3E0] to-[#F5F5F5] text-gray-800 shadow-lg">
      {/* Main Footer Content */}
      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="p-4 w-full max-w-sm">
                {/* Logo Box */}
                <div className="relative w-48 h-20 mx-auto mb-4">
                  <Image
                    src={footerlogo}
                    alt="Nutritionist Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-4 h-4 text-green-600" />
                <a
                  href="tel:+919321057899"
                  className="hover:text-green-700 transition-colors duration-300"
                >
                  +91 9321057899
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-4 h-4 text-green-600" />
                <a 
                  href="mailto:dietfiniti@gmail.com"
                  className="hover:text-green-700 transition-colors duration-300"
                >
                  dietfiniti@gmail.com
                </a>
              </div>
              
              {/* Fixed Address Display */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="font-medium text-green-700">Mumbai Clinic:</div>
                    <p className="text-sm">
                      Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, 
                      opposite Marathon Futurex, Lower Parel East, Mumbai 400013
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="font-medium text-green-700">Thane Clinic:</div>
                    <p className="text-sm">
                      1st Floor, Oswal Business Plaza, 109/A, Kolshet Rd, 
                      above MR D.I.Y, near Kalpataru ParkCity, Dhokali, 
                      Thane West, Thane 400607
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2 bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 text-green-700">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Business Hours</span>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-green-700 hover:bg-white/50 transition-all duration-300 flex items-center group p-2 rounded-lg"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-600" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-700 hover:text-green-700 hover:bg-white/50 transition-all duration-300 flex items-center group p-2 rounded-lg"
                  >
                    <Star className="w-3 h-3 mr-2 text-green-600" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Social Links */}
            <div className="space-y-4 bg-white p-4 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-green-700">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 group border border-gray-300 hover:border-green-500"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 group-hover:text-green-700" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="bg-white p-4 rounded-xl border border-gray-200">
             <a
  href="https://www.google.com/search?sca_esv=21fd1ad54828f0e3&sxsrf=ANbL-n6GkHlPUQdILL7YojzwK7e-xbWjYg:1770888691933&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfl89iUqcFh2jCZ6lNAKM9TPQEqznMtSdfw8kz5xkZBtyTRkOeDyhxkoHDTMtDs9EfqzSP1AGr7ZgqBbeNZNcauG150nsTG9nwDfiaZKtBU--gRaPoVLmOh7p0CnJDlUUjZWpYM%3D&q=DietFiniti+by+Dietitian+Tejal,+Mumbai+Reviews&sa=X&ved=2ahUKEwivna270tOSAxWSTGwGHRuwEPgQ0bkNegQIHRAF&cshid=1770888701713339&biw=1280&bih=551&dpr=1.5"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer hover:shadow-md transition">
    <div className="flex items-center space-x-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-yellow-500 fill-current"
        />
      ))}
    </div>
    <p className="text-sm text-gray-700">
      Read client reviews on Google
    </p>
  </div>
</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-300 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-600 text-sm flex items-center">
              <span>© {currentYear} Nutritionist. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-green-700 transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="text-gray-600 text-sm flex items-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for your health</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}