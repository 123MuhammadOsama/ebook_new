'use client';
import React from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      icon: '/card1.jpg',
      title: 'Ebook Writing',
      description:
        'Just share your ideas, and we’ll create a story readers won’t want to put down! Every chapter is thoughtfully written, keeping the narrative alive.',
    },
    {
      icon: '/card2.png',
      title: 'Ebook Editing',
      description:
        'We refine your manuscript, perfecting flow, tone, and clarity to ensure your ebook resonates deeply with readers and keeps them hooked.',
    },
    {
      icon: '/card3.png',
      title: 'Ebook Proofreading',
      description:
        'We catch every tiny typo and grammar glitch! Our proofreaders comb through your ebook, making it look perfect and professional.',
    },
    {
      icon: '/card4.jpg',
      title: 'Ebook Cover Design',
      description:
        'Your cover is your first impression, and we make it count! Our designs capture your ebook’s vibe, making it irresistible to potential readers.',
    },
    {
      icon: '/card5.jpg',
      title: 'Ebook Publication',
      description:
        'We manage the whole publishing process, ensuring your ebook is formatted and ready for distribution across major platforms with ease.',
    },
    {
      icon: '/card6.jpeg',
      title: 'Ebook Marketing',
      description:
        'We get your ebook noticed! Our marketing pros know how to hit your target audience, boost visibility, and create lasting buzz for your work.',
    },
  ];

  return (
    <>
      <section className="px-8 md:px-8 lg:px-10 xl:px-32 py-10 space-y-10">
        <div className="items-center justify-center text-center">
          <span className="text-[32px] lg:text-[36px] font-bold mb-5">
            OUR <span className="text-red-500">SERVICES</span>
          </span>
          <p className="w-auto text-[14px] lg:text-[16px]">
            Tap expert writers and a partner who gets modern content marketing.
            In a sea of sameness, stand out in search with E-book writing
            Service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-auto max-w-[1400px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start shadow-lg bg-black hover:bg-red-950 text-white overflow-hidden"
            >
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={800}
                height={800}
                className="h-full w-full object-cover bg-black"
              />
              <div className="p-6">
                <span className="font-bold text-xl mb-2 text-start block">
                  {feature.title}
                </span>
                <p className="text-start">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
