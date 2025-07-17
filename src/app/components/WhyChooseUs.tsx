import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-gray-50">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              WHY CHOOSE US?
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Easily withdraw funds from anywhere in the world
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At SKAT Investments, we believe investing should be simple, secure, and accessible to everyone. Whether it's stocks, mutual funds, IPOs, or insurance — we bring all your investment needs under one trusted platform.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Transparent Pricing — No Hidden Fees</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Easy Onboarding — ₹0 Account Opening Charges</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Cost-Effective Investments</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Secure & Reliable Platform</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">Real-Time Portfolio Tracking</span>
              </li>
            </ul>
          </div>

          {/* Right Content - Dashboard Preview */}
<div className="relative">
  <img 
    src="/2.webp" 
    alt="Dashboard preview" 
    className="rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
  />
</div>
        </div>
      </main>

  
    </div>
  );
};

export default WhyChooseUs;