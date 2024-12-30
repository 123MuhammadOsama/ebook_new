import Image from 'next/image';
import React from 'react';
import { GiArchiveResearch } from 'react-icons/gi';

const Process = () => {
  return (
    <div className="py-10">
      <h2 className="text-[32px] font-bold text-center">
        Our <span className="text-red-500">Process</span>
      </h2>
      <div className="px-2 md:px-4 lg:px-10 xl:px-20 2xl:px-32">
        {/* uper */}
        <div className="flex flex-col lg:flex-row gap-5 2xl:gap-56 pt-5">
          {/* pehla */}
          <div className="max-w-[800px]">
            <h3 className="flex">
              <GiArchiveResearch className="text-4xl" />{' '}
              <span className="text-[22px] lg:-[24px] font-semibold pl-1">
                Extensive Research along with outlining of the draft
              </span>
            </h3>
            <p className="text-[14px] lg:text-[16px]">
              Our staff contacts the client when the order is dropped and
              addresses every aspect of the plot or premise or whatever the book
              is about. Then the committee calls a meeting to speak to the team
              about the proposal. And when he is sure he can create a
              masterpiece with the concept, the team chooses which writer to
              give the job or the writer volunteers. The drafting process starts
              the very next day, and a writer begins to work on your idea.
            </p>
            <div className="flex justify-center">
              <Image
                src="/Mask_group.png"
                alt="bookmarketeer"
                height={1000}
                width={1000}
              />
            </div>
          </div>

          {/* dosra */}
          <div className="max-w-[800px]">
            <h3 className="flex">
              <GiArchiveResearch className="text-4xl" />{' '}
              <span className="text-[22px] lg:-[24px] font-semibold pl-1">
                Extensive Research along with outlining of the draft
              </span>
            </h3>
            <p className="text-[14px] lg:text-[16px]">
              Our staff contacts the client when the order is dropped and
              addresses every aspect of the plot or premise or whatever the book
              is about. Then the committee calls a meeting to speak to the team
              about the proposal. And when he is sure he can create a
              masterpiece with the concept, the team chooses which writer to
              give the job or the writer volunteers. The drafting process starts
              the very next day, and a writer begins to work on your idea.
            </p>
            <div className="flex justify-center">
              <Image
                src="/Mask_group.png"
                alt="bookmarketeer"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>

        {/* nichee */}
        <div className="flex flex-col lg:flex-row gap-5 2xl:gap-56 pt-5">
          {/* pehla */}
          <div className="max-w-[800px]">
            <h3 className="flex">
              <GiArchiveResearch className="text-4xl" />{' '}
              <span className="text-[22px] lg:-[24px] font-semibold pl-1">
                Extensive Research along with outlining of the draft
              </span>
            </h3>
            <p className="text-[14px] lg:text-[16px]">
              Our staff contacts the client when the order is dropped and
              addresses every aspect of the plot or premise or whatever the book
              is about. Then the committee calls a meeting to speak to the team
              about the proposal. And when he is sure he can create a
              masterpiece with the concept, the team chooses which writer to
              give the job or the writer volunteers. The drafting process starts
              the very next day, and a writer begins to work on your idea.
            </p>
            <div className="flex justify-center">
              <Image
                src="/Mask_group.png"
                alt="bookmarketeer"
                height={1000}
                width={1000}
              />
            </div>
          </div>

          {/* dosra */}
          <div className="max-w-[800px]">
            <h3 className="flex">
              <GiArchiveResearch className="text-4xl" />{' '}
              <span className="text-[22px] lg:-[24px] font-semibold pl-1">
                Extensive Research along with outlining of the draft
              </span>
            </h3>
            <p className="text-[14px] lg:text-[16px]">
              Our staff contacts the client when the order is dropped and
              addresses every aspect of the plot or premise or whatever the book
              is about. Then the committee calls a meeting to speak to the team
              about the proposal. And when he is sure he can create a
              masterpiece with the concept, the team chooses which writer to
              give the job or the writer volunteers. The drafting process starts
              the very next day, and a writer begins to work on your idea.
            </p>
            <div className="flex justify-center">
              <Image
                src="/Mask_group.png"
                alt="bookmarketeer"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
