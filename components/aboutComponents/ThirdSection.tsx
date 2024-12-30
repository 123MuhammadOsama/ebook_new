
import Image from 'next/image';
import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col lg:flex-row flex-wrap md:mt-12 gap-10 md:gap-20 items-center justify-center px-4 md:px-0 bg-[#1f1d1d] min-h-[150px] py-4">

      {/* Text Content */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 md:p-10">
        <div className="max-w-full lg:max-w-5xl">

          <h2 className="xl:text-[50px] text-[32px] md:text-[36px] font-bold text-white leading-tight lg:text-[24px] mt-0 ml-4">
          Let's Turn Your Ebook Into a Page-Turning Sensation

          </h2>

          <p className="text-white mt-4 py-4 text-[14px] lg:text-[20px] ml-8">
          Place your order now to make your Ebook a crowd-puller with stunning designs, striking words, and a flawless finish that commands attention.

          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 ml-8">
              Contact Consultant
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="flex items-center px-6 py-3 bg-transparent text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-50">
              View Pricing
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

          </div>
        </div>

        
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-4 ">
        <div className="w-full max-w-[600px]">
          <Image
            src="/Mask_group.png"
            alt="writing"
            layout="responsive"
            width={700}
            height={100}
            
            title="writing"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
