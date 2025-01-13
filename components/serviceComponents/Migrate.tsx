// import { div } from 'framer-motion/client'
// import Image from 'next/image'
import React from 'react';

const Migrate = () => {
  return (
    <div className="bg-gray-800 text-white px-10 xl:px-32 py-10 items-center justify-center text-center">
      <div className="flex">
        <div>
          <p className="text-4xl">
            <span className="font-bold">Emily Dickinson said</span>,{' '}
            <span className="italic">
              &quot;A word is dead when it is said, some say. I say it just
              begins to live that day.&quot;
            </span>
          </p>
          <p className="text-2xl mt-10">
            Give your words eternal life with our professional ebook publishing
            service today!
          </p>
          <div className="flex mt-4 gap-4 items-center justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-lg px-2 py-2 rounded-xl">
              Get a Quate
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-lg px-5 p-2 rounded-xl">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
