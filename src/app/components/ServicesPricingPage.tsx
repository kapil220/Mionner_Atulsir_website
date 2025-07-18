import React from 'react';

const ServicesPricingPage = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Equity (Stocks)",
      description: "Trade shares instantly with real-time access to market data, trends, and powerful tools designed to empower your investment decisions in the Indian stock market."
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Mutual Funds",
      description: "Invest effortlessly in leading mutual funds. Choose between SIP or lump-sum options and leverage user-friendly tools to grow your portfolio steadily."
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "IPO Investments",
      description: "Discover exciting opportunities in upcoming IPOs. Benefit from expert insights and a hassle-free application process to invest confidently in promising new companies."
    }
  ];

  const pricingFeatures = [
    {
      title: "Account Opening Charges",
      price: "₹0",
      bgColor: "bg-purple-100",
      textColor: "text-purple-900"
    },
    {
      title: "Brokerage per order for Equity Delivery, Intraday, F&O, Currencies & Commodities for first 30 days",
      price: "₹0",
      bgColor: "bg-blue-100",
      textColor: "text-blue-900"
    },
    {
      title: "Interest on MTF for first 30 days",
      price: "₹0",
      bgColor: "bg-green-100",
      textColor: "text-green-900"
    },
    {
      title: "Commission for Mutual Funds & IPO Investments",
      price: "₹0",
      bgColor: "bg-orange-100",
      textColor: "text-orange-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Services Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-6 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 sm:mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4 sm:mb-8">
            Transparent Pricing — No Hidden Fees
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8`}>
                <div className="text-center">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${feature.textColor} mb-3 sm:mb-4`}>
                    {feature.price}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {feature.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile App Preview - Only visible on mobile */}
        <div className="fixed bottom-4 right-4 w-14 h-20 sm:w-16 sm:h-24 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden sm:hidden">
          <div className="p-1 sm:p-2">
            <div className="bg-gray-100 rounded mb-1">
              <div className="text-2xs sm:text-xs font-medium text-center py-0.5 sm:py-1">AngelOne</div>
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-blue-500 rounded"></div>
              <div className="h-1 bg-green-500 rounded w-3/4"></div>
              <div className="h-1 bg-red-500 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPricingPage;