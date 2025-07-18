import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-8 sm:py-12 bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              WHY CHOOSE US?
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Easily withdraw funds from anywhere in the world
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              At SKAT Investments, we believe investing should be simple, secure, and accessible to everyone. Whether it&apos;s stocks, mutual funds, IPOs, or insurance — we bring all your investment needs under one trusted platform.
            </p>
            
            <ul className="space-y-3 sm:space-y-4">
              {[
                "Transparent Pricing — No Hidden Fees",
                "Easy Onboarding — ₹0 Account Opening Charges",
                "Cost-Effective Investments",
                "Secure & Reliable Platform",
                "Real-Time Portfolio Tracking"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="order-1 lg:order-2 relative">
            <img 
              src="/2.webp" 
              alt="Dashboard preview" 
              className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full transform rotate-1 hover:rotate-0 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhyChooseUs;