import React from 'react';

const FindDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content - Image Container */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/3.webp" 
                alt="Investment dashboard" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content - Seamless Investing */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Seamless Investing
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience seamless investing with Angel One. Access the industry&apos;s best tools and expert insights to achieve your financial goals.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  title: "Zero Commission on Mutual Fund Investments/SIPs",
                  description: "Enjoy the compounding returns of mutual funds and SIPs, at no additional costs."
                },
                {
                  title: "Portfolio Advisory",
                  description: "Access ready-to-invest, well-researched portfolios built by experts."
                },
                {
                  title: "24/7 Order Placement",
                  description: "Place buy/sell orders anytime so you never miss an opportunity."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 border-l-4 border-blue-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gray-200 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Open your free Demat Account Now!
          </h2>
          
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Say goodbye to paperwork and confusion. Our seamless process makes opening simple and fast.
          </p>
          
          <a 
            href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default FindDetails;