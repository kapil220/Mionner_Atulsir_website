import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <main className="max-w-8xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Centered */}
          <div className="flex flex-col justify-center space-y-6 px-4 pl-28">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Effortless Investing — Open Your Free Demat Account in Just 4 Easy Steps!
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Say goodbye to paperwork and confusion. Our seamless process makes opening your Demat account simple and fast — ideal for beginners and busy investors alike.
            </p>

            <div className="">
  <a 
    href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-sm inline-block"
  >
    Open Free Demat Account
  </a>
</div>

            <p className="text-gray-600">
              Start your investment journey today with confidence and ease!
            </p>
          </div>

          {/* Right Content - Trading Interface with Background Colors covering entire right half */}
          <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background Color Shapes - Covering entire right half */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-400 rounded-full opacity-70"></div>
            <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-purple-500 rounded-full opacity-65"></div>
            <div className="absolute bottom-0 -right-20 w-[350px] h-[350px] bg-yellow-400 rounded-full opacity-75"></div>

            {/* Main Trading Interface Image */}
            <div className="relative z-10">
              <img 
                src="/1.webp" 
                alt="Trading Platform Interface" 
                className="rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;