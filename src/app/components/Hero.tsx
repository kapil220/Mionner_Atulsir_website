import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-12 lg:py-0">
          {/* Left Content - Responsive adjustments */}
          <div className="flex flex-col justify-center space-y-4 lg:space-y-6 px-0 lg:pl-12 xl:pl-28 order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight">
              Welcome to Effortless Investing — Open Your Free Demat Account in Just 4 Easy Steps!
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Say goodbye to paperwork and confusion. Our seamless process makes opening your Demat account simple and fast — ideal for beginners and busy investors alike.
            </p>

            <div className="pt-2">
              <a 
                href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base inline-block w-full sm:w-auto text-center"
              >
                Open Free Demat Account
              </a>
            </div>

            <p className="text-sm sm:text-base text-gray-600">
              Start your investment journey today with confidence and ease!
            </p>
          </div>

          {/* Right Content - Responsive adjustments */}
          <div className="relative flex items-center justify-center h-64 sm:h-80 md:h-96 lg:min-h-screen overflow-hidden order-2 lg:order-2 mb-8 lg:mb-0">
            {/* Background Color Shapes - Responsive sizing */}
            <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-green-400 rounded-full opacity-70"></div>
            <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-48 h-48 sm:w-[400px] sm:h-[400px] bg-blue-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-56 h-56 sm:w-[450px] sm:h-[450px] bg-purple-500 rounded-full opacity-65"></div>
            <div className="absolute bottom-0 -right-12 sm:-right-20 w-40 h-40 sm:w-[350px] sm:h-[350px] bg-yellow-400 rounded-full opacity-75"></div>

            {/* Main Trading Interface Image */}
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img 
                src="/1.webp" 
                alt="Trading Platform Interface" 
                className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;