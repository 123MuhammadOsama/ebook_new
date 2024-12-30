import React from "react";

const FifthSection = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-12 md:mt-4 gap-10 md:gap-20 items-center justify-center md:px-0 bg-[#f8f8f7] py-1">
      {/* Text Content */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center">
        <div className="max-w-full lg:max-w-5xl mb-4">
          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-bold text-[#000000] leading-tight">
          Trust Us to 
          <span className="text-red-500"> Showcase Your Ebook at </span>{" "}
            <span className="text-black-500">
            Its Absolute Best
            </span>
          </h1>

          <div className="flex flex-wrap justify-center space-x-4 mt-6">
            {/* Contact Consultant Button */}
            <button className="flex items-center px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 mt-4 sm:mt-0">
              Contact Consultant
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            {/* View Pricing Button */}
            <button className="flex items-center px-5 py-2 bg-white text-red-500 font-semibold rounded-md border border-red-500 hover:bg-red-50 mt-4 sm:mt-0">
              View Pricing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
