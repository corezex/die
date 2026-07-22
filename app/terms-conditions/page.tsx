// app/terms-conditions/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | DietFiniti",
  description: "Read DietFiniti's Terms & Conditions for services, health disclaimers, client responsibilities, and intellectual property rights.",
  alternates: { canonical: "/terms-conditions" },
};

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            📜 Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By accessing our website or availing our services, you agree to be bound by these terms.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 text-sm">
            <strong>Last Updated:</strong> {new Date().getFullYear()} | DietFiniti by Dietitian Tejal
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 space-y-8">
          {/* Section 1: Acceptance */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                1. Acceptance
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  By accessing <strong>www.dietfiniti.com</strong> or availing of our services, you agree to abide by these Terms & Conditions and all applicable laws.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Services Overview */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                2. Services Overview
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-semibold mb-2">
                  DietFiniti by Dietitian Tejal provides:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Personalized diet consultations (video/phone)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Subscription-based diet plans
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Downloadable meal plans
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Workshops and nutrition sessions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Health Disclaimer */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                3. Health Disclaimer
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  All advice, diet plans, and recommendations are provided for general wellness and nutrition. Results may vary per individual.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>We do not guarantee medical outcomes or weight loss percentages.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Client Responsibilities */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                4. Client Responsibilities
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-semibold mb-2">
                  Clients must:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Provide accurate health information.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Follow prescribed dietary recommendations responsibly.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Notify us of any medical condition changes.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Client Transformations & Media Consent */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                5. Client Consent
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  DietFiniti may, from time to time, publish client progress photos, transformation stories, or results on digital or print platforms such as our website, Instagram, Facebook, and other relevant media.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  All such publications will be handled professionally and ethically, ensuring that clients&apos; identities are protected by blurring faces, concealing names, or anonymizing identifiable details.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Consent Notice:</strong> By availing any DietFiniti service, clients provide implicit consent to such limited use of their anonymized visuals and testimonials for marketing and educational purposes.
                  </p>
                  <p className="text-blue-800 text-sm mt-2">
                    <strong>Withdrawal:</strong> Clients who wish to withdraw consent for such use may contact{" "}
                    <a href="mailto:dietfiniti@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                      dietfiniti@gmail.com
                    </a>
                    , and DietFiniti will respect and remove such content within a reasonable timeframe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Intellectual Property */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                6. Intellectual Property
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  All website content, diet plans, and branding elements are the intellectual property of <strong>DietFiniti LLP</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Unauthorized reproduction, redistribution, or publication is prohibited.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                7. Liability
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-semibold mb-2">
                  DietFiniti shall not be held responsible for:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Any indirect, incidental, or consequential damages arising from service use.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Any health outcomes resulting from client deviation from prescribed plans.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Third-Party Links */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                8. Third-Party Links
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  Our website may include links to third-party sites. We are not responsible for their content or privacy practices.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Governing Law */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold min-w-[100px] text-center">
                9. Governing Law
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of <strong>India</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  In case of any dispute, the exclusive jurisdiction shall lie with the competent courts of <strong>Thane, Maharashtra</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 rounded-xl p-6 mt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Questions or Concerns?
              </h3>
              <p className="text-gray-600 mb-4">
                For any concern or clarification regarding these Terms & Conditions, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:dietfiniti@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  📧 dietfiniti@gmail.com
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
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

export default TermsConditions;