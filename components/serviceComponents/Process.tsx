import Image from 'next/image';
import React from 'react';
import { GiArchiveResearch } from 'react-icons/gi';

const Process = () => {
  return (
    <div className="py-10">
      <h2 className="text-[32px] font-bold text-center">
        Our <span className="text-red-500">Process</span>
      </h2>
      <div className="px-2 md:px-4 lg:px-10 xl:px-20 2xl:px-20 pt-5">
        {/* Process Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-5">
          {' '}
          {/* Decreased gap to 5 */}
          {/* Left Aside */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            {' '}
            {/* Adjusted inner gap */}
            <div>
              <h3 className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Extensive Research along with outlining of the draft
                </span>
              </h3>
              <p className="text-[14px] lg:text-[16px]">
                Our staff contacts the client when the order is dropped and
                addresses every aspect of the plot or premise or whatever the
                book is about. Then the committee calls a meeting to speak to
                the team about the proposal. And when he is sure he can create a
                masterpiece with the concept, the team chooses which writer to
                give the job or the writer volunteers. The drafting process
                starts the very next day, and a writer begins to work on your
                idea.
              </p>
            </div>
            <div>
              <h3 className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Extensive Research along with outlining of the draft
                </span>
              </h3>
              <p className="text-[14px] lg:text-[16px]">
                Our staff contacts the client when the order is dropped and
                addresses every aspect of the plot or premise or whatever the
                book is about. Then the committee calls a meeting to speak to
                the team about the proposal. And when he is sure he can create a
                masterpiece with the concept, the team chooses which writer to
                give the job or the writer volunteers. The drafting process
                starts the very next day, and a writer begins to work on your
                idea.
              </p>
            </div>
          </div>
          {/* Center Image */}
          <div className="flex-shrink-0">
            <Image
              src="/book11.png"
              alt="process"
              height={1000}
              width={500}
              className="rounded-lg shadow-lg "
            />
          </div>
          {/* Right Aside */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            {' '}
            {/* Adjusted inner gap */}
            <div>
              <h3 className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Extensive Research along with outlining of the draft
                </span>
              </h3>
              <p className="text-[14px] lg:text-[16px]">
                Our staff contacts the client when the order is dropped and
                addresses every aspect of the plot or premise or whatever the
                book is about. Then the committee calls a meeting to speak to
                the team about the proposal. And when he is sure he can create a
                masterpiece with the concept, the team chooses which writer to
                give the job or the writer volunteers. The drafting process
                starts the very next day, and a writer begins to work on your
                idea.
              </p>
            </div>
            <div>
              <h3 className="flex items-center">
                <GiArchiveResearch className="text-6xl" />
                <span className="text-[22px] lg:text-[24px] font-semibold pl-2">
                  Extensive Research along with outlining of the draft
                </span>
              </h3>
              <p className="text-[14px] lg:text-[16px]">
                Our staff contacts the client when the order is dropped and
                addresses every aspect of the plot or premise or whatever the
                book is about. Then the committee calls a meeting to speak to
                the team about the proposal. And when he is sure he can create a
                masterpiece with the concept, the team chooses which writer to
                give the job or the writer volunteers. The drafting process
                starts the very next day, and a writer begins to work on your
                idea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
