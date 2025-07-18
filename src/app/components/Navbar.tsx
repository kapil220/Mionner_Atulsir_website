import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-50 shadow-2xl">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-24 py-4 sm:py-0">
          
          {/* LEFT SIDE - Responsive layout */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 border-r-0 sm:border-r border-blue-600 pr-0 sm:pr-2">
                <div className="text-blue-600 font-bold text-2xl sm:text-3xl">SKAT</div>
                <div className="text-blue-600 font-bold text-xs">Investments</div>
              </div>
              <div className="flex items-center">
                <img 
                  src="/logo1.jpg" 
                  alt="AngelOne" 
                  className="h-10 sm:h-12"
                />
              </div>
            </div>
            <div className="text-blue-600 text-xs sm:text-sm px-1 font-extrabold py-1 rounded">
              ASSOCIATE PARTNER
            </div>
          </div>

          {/* RIGHT SIDE - Button with responsive sizing */}
          <div className="mt-4 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
            <a 
              href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base inline-block w-full sm:w-auto"
            >
              Open Free Demat Account
            </a>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;