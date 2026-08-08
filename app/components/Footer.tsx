// components/Footer.tsx
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
  ArrowRight,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Recipes", href: "/recipe" },
  { name: "Blog", href: "/blog" },
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
  { name: "Condition-Specific Nutrition", slug: "condition-nutrition" },
  { name: "Kids Nutrition", slug: "kids-nutrition" },
  { name: "Corporate Wellness", slug: "corporate-wellness" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Payment & Refund Policy", href: "/payment-refund-policy" },
  { name: "Community Guidelines", href: "/community-guidelines" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/dieticiantejal/", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#f4faf5] to-[#F5F5F5] text-gray-800 shadow-lg">
      {/* Main Footer Content */}
      <div className="container mx-auto animate-fade-up px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="w-full max-w-sm p-4">
                <div className="relative mx-auto mb-4 h-20 w-48">
                  <Image
                    src={footerlogo}
                    alt="DietFiniti"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="h-4 w-4 text-green-600" />
                <a href="tel:+919321057899" className="hover:text-green-700 transition-colors duration-300">
                  +91 9321057899
                </a>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="h-4 w-4 text-green-600" />
                <a href="mailto:dietfiniti@gmail.com" className="hover:text-green-700 transition-colors duration-300">
                  dietfiniti@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <div>
                  <div className="font-medium text-green-700">Mumbai Clinic:</div>
                  <p className="text-sm">
                    Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East, Mumbai 400013
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <div>
                  <div className="font-medium text-green-700">Thane Clinic:</div>
                  <p className="text-sm">
                    1st Floor, Oswal Business Plaza, 109/A, Kolshet Rd, above MR D.I.Y, near Kalpataru ParkCity, Dhokali, Thane West, Thane 400607
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <h2 className="flex items-center text-lg font-semibold text-green-700">
              <ArrowRight className="mr-2 h-5 w-5" />
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-white/50 hover:text-green-700"
                  >
                    <ArrowRight className="mr-2 h-3 w-3 text-green-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div className="space-y-4">
            <h2 className="flex items-center text-lg font-semibold text-green-700">
              <Star className="mr-2 h-5 w-5" />
              Our Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-white/50 hover:text-green-700"
                  >
                    <Star className="mr-2 h-3 w-3 text-green-600" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>


          </div>

          {/* Column 4 — Business Hours, Social + Rating */}
          <div className="space-y-6">
            <div className="space-y-2 rounded-lg border border-gray-200 bg-white p-3">
              <div className="flex items-center space-x-2 text-green-700">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">Business Hours</span>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
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

            <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-4">
              <h2 className="text-lg font-semibold text-green-700">Follow Us</h2>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 transition-all duration-300 hover:border-green-500 hover:bg-green-100"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-700 group-hover:text-green-700" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <a
                href="https://www.google.com/search?sca_esv=21fd1ad54828f0e3&sxsrf=ANbL-n6GkHlPUQdILL7YojzwK7e-xbWjYg:1770888691933&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfl89iUqcFh2jCZ6lNAKM9TPQEqznMtSdfw8kz5xkZBtyTRkOeDyhxkoHDTMtDs9EfqzSP1AGr7ZgqBbeNZNcauG150nsTG9nwDfiaZKtBU--gRaPoVLmOh7p0CnJDlUUjZWpYM%3D&q=DietFiniti+by+Dietitian+Tejal,+Mumbai+Reviews&sa=X&ved=2ahUKEwivna270tOSAxWSTGwGHRuwEPgQ0bkNegQIHRAF&cshid=1770888701713339&biw=1280&bih=551&dpr=1.5"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer transition hover:shadow-md"
              >
                <div className="mb-2 flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">5.0 · 258 Google reviews</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 bg-white animate-fade-up">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <span>© {currentYear} Nutritionist. All rights reserved.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 transition-colors duration-300 hover:text-green-700 hover:underline"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-green-700 hover:underline"
              >
                llms.txt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
