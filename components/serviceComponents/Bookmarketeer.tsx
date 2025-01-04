import Image from 'next/image';
import React from 'react';

const Bookmarketeer = () => {
  return (
    <div className="bg-white py-16 px-4 xl:px-32 lg:px-6 text-[#a8e5fd] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[700px]">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#010405] leading-tight w-full xl:max-w-[600px]">
          Why We’re the Leading Choice Among{' '}
          <span className="text-red-500">Ebook Publishing Websites</span>
        </h2>

        <p className="text-[14px] lg:text-[16px] text-black pt-5">
          Choosing the right platform for publishing your ebook can be a
          game-changer for its success. Our approach is rooted in understanding
          the ever-evolving digital landscape and the unique needs of authors
          and creators. The ebook market is booming, and standing out in this
          competitive space requires a strategic, delicate route. With a vast
          knowledge of the industry, we ensure that your ebook isn&apos;t just
          another book on a shelf—it becomes a key player in the market.
        </p>

        <p className="text-black text-[14px] lg:text-[16px] pt-5">
          The combination of expert knowledge, innovative publishing methods,
          and an ever-expanding global network makes us a trusted partner for
          authors looking to make their mark. Whether you&apos;re a first-time
          author or a seasoned pro, our platform offers the tools, insights, and
          distribution strategies to take your ebook beyond just publication. We
          aim for your ebook to succeed, generate buzz, and stay relevant to the
          ever-changing readers&apos; preferences.
        </p>
      </div>

      <div className=" mt-4 ml-10 sm:ml-32 md:ml-52 lg:ml-8">
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
