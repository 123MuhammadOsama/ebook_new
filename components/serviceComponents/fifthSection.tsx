'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import { useRef } from 'react';

type Review = {
  id: number;
  imageUrl: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    imageUrl: '/testimonial1.png',
    text: 'I threw some random ideas at them, and boom, they turned it into a masterpiece. I didn’t know my thoughts could look this good on paper.',
  },
  {
    id: 2,
    imageUrl: '/testimonial2.png',
    text: 'This team made me feel seen. Fast, creative, and ridiculously good at what they do. 10/10.',
  },
  {
    id: 3,
    imageUrl: '/testimonial3.png',
    text: 'I didn’t just get an ebook; I got a whole vibe. These people get modern storytelling and made my content pop like never before.',
  },
  {
    id: 4,
    imageUrl: '/testimonial4.png',
    text: 'My ebook went from 0 to 100, thanks to this crew. They helped me hit every single one of my goals.',
  },
];

const Testimonial = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="bg-black w-full px-4 sm:px-10 md:px-20 py-10 relative">
      <div
        className="bg-red-600 w-[90%] sm:w-[500px] text-white font-bold py-4 sm:py-2 text-center
         mx-auto sm:absolute sm:left-[100px] md:left-[200px] lg:left-[300px]
        xl:left-[450px] 2xl:left-[500px] top-[-80px] sm:top-[-40px] -rotate-6 mb-8 sm:mb-0 2xl:py-8"
      >
        <h2 className="text-[26px] lg:text-[28px]">
          No-Filter Clients’ Feedback
        </h2>
      </div>
      <p className="text-white text-center text-base text-[14px] lg:text-[16px] px-4 pt-10 2xl:pt-20 sm:px-24 md:px-20 lg:px-40 2xl:px-[200px]">
        Don’t just take our word for it—see why our clients keep coming back for
        more. Here’s the tea!
      </p>

      <div className="flex flex-col xl:flex-row items-center justify-center text-white pt-8 sm:pt-[50px]">
        <Swiper
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white text-black rounded-lg p-5 shadow-md w-auto h-[300px] sm:h-[400px] relative">
                <Image
                  src="/inverted-commas-open.png"
                  alt="comma"
                  width={50}
                  height={100}
                  className="absolute top-3 left-5 h-10 w-10"
                />
                <div className="flex flex-col items-center">
                  <Image
                    src={review.imageUrl}
                    alt="Reviewer Image"
                    height={100}
                    width={100}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2 sm:mb-3"
                  />
                  <div className="text-yellow-500 flex text-[22px] lg:text-[24px]">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                  <p className="text-center text-[14px] lg:text-[16px] mt-2 sm:mt-3 mb-4">
                    {review.text}
                  </p>
                  <Image
                    src="/inverted-commas-close.png"
                    alt="comma"
                    width={50}
                    height={100}
                    className="absolute bottom-2 right-4 h-10 w-10"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 sm:mt-5 text-center">
          <p className="text-[22px] lg:text-[24px] font-bold mb-10 sm:mb-20 w-full xl:w-[300px] 2xl:w-[600px]">
            1000+ Positive Reviews Reflecting Customer Satisfaction
          </p>
          <div className="flex gap-5 sm:gap-10 justify-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-red-500 bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={100} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white text-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
            >
              <ChevronRight size={100} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
