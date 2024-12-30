'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-black px-8 sm:px-4 lg:px-8 xl:px-32 2xl:px-20 py-10 lg:py-20 2xl:py-24'>
      {/* Text */}
      <div className='lg:py-10 flex-1'>
        <h2 className='text-white font-bold max-w-[400px] text-[34px] lg:text-[36px]'>
        We&apos;re Ready Whenever You Are <motion.span
            animate={{
              rotate: [-20, 20],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut", 
            }}
            style={{ display: "inline-block" }}
          >
            👋
          </motion.span>

        </h2>
        <p className='text-white text-[14px] lg:text-[16px] pt-6 lg:pt-10 2xl:pt-8 max-w-[700px]'>
        Our team of expert writers, designers, and marketers is available at your service 24/7. Connect with us today to discuss your ideas and launch your ebook with confidence! 

        </p>
      </div>

      {/* Form */}
      <div className='flex justify-start items-start lg:justify-center lg:items-center flex-1 mt-4 lg:mt-0 lg:mb-20 2xl:mb-0'>
        <form className='w-full max-w-lg 2xl:max-w-6xl 2xl:px-0'>
          <div className="flex flex-col lg:flex-row gap-4 mb-4 2xl:gap-6">
            <div className="relative group flex-1">
              <input
                className="w-full bg-transparent text-white border-4 border-white rounded-xl py-3 px-4 2xl:py-5 2xl:px-6 hover:border-teal-400 focus:border-teal-400 focus:outline-none transition duration-300 ease-in-out peer"
                id="name"
                type="text"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 2xl:left-6 2xl:top-3 text-white transition-all duration-300 transform -translate-y-1 scale-100
                 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-black peer-focus:text-teal-400
                    group-hover:text-teal-400 group-hover:bg-black"
              >
                Name 
              </label>
            </div>

            <div className="relative group flex-1">
              <input
                className="w-full bg-transparent text-white border-4 border-white rounded-xl py-3 px-4 2xl:py-5 2xl:px-6 hover:border-teal-400 focus:border-teal-400 focus:outline-none transition duration-300 ease-in-out peer"
                id="phone"
                type="text"
                required
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 2xl:left-6 2xl:top-3 text-white transition-all duration-300 transform -translate-y-1 scale-100 
                pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-black peer-focus:text-teal-400 group-hover:text-teal-400 group-hover:bg-black"
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className='mt-8 relative group'>
            <textarea
              id="message"
              name="message"
              className="w-full py-10 2xl:py-12 bg-transparent text-white border-4 border-white rounded-xl px-4 2xl:px-6
               hover:border-teal-400 focus:border-teal-400 focus:outline-none transition duration-300 ease-in-out peer"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-16 2xl:left-6 2xl:top-30 text-white transition-all duration-300 transform -translate-y-1 scale-100 
                peer-focus:-translate-y-20 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:bg-black
                group-hover:text-teal-400 group-hover:bg-black"
            >
              Message
            </label>

            <button className='flex text-white text-2xl border-4 border-white rounded-xl mt-8 p-4 2xl:py-6 2xl:px-8 hover:bg-red-500 hover:border-red-500'>
              REQUEST A CALL <FaArrowRightLong className='ml-2 mt-1' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;