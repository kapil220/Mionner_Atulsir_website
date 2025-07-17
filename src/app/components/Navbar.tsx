import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-gray-50 shadow-2xl">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 ">
          
          {/* LEFT SIDE - COMPLETELY UNCHANGED */}
          <div className="flex-row items-center space-x-4 py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-row items-center space-x-2 border-r border-blue-600 pr-2">
                <div className="text-blue-600 font-bold text-3xl">SKAT</div>
                <div className="text-blue-600 font-bold text-xs">Investments</div>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo1.jpg" 
                  alt="AngelOne" 
                  className="h-12"
                />
              </div>
            </div>
            <div className="text-blue-600 text-sm px-1 font-extrabold py-1 rounded">
              ASSOCIATE PARTNER
            </div>
          </div>

          {/* RIGHT SIDE - ONLY THE BUTTON PUSHED TO FAR RIGHT */}
          <div className="ml-auto">
  <a 
    href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-sm inline-block"
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