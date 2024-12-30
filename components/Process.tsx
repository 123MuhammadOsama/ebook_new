import Image from 'next/image';
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';

const Process = () => {
  return (
    <div className='px-4 md:px-10 xl:px-0 2xl:px-10 py-32 space-y-10'>
      <div className="w-full md:w-1/2 mx-auto text-center">
        <h2 className="text-[32px] lg:text-[36px] font-bold pb-5">
          Approach to Deliver the <span className="text-red-500">Best Ebook Ghostwriting Services</span>
        </h2>
        <p className="text-[14px] lg:text-[16px] pb-10">
          At our USA&apos;s leading ebook writing agency, we follow a streamlined process that ensures each step meets your vision and maintains industry standards. Here’s how our approach works to deliver a seamless, engaging ebook that resonates with readers and stands out in the marketplace.
        </p>
      </div>

      {/* Centered Grid layout for cards and image */}
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-48 2xl:gap-[300px] '>
          {/* Left Column Cards */}
          <div className='space-y-10'>
            {/* Card 1 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Initial Chat</span> & Order Placement</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    We start with a friendly chat to understand your ebook’s purpose, genre, and goals. Then, we provide a customized quote and get started after the initial payment.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Consultation</span> & Planning</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    In a detailed consultation, we outline your ebook’s structure, tone, and content objectives. This planning phase helps us capture your unique voice and vision accurately.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Market Research &</span> Niche Analysis</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    We conduct in-depth market research and audience analysis to enhance your ebook’s relevance and appeal. Your content will fit seamlessly into the targeted niche.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className='hidden xl:block mt-10'>
          <Image
  src="/center-image.png"
  alt="Center Image"
  height={1000}
  width={1000}
  className='absolute left-[40px] xl:left-[150px] 2xl:left-[210px] h-[600px] xl:h-[700px] 2xl:h-[800px] w-auto object-contain transition-all duration-300 ease-in-out'
/>

          </div>

          {/* Right Column Cards */}
          <div className='space-y-10'>
            {/* Card 4 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Writing, Designing</span>& Refining</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    Our team writes, designs, and refines each part of your ebook. Every detail is crafted to hook readers, ensuring perfection and guaranteeing the most optimum results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Formatting for</span> Multiple Platforms</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    We format your ebook for platforms like Kindle and Apple Books, ensuring it looks fit on all devices and offers a hassle-free reading experience with zero glitches.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className='bg-black text-white px-4 py-8 w-full h-[250px] flex items-center justify-center max-w-96 xl:max-w-80'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-bold text-[22px] lg:text-[24px]'><CiBookmarkCheck /></h3>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-[22px] lg:text-[24px]'><span className='text-red-500'>Post-Launch Support</span> & Feedback</h3>
                  <p className='text-[14px] lg:text-[16px]'>
                    Post-launch, our team is available for support, feedback collection, and updates. We’re committed to maximizing your ebook’s success beyond creation & publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
