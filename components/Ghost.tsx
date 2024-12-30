'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const images = [
  { src: '/book1.png', alt: 'book1' },
  { src: '/book2.png', alt: 'book2' },
  { src: '/book3.png', alt: 'book3' },
  { src: '/book4.png', alt: 'book4' },
  { src: '/book5.png', alt: 'book5' },
  { src: '/book6.png', alt: 'book6' },
  { src: '/book7.png', alt: 'book7' },
  { src: '/book8.png', alt: 'book8' },
  { src: '/book9.png', alt: 'book9' },
  { src: '/book10.png', alt: 'book10' },
  { src: '/book11.png', alt: 'book11' },
  { src: '/book12.png', alt: 'book12' },
  { src: '/book13.png', alt: 'book13' },
  { src: '/book14.png', alt: 'book14' },
  { src: '/book15.png', alt: 'book15' },
  { src: '/book16.png', alt: 'book16' },
  { src: '/book17.png', alt: 'book17' },
  { src: '/book18.png', alt: 'book18' },
  { src: '/book19.png', alt: 'book19' },

];

const Ghost = () => {
  return (
    <div className=" px-4 lg:px-20 xl:px-32 py-10">
      <div className="text-start mb-10">
        <h2 className="text-[26px] lg:text-[28px] font-bold mb-2">
        The Leading <span className="text-red-500">Ebook Writing Company</span> With A Record of 5000+ Successful Ebook Projects!
        </h2>
        <p className='text-[14px] lg:text-[16px]'>
        Having completed over 5000 ebook projects, our ebook ghostwriters bring vast experience to the table, combining skill, and creativity to deliver high-quality work worldwide.

        </p>
      </div>

      <Swiper
  spaceBetween={5}
  slidesPerView={5}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Autoplay, Pagination]}
  className="relative h-[200px] md:h-[300px] lg:h-[400px]" 
>
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <Image
        src={image.src}
        alt={image.alt}
        height={400} 
        width={300} 
        className="transition-all duration-700 ease-linear object-contain"
      />
    </SwiperSlide>
  ))}
</Swiper>


      <div className="flex justify-center mt-6">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Ghost;