import React from 'react';

const FindDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image Container */}
          <div className="relative w-full h-96  rounded-lg flex items-center justify-center">
            {/* Placeholder for your image */}
            <div className=" text-center px-12">
              <img 
                src="/3.webp" 
                alt="Find Details Placeholder" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Content - Seamless Investing */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Seamless Investing</h1>
            
            <p className="text-gray-600 text-lg mb-8  leading-relaxed">
              Experience seamless investing with Angel One. Access the industry's best tools and expert insights to achieve your financial goals.
            </p>
            
            <div className="space-y-4">
              <div className=" rounded-xl p-6 border-l-4 border-blue-500 hover:border-blue-700 bg-slate-200 hover:bg-slate-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Zero Commission on Mutual Fund Investments/SIPs</h3>
                <p className="text-gray-600">
                  Enjoy the compounding returns of mutual funds and SIPs, at no additional costs.
                </p>
              </div>

              <div className=" rounded-xl p-6 border-l-4 border-blue-500 hover:border-blue-700 bg-slate-200 hover:bg-slate-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Portfolio Advisory</h3>
                <p className="text-gray-600">
                  Access ready-to-invest, well-researched portfolios built by experts, empowering you to make informed investment decisions.
                </p>
              </div>

              <div className=" rounded-xl p-6 border-l-4 border-blue-500 hover:border-blue-700 bg-slate-200 hover:bg-slate-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Order Placement</h3>
                <p className="text-gray-600">
                  Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an opportunity in the fast-paced world of finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
 <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-200"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Center Content */}
          <div className="relative z-10">
            
            
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Open your free Demat<br />Account Now!
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl">
              Say goodbye to paperwork and confusion. Our seamless process makes opening simple and fast —
            </p>
            
             <div className="">
  <a 
    href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-sm inline-block"
  >
    Get Started
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FindDetails;