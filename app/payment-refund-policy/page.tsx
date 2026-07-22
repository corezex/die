// app/payment-refund-policy/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Shield, Mail, Banknote, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment & Refund Policy | DietFiniti",
  description: "Learn about DietFiniti's payment methods, refund policy, cancellation terms, and billing procedures. Secure transactions guaranteed.",
  alternates: { canonical: "/payment-refund-policy" },
};

const PaymentRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl">💳</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Payment & Refund Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear and transparent payment terms for your peace of mind. Secure transactions with fair refund policies.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8">
          {/* Section 1: Payment Methods */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Banknote className="w-6 h-6 mr-3 text-purple-600" />
                  Payment Methods
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Online Payments */}
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="font-semibold text-purple-800 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Online Payments
                    </h3>
                    <ul className="space-y-3">
                      {["Razorpay", "PayU", "Instamojo"].map((method, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mr-3" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other Payment Methods */}
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="font-semibold text-indigo-800 mb-4 flex items-center">
                      <Banknote className="w-5 h-5 mr-2" />
                      Other Methods
                    </h3>
                    <ul className="space-y-3">
                      {["UPI / Bank Transfer", "Cash"].map((method, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mr-3" />
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-800 text-sm flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <strong>All transactions are processed securely</strong> using industry-standard encryption and compliance protocols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Payment Terms */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Payment Terms
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700">
                      <strong>Payment is required in full</strong> before the commencement of the program.
                    </p>
                  </div>
                  <div className="flex items-start bg-blue-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700">
                      <strong>Subscriptions or consultation bookings are confirmed</strong> only after successful payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Refund Policy */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-purple-600" />
                  Refund Policy
                </h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6">
                  <p className="text-yellow-800 text-center font-semibold">
                    We believe in transparent and fair dealings
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 24-Hour Refund */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-green-800">24-Hour Refund</h3>
                    </div>
                    <p className="text-green-700 text-sm">
                      <strong>100% refund (no questions asked)</strong> is available within 24 hours of payment.
                    </p>
                  </div>

                  {/* After 24 Hours */}
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold text-orange-800">After 24 Hours</h3>
                    </div>
                    <div className="text-orange-700 text-sm space-y-2">
                      <p><strong>No refunds will be issued;</strong> however, clients may:</p>
                      <p>• Postpone or hold their program for up to 30 days</p>
                      <p>• <strong>Program cannot be transferred</strong> to another person</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Cancellation */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-purple-600" />
                  Cancellation
                </h2>
                <div className="bg-purple-50 rounded-xl p-6">
                  <p className="text-purple-800 mb-4">
                    To request cancellation or refund, contact us within the 24-hour period:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700"><strong>Email:</strong> dietfiniti@gmail.com</p>
                    <p className="text-gray-700"><strong>Include:</strong> Your payment details and registered email</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Program Validity */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-purple-600" />
                  Program Validity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start bg-indigo-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700">
                      <strong>Deferred or postponed programs</strong> must commence within 30 days from the original purchase date.
                    </p>
                  </div>
                  <div className="flex items-start bg-indigo-50 rounded-xl p-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-700">
                      <strong>After 30 days,</strong> the payment and program access will expire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Billing Errors */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                6
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Billing Errors
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-red-800 mb-3">
                    In case of any payment or transaction error, please notify us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-700"><strong>Timeframe:</strong> Within 3 business days</p>
                    <p className="text-red-700"><strong>Contact:</strong> dietfiniti@gmail.com</p>
                    <p className="text-red-700"><strong>Action:</strong> Prompt resolution guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Jurisdiction */}
          <section className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-800 rounded-xl px-4 py-2 text-lg font-bold min-w-[60px] text-center">
                7
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Jurisdiction
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700">
                    All financial and transactional matters are governed by the laws of <strong>India</strong>, and any disputes shall be subject to the exclusive jurisdiction of <strong>Thane, Maharashtra</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Policy Summary</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">24h</div>
                <div className="text-sm">Full Refund Period</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">30d</div>
                <div className="text-sm">Program Postponement</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">3d</div>
                <div className="text-sm">Billing Error Reporting</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Need Help with Payments?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team is here to assist you with any payment-related questions or concerns. Quick resolution guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:dietfiniti@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
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

export default PaymentRefundPolicy;