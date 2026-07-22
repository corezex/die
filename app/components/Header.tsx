// components/Header.tsx
"use client";
import Image from "next/image";
import logo2 from "@/public/image/logo.png";
import logo1 from "@/public/image/logo2.png";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Scale, 
  HeartPulse, 
  Dumbbell, 
  Baby, 
  Sparkles, 
  Trophy,
  Utensils,
  Home,
  Users,
  Star,
  PhoneCall,
  BookOpen,
  ChefHat,Activity 
} from "lucide-react";

// Define servicesItems first since navigationItems depends on it
const servicesItems = [
  { name: "Our Services", path: "/services", icon: Utensils },
  { name: "Online Consultation", path: "/online-dietitian-consultation", icon: PhoneCall },
  { name: "Weight Loss Program", path: "/services/weight-loss", icon: Scale },
  { name: "Medical Weight Loss", path: "/services/medical-weight-loss", icon: HeartPulse },
  { name: "Weight Gain Program", path: "/services/weight-gain", icon: Dumbbell },
  { name: "Pregnancy Diet Plan", path: "/services/pregnancy-diet", icon: Baby },
  { name: "Bridal Diet Plan", path: "/services/bridal-diet", icon: Sparkles },
  { name: "Sports Nutrition Plan", path: "/services/sports-nutrition", icon: Trophy },
];

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Users },
  { name: "Services", path: "/services", icon: Utensils, submenu: servicesItems },
  { name: "Blogs", path: "/blog", icon: BookOpen },
  { name: "Recipes", path: "/recipe", icon: ChefHat },
  { name: "Testimonials", path: "/testimonials", icon: Star },
    { name: "BMI", path: "/bmi-calculator", icon: Activity  },
  { name: "Contact", path: "/contact", icon: PhoneCall },
];

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileServicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Declare functions first before using them in useEffect
  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleMobileServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    closeAllMenus();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (mobileServicesDropdownRef.current && !mobileServicesDropdownRef.current.contains(event.target as Node)) {
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when pressing escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllMenus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Combined Logo Container */}
          <div className="flex-shrink-0 flex items-center">
          <Link
              href="/"
              className="text-xl font-bold text-green-600 flex items-center hover:text-green-700 transition duration-300"
              onClick={handleNavItemClick}
            >
              <Image
                src={logo1}
                alt="Dietfiniti Logo"
                width={40}
                height={40}
                className="object-contain gap-5 mr-2"
                priority
              />
              <Image
                src={logo2}
                alt="Dietfiniti Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Compact */}
          <nav className="hidden lg:flex items-center space-x-0">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative" 
                    ref={item.name === "Services" ? servicesDropdownRef : null}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.path}
                        className="text-gray-700 hover:text-green-600 px-3 py-1.5 rounded text-xs font-medium transition duration-300 flex items-center group"
                      >
                        <item.icon className="w-3.5 h-3.5 mr-1.5 group-hover:scale-110 transition-transform" />
                        {item.name}
                      </Link>
                      <button
                        onClick={handleServicesClick}
                        className="text-gray-500 hover:text-green-600 p-0.5 rounded transition duration-300 flex items-center"
                        aria-label={`Toggle ${item.name.toLowerCase()} dropdown`}
                        aria-expanded={isServicesOpen}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isServicesOpen && (
                      <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 text-xs">
                        {item.submenu.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.path}
                            className="flex items-center px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition duration-150 group"
                            onClick={handleNavItemClick}
                          >
                            <subItem.icon className="w-3.5 h-3.5 mr-2.5 text-green-500 group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-700 hover:text-green-600 px-3 py-1.5 rounded text-xs font-medium transition duration-300 flex items-center group"
                  >
                    <item.icon className="w-3.5 h-3.5 mr-1.5 group-hover:scale-110 transition-transform" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button - Desktop - Compact */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919321057899"
              className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition duration-300 flex items-center shadow-sm hover:shadow text-xs"
              aria-label="Call us"
            >
              <Phone className="w-3 h-3 mr-1.5" />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          {/* Mobile Header Right Section */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Phone link - Smaller */}
            <a
              href="tel:+919321057899"
              className="bg-green-100 text-green-600 p-2 rounded-full hover:bg-green-200 transition duration-300 flex items-center justify-center"
              aria-label="Call us"
              style={{ minWidth: '36px', minHeight: '36px' }}
            >
              <Phone className="w-4 h-4" />
            </a>
            
            {/* Menu button - Smaller */}
            <button
              ref={mobileMenuButtonRef}
              onClick={handleMobileMenuToggle}
              className="text-gray-700 hover:text-green-600 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 relative z-60 bg-gray-50 hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              style={{ minWidth: '36px', minHeight: '36px' }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Compact */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-50 bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Mobile Header with Combined Logos */}
            <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-16 h-8">
                    <Image
                      src={logo1}
                      alt="Dietfiniti Logo 1"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="relative w-16 h-8">
                    <Image
                      src={logo2}
                      alt="Dietfiniti Logo 2"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <button
                  onClick={closeAllMenus}
                  className="text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                  aria-label="Close menu"
                  style={{ minWidth: '36px', minHeight: '36px' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center bg-gray-50 border border-gray-100 p-2 rounded-md">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  <a 
                    href="tel:+919321057899" 
                    className="text-sm font-semibold text-gray-800 hover:text-green-700 hover:underline"
                  >
                    +91 93210 57899
                  </a>
                </div>
                <p className="text-gray-500 text-xs italic">
                  Your Health, Our Priority
                </p>
              </div>
            </div>

            {/* Mobile Navigation Items - Compact */}
            <div className="h-full overflow-y-auto pb-24 px-4">
              <nav className="py-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div 
                        className="border-b border-gray-100" 
                        ref={mobileServicesDropdownRef}
                      >
                        <button
                          onClick={handleMobileServicesClick}
                          className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition duration-200 text-sm"
                          aria-label={`Toggle ${item.name.toLowerCase()} dropdown`}
                          aria-expanded={isMobileServicesOpen}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-50 rounded-md flex items-center justify-center mr-2">
                              <item.icon className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isMobileServicesOpen && (
                          <div className="bg-gray-50 py-2 rounded-md mx-2 mb-2">
                            {item.submenu.map((subItem, index) => (
                              <Link
                                key={index}
                                href={subItem.path}
                                className="flex items-center px-4 py-2.5 text-gray-600 hover:text-green-700 hover:bg-white transition duration-150 text-sm border-b border-gray-100 last:border-b-0"
                                onClick={handleNavItemClick}
                              >
                                <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center mr-2">
                                  <subItem.icon className="w-3.5 h-3.5 text-green-600" />
                                </div>
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="flex items-center px-3 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 border-b border-gray-100 transition duration-200 text-sm"
                        onClick={handleNavItemClick}
                      >
                        <div className="w-8 h-8 bg-green-50 rounded-md flex items-center justify-center mr-2">
                          <item.icon className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Section - Compact */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
                <a
                  href="tel:+919321057899"
                  className="block w-full bg-green-600 text-white text-center py-2.5 rounded-lg hover:bg-green-700 transition duration-300 font-semibold text-sm shadow"
                  onClick={handleNavItemClick}
                >
                  <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                  Call Now: +91 93210 57899
                </a>
                <p className="text-center text-gray-500 text-xs mt-1.5">
                  Available 24/7 for consultations
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Overlay - Only show when mobile menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
            onClick={closeAllMenus}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Header;