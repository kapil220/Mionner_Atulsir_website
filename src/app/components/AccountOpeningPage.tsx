"use client";
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const AccountOpeningPage = () => {
  return (
    <div className="py-12 sm:py-24 bg-gray-50">
      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left - Form Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 mx-auto w-full lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Your One-Stop Investment Platform
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8">
              A trusted partner with 25 years of experience
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://www.angelone.in/signup/register?rne_source=B2B_NXT&btype=VkFQ&referrer=AFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&source_caller=api&pid=NXT&SbTag=QUZEVA%3D%3D&deep_link_value=referrer%3DAFDT%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DVkFQ&c=nxt_campaign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-center"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center p-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">₹0</div>
                <div className="text-xs text-gray-600">Account Opening Charges</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">3Cr+</div>
                <div className="text-xs text-gray-600">Users</div>
              </div>
              <div className="text-center p-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">₹0</div>
                <div className="text-xs text-gray-600">AMC for the 1st year</div>
              </div>
              <div className="col-span-2 sm:col-span-1 border-gray-200 flex items-center justify-center space-x-2 sm:space-x-4 p-2">
                <div className="bg-white p-1 sm:p-2 rounded-lg border">
                  <QRCodeSVG 
                    value="https://a.aonelink.in/ANGOne/AqEVyIL" 
                    size={60} 
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-gray-900">
                    Scan the QR Code to
                  </div>
                  <div className="text-2xs sm:text-xs text-gray-600">
                    Login/Register from your mobile
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image with Description Overlay */}
          <div className="rounded-xl sm:rounded-2xl relative overflow-hidden lg:col-span-2 h-64 sm:h-80 md:h-96 lg:h-auto">
            <img 
              src="/men.webp" 
              alt="Professional person" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountOpeningPage;