import Image from 'next/image';
import React from 'react';

const Story = () => {
  return (
    <div className="relative flex h-[300px] bg-black items-center justify-center">
      <Image
        src="/books-bg.png"
        alt=""
        fill
        className="object-cover"
      />

      <div className="relative z-10 p-10 text-center space-y-5">
        <h2 className="text-red-500  font-bold text-[26px] lg:text-[28px]">Publish Your Ebook for Less!</h2>
        <h3 className='text-white text-[22px] lg:text-[24px]'>Publish Your Ebook for Less!</h3>
        <p className='text-white text-[14px] lg:text-[16px]'>
          Call Us 1-254-964-9543
        </p>
        <button className='text-white bg-red-600 hover:opacity-55 rounded-lg py-2 px-10'>Get Started</button>
      </div>
    </div>
  );
};

export default Story;
