import Image from 'next/image';
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';

const Process = () => {
  return (
    <div className="px-4 md:px-10 xl:px-4 2xl:px-5 py-32 space-y-10">
      <div className="w-full md:w-1/2 mx-auto text-center">
        <h2 className="text-[32px] lg:text-[36px] font-bold pb-5">
          Approach to Deliver the{' '}
          <span className="text-red-500">Best Ebook Ghostwriting Services</span>
        </h2>
        <p className="text-[14px] lg:text-[16px] pb-10">
          At our USA&apos;s leading ebook writing agency, we follow a
          streamlined process that ensures each step meets your vision and
          maintains industry standards. Here’s how our approach works to deliver
          a seamless, engaging ebook that resonates with readers and stands out
          in the marketplace.
        </p>
      </div>

      {/* Centered Layout with Flex */}
      <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-10 lg:gap-32 xl:gap-0 ">
        {/* Left Column Cards */}
        <div className="space-y-10 flex-1 max-w-[300px]">
          {/* Card 1 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Initial Chat</span> & Order
                  Placement
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  We start with a friendly chat to understand your ebook’s
                  purpose, genre, and goals. Then, we provide a customized quote
                  and get started after the initial payment.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Consultation</span> & Planning
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  In a detailed consultation, we outline your ebook’s structure,
                  tone, and content objectives. This planning phase helps us
                  capture your unique voice and vision accurately.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Market Research &</span> Niche
                  Analysis
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  We conduct in-depth market research and audience analysis to
                  enhance your ebook’s relevance and appeal. Your content will
                  fit seamlessly into the targeted niche.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="xl:flex items-center justify-center hidden px-0 w-[700px] 2xl:w-[1000px]">
          <Image
            src="/center-image.png"
            alt="Center Image"
            height={1500}
            width={1500}
            className="w-auto h-auto"
          />
        </div>

        {/* Right Column Cards */}
        <div className="space-y-10 flex-1 max-w-[300px]">
          {/* Card 4 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Writing, Designing</span>&
                  Refining
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  Our team writes, designs, and refines each part of your ebook.
                  Every detail is crafted to hook readers, ensuring perfection
                  and guaranteeing the most optimum results.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Formatting for</span> Multiple
                  Platforms
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  We format your ebook for platforms like Kindle and Apple
                  Books, ensuring it looks fit on all devices and offers a
                  hassle-free reading experience with zero glitches.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center">
            <div className="flex gap-4 items-center  max-h-full">
              <h3 className="font-bold text-[20px] lg:text-[22px] xl:text-[20px]">
                <CiBookmarkCheck />
              </h3>
              <div className="flex flex-col max-h-full ">
                <h3 className="font-bold text-[18px] lg:text-[20px] xl:text-[18px] leading-snug">
                  <span className="text-red-500">Post-Launch Support</span> &
                  Feedback
                </h3>
                <p className="text-[12px] lg:text-[14px] xl:text-[12px] leading-tight mt-2">
                  Post-launch, our team is available for support, feedback
                  collection, and updates. We’re committed to maximizing your
                  ebook’s success beyond creation & publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
