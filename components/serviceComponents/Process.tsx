import Image from 'next/image';
import React from 'react';
import { GiArchiveResearch } from 'react-icons/gi';

const Process = () => {
  return (
    <div className="py-10">
      <p className="text-[32px] font-bold text-center">
        Our <span className="text-red-500">Process</span> - Where Ideas Meet
        Execution
      </p>
      <div className="px-2 md:px-4 lg:px-4 xl:px-10 2xl:px-20 pt-5">
        {/* Process Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          {' '}
          {/* Decreased gap to 5 */}
          {/* Left Aside */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            {' '}
            {/* Adjusted inner gap */}
            <div>
              <p className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Concept & Strategy Meeting
                </span>
              </p>
              <p className="text-[14px] lg:text-[16px]">
                This step sets the stage for a seamless creative process, making
                sure every word, chapter, and design reflects your aspirations
                perfectly. Whether it’s a rough idea or a full outline, we map
                out your goals, audience, and tone to create a structured plan.
                You’ll have a roadmap that aligns with your expectations.
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  The Research & Writing
                </span>
              </p>
              <p className="text-[14px] lg:text-[16px]">
                This is where your idea comes alive. Our expert ghostwriters dig
                into extensive research, ensuring accuracy and relevance. Using
                your inputs and our expertise, we write compelling content
                custom to your audience and genre. From fiction to non-fiction,
                every word is carefully chosen to resonate. Regular updates keep
                you in the loop.
              </p>
            </div>
          </div>
          {/* Center Image */}
          <div className="flex-shrink-0">
            <Image
              src="/asdas.png"
              alt="rosalind"
              height={1000}
              width={500}
              className=" h-[500px] w-[400px]"
            />
          </div>
          {/* Right Aside */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            {' '}
            {/* Adjusted inner gap */}
            <div>
              <p className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Professional Editing & Design
                </span>
              </p>
              <p className="text-[14px] lg:text-[16px]">
                Perfection lies in the details, and this step is all about
                refining. Our editors keenly polish your manuscript for grammar,
                tone, and flow. Simultaneously, our designers craft a stunning,
                eye-catching cover and format the ebook for readability. We
                ensure your final product is ready to make a powerful impact on
                readers everywhere.
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Publishing & Distribution
                </span>
              </p>
              <p className="text-[14px] lg:text-[16px]">
                As a trusted provider of low cost yet best ebook publisher
                services in USA, we ensure your polished ebook has a flawless
                debut on major platforms like Amazon and niche retailers. We
                optimize metadata, ensure proper formatting, and handle all the
                technical details. Your story reaches a global audience with
                ease. Sit back as we handle the publishing logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
