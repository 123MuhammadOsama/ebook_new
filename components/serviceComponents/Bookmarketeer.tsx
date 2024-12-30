import Image from 'next/image';
import React from 'react';

const Bookmarketeer = () => {
  return (
    <div className="bg-white py-16 px-4 xl:px-32 lg:px-6 text-[#a8e5fd] flex ">
      <div className="w-full lg:w-[700px]">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#010405] leading-tight max-w-[600px]">
          We always choose the perfect{' '}
          <span className="text-red-500">Bookmarketeer</span> for your desired
          book genre
        </h2>
        <div className="flex text-black pt-5">
          <p className="text-5xl pr-2 ">A</p>
          <p className="text-[14px] lg:text-[16px]">
            re you struggling to translate your feelings into words? Do you have
            a book storyline, so you&apos;re not sure how to follow it?
          </p>
        </div>
        <p className="text-black text-[14px] lg:text-[16px]">
          Are you too busy to finish your long-due but the unfinished manuscript
          and publish it? Let us take care of everything and provide you with
          our exceptional book writing services.
        </p>
        <p className="text-black text-[14px] lg:text-[16px] pt-5">
          As they have expertise from varied academic backgrounds, including
          industry, the arts, sciences, technology, advertising, communications,
          social sciences, and engineering, our talented writers&apos; team
          enjoys the skills needed in multi-faceted genres. This diversified
          pool of talent helps us specialize in diverse genres to fulfill
          clients&apos; writing demands from various sectors and technical
          realms. The professional writing team anticipates listening to your
          creative ideas to produce excellently written content so that your
          doubtfulness is cleared out of the way. We always try our best to stay
          committed to generating profit-making content fulfilling your
          respective commercial targets.
        </p>
      </div>

      <div className="hidden lg:block mt-40 xl:mt-32 2xl:mt-28 ml-5 xl:ml-20 2xl:ml-32">
        <Image
          src="/Mask_group.png"
          alt="bookmarketeer"
          height={1000}
          width={1000}
          className="h-[300px] w-auto xl:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Bookmarketeer;
