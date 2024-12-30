import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsPinterest, BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-red-900 flex flex-col lg:flex-row px-8 lg:px-10 2xl:px-32 py-10 lg:py-20">
      {/* Right Section */}
      <div className="">
        <Image
          src="/footer.png"
          width={300}
          height={200}
          alt="image"
          className="object-contain"
        />
        <p className="text-[14px] lg:text-[16px] text-white text-center lg:text-left">
          PEBW empowers authors to share their narratives, create impact, and
          foster connections.
        </p>
        <p className="text-[14px] lg:text-[16px] text-white text-center lg:text-left pt-5 lg:pt-10">
          <span className="font-bold">Address:</span> 2093 Philadephia Pike
          #1911, Claymont, DE, 19703
        </p>
        <div className="flex justify-center lg:justify-start text-white bg-transparent text-3xl lg:text-4xl pt-5 lg:pt-10 gap-4">
          <Link href="/">
            <FaFacebook />
          </Link>
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaLinkedin />
          </Link>
          <Link href="/">
            <BsTwitterX />
          </Link>
          <Link href="/">
            <BsPinterest />
          </Link>
        </div>
      </div>

      {/* Left Section */}
      <div className="ml-40 text-white flex flex-col lg:flex-row space-x-10">
        {/* pehla */}
        <div className="text-center">
          <h3 className="font-bold text-xl">Usefull Links</h3>
          <ul className="flex-col mt-4 space-y-1">
            <Link href="/">
              <li className="hover:text-yellow-300 underline">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-yellow-300 underline">About Us</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-yellow-300 underline">Services</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-yellow-300 underline">Contact Us</li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">Blogs</li>
            </Link>
          </ul>
        </div>

        {/* dosra */}
        <div className="text-center">
          <h3 className="font-bold text-xl">Services</h3>
          <ul className="flex-col mt-4 space-y-1">
            <Link href="/">
              <li className="hover:text-yellow-300 underline">lorem</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-yellow-300 underline">lorem</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-yellow-300 underline">lorem</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-yellow-300 underline">lorem</li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">lorem</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
