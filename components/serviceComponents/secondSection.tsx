import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Order = () => {
  return (
    <section className="flex flex-col md:flex-row lg:px-2 xl:px-20 gap-8 md:items-center md:text-left bg-gray-800 text-white">
      <div className="lg:w-1/2 sm:w-full space-y-5 px-10 py-10 max-w-[1200px]">
        <h2 className="text-[26px] lg:text-[32px] font-bold">
          EbookWritingStudio Offers the{' '}
          <span className="text-red-500">Best Ebook Publishing Services</span>{' '}
          in USA & Beyond!
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          Ready to make your ebook a global sensation? With our ebook
          publication and distribution services, your masterpiece reaches
          readers worldwide—across platforms like Amazon, Apple Books, and
          Google Play. So if you&apos;re looking for ebook publishing services
          to buy online, we&apos;ve got the expertise to position your book in
          front of millions, boosting visibility and maximizing sales potential.
        </p>
        <button className="text-red-500 border-4 border-red-500 text-2xl font-bold hover:text-white hover:bg-red-500 rounded-lg flex items-center gap-2 px-6 py-2">
          ORDER NOW <FaArrowRightLong />
        </button>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center ">
        <Image
          src="/book_read.png"
          alt=""
          height={500}
          width={500}
          className="w-[300px] lg:w-[500px]"
        />
      </div>
    </section>
  );
};

export default Order;
