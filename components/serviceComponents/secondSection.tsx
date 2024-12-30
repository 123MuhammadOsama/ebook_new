import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Order = () => {
  return (
    <section className='flex flex-col md:flex-row lg:px-2 xl:px-20 gap-8 md:items-center md:text-left bg-gray-800 text-white'>
      
      <div className='lg:w-1/2 sm:w-full space-y-5 px-10 py-10 max-w-[1200px]'>
        <h2 className='text-[26px] lg:text-[32px] font-bold'>Ascend through the Power of Executive <span className='text-red-500'>E-book Creation</span> with bookmarketeers.com</h2>
        <p className='text-[14px] lg:text-[16px]'>When it comes to writing E-Books, we have the highest value for money. Our authors&apos; team consists of people with tremendous knowledge and talents who can write about any particular subject in the most imaginative way. Our main goal will always remain to provide authentic leads that meet our highly valued customers&apos; perspective.</p>
        <button className='text-red-500 border-4 border-red-500 text-2xl font-bold hover:text-white hover:bg-red-500 rounded-lg flex items-center gap-2 px-6 py-2'>
          ORDER NOW <FaArrowRightLong />
        </button>
      </div>
      
      <div className='lg:w-1/2 w-full flex items-center justify-center '>
        <Image
          src="/book_read.png"
          alt=''
          height={500}
          width={500}
          className='w-[300px] lg:w-[500px]'
        />
      </div>

    </section>
  );
}

export default Order;
