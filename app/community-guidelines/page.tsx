// app/community-guidelines/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Users, Shield, Heart, BookOpen, AlertTriangle, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Guidelines | DietFiniti",
  description: "Learn about DietFiniti's community guidelines for respectful, professional, and supportive environment. Ensure confidentiality and authentic participation.",
  alternates: { canonical: "/community-guidelines" },
};

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl">🤝</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Community Guidelines
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At DietFiniti by Dietitian Tejal, we value mutual respect, learning, and positivity within our client community.
          </p>
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-emerald-800 font-medium">
              These guidelines ensure that our community remains a supportive and safe environment.
            </p>
          </div>
        </div>

        {/* Guidelines Content */}
        <div className="space-y-8">
          {/* Section 1: Respect & Professional Conduct */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Respect & Professional Conduct</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-5">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Do&apos;s
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-green-700">
                        <span className="text-green-500 mr-2">✓</span>
                        Treat all members and DietFiniti team with courtesy and professionalism
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-5">
                    <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Don&apos;ts
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start text-red-700">
                        <span className="text-red-500 mr-2">✗</span>
                        No use of abusive, offensive, or discriminatory language
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Confidentiality */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <Lock className="w-6 h-6 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Confidentiality</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <p className="text-blue-800">
                      Client progress, health information, or personal details shared during sessions or group interactions are strictly confidential.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="text-red-800 font-semibold flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Sharing screenshots, messages, or private communications without consent is prohibited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Authentic Participation */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Authentic Participation</h2>
                </div>
                
                <div className="grid gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <h3 className="font-semibold text-amber-800 mb-2">Required</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        Provide accurate health and lifestyle information for effective results
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <h3 className="font-semibold text-red-800 mb-2">Prohibited</h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Avoid misrepresenting identity or medical background
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: No Medical Substitution */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-6 h-6 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">No Medical Substitution</h2>
                </div>
                
                <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold">!</span>
                    </div>
                    <div>
                      <p className="text-orange-800 font-semibold mb-2">
                        Important Medical Disclaimer
                      </p>
                      <p className="text-orange-700">
                        The advice provided by DietFiniti is not a substitute for medical treatment. Always consult your physician before making major health changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                5
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-6 h-6 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <p className="text-purple-800 mb-4">
                    All content, plans, videos, and materials shared during consultations or via the website remain the property of DietFiniti.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-300">
                    <p className="text-purple-700 font-semibold text-center">
                      Cannot be reproduced, shared, or sold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Violation Consequences */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 text-emerald-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                6
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Violation Consequences</h2>
                </div>
                
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <p className="text-red-800 text-lg font-bold">
                      Violation of these guidelines may result in removal from the program without refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Pledge */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Community Pledge</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Respect</h4>
                <p className="text-sm opacity-90">Treat everyone with dignity and kindness</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Confidentiality</h4>
                <p className="text-sm opacity-90">Protect each other&apos;s privacy</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Authenticity</h4>
                <p className="text-sm opacity-90">Be honest and genuine</p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm">
              Together, we create a supportive environment where everyone can thrive on their health journey.
            </p>
          </div>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Questions About Our Guidelines?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re here to help you understand our community standards and ensure a positive experience for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:dietfiniti@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg"
                >
                  Contact Support
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DietFiniti LLP. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;