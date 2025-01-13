import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Order = () => {
  return (
    <section className="flex flex-col md:flex-row lg:px-2 xl:px-20 gap-8 md:items-center md:text-left bg-black text-white">
      <div className="lg:w-1/2 sm:w-full space-y-5 px-10 py-10 max-w-[1200px]">
        <h2 className="text-[26px] lg:text-[28px] font-bold">
          Customized{' '}
          <span className="text-red-500"> Ebook Ghost Writing Services</span>{' '}
          for Every Genre
        </h2>
        <p className="text-[14px] lg:text-[16px]">
          From heartfelt romance to mysterious thrillers, spine-chilling horrors
          to side-splitting comedy blusters and insightful business to self-help
          guides, we cover it all. Each project is customized to bring depth and
          appeal, making your ebook memorable and impactful. Our writers are
          skilled at adapting to various styles, conducting thorough research,
          and understanding your target audience to create a story that
          resonates.
        </p>
        <button className="text-red-500 border-2 border-red-500 text-xl font-bold hover:text-white hover:bg-red-500 rounded-lg flex items-center gap-2 px-6 py-2">
          ORDER NOW <FaArrowRightLong />
        </button>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center ">
        <Image
          src="/book_read.png"
          alt="Ebook Ghost Writing Services"
          height={500}
          width={500}
          className="w-[300px] lg:w-[500px] h-auto"
        />
      </div>
    </section>
  );
};

export default Order;
