// app/privacy-policy/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DietFiniti",
  description: "Learn how DietFiniti collects, uses, and protects your personal information. Understand your privacy rights and data protection measures.",
  alternates: { canonical: "/privacy-policy" },
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl">🔒</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Effective Date */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                DietFiniti by Dietitian Tejal LLP
              </h2>
              <p className="text-blue-800">
                <strong>Operates:</strong> www.dietfiniti.com
              </p>
            </div>
            <div className="text-sm text-blue-700 bg-white/80 rounded-lg px-4 py-2">
              <p><strong>Effective Date:</strong> November 2025</p>
              <p><strong>Last Updated:</strong> November 2025</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            <strong>DietFiniti by Dietitian Tejal LLP</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website www.dietfiniti.com and is committed to protecting the privacy of individuals who visit our website or engage with our services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
          </p>
        </div>

        {/* Privacy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 space-y-12">
          {/* Section 1: Information We Collect */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect the following types of information when you interact with us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Personal Information
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Name and contact details
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Email and phone number
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Gender, age, and health data
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Payment details
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-5">
                    <h3 className="font-semibold text-cyan-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Non-Personal Information
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        Browser type and IP address
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        Device information
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        Usage data through cookies
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        Analytics data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  Your information is used to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Provide personalized diet and nutrition consultations",
                    "Deliver subscription plans and meal recommendations",
                    "Schedule online or phone consultations",
                    "Process payments securely",
                    "Communicate updates, reminders, or feedback surveys",
                    "Improve website functionality and client experience"
                  ].map((use, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-3">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Client Progress & Testimonials */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Client Progress, Testimonials & Results
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    With your consent, we may share before-after results, progress reports, or testimonials on our social media handles, website, and other marketing materials to showcase our success stories.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Identity Protection
                    </h3>
                    <p className="text-green-700 text-sm">
                      Client identities will be protected by blurring faces, hiding names, or removing identifiable details unless the client has expressly agreed to reveal their identity.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                    <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Consent Notice
                    </h3>
                    <p className="text-yellow-700 text-sm">
                      By availing our services, clients acknowledge and agree that anonymized transformation visuals or progress may be used for marketing purposes without objection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Data Protection */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Protection
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We follow strict measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Secure Payment Processing
                    </h3>
                    <p className="text-blue-700 text-sm mb-2">
                      All payment data is handled through secure gateways that comply with PCI-DSS standards:
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Razorpay", "PayU", "UPI Systems"].map((gateway, index) => (
                        <span key={index} className="bg-white px-3 py-1 rounded-lg text-blue-600 text-sm font-medium border border-blue-200">
                          {gateway}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Sharing of Information */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sharing of Information
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>We do not sell, rent, or trade your personal information.</strong> Data may be shared only with:
                </p>
                <div className="grid gap-3">
                  {[
                    "Authorized team members and consultants for service delivery",
                    "Payment gateway providers for transaction processing",
                    "Legal or government authorities when required by law"
                  ].map((share, index) => (
                    <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{share}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Cookies */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses cookies to improve your browsing experience. You can disable cookies in your browser settings if you prefer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Your Rights */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  You may request to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Access or correct your personal data",
                    "Withdraw consent for data usage",
                    "Request deletion of your personal information (as per legal compliance)"
                  ].map((right, index) => (
                    <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-blue-700 text-sm">{right}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-gray-700 text-sm">
                    <strong>For any data-related queries, contact us at:</strong>{' '}
                    <a 
                      href="mailto:dietfiniti@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      dietfiniti@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Updates to This Policy */}
          <section className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                8
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy may be updated periodically. Continued use of our services after any modifications constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Questions About Our Privacy Policy?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We&apos;re here to help you understand how we protect and use your data. Contact us with any questions or concerns about your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dietfiniti@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                📧 Email Us
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                ← Back to Home
              </Link>
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

export default PrivacyPolicy;