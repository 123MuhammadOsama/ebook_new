import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-red-900 flex flex-col lg:flex-row justify-between px-8 lg:px-20 2xl:px-60 py-10 lg:py-20">
      {/* Left Section */}
      <div className="max-w-full lg:max-w-lg xl:max-w-xl">
        <Image
          src="/footer.png"
          width={300}
          height={200}
          alt="ebook"
          className="object-contain w-auto h-auto"
        />
        <p className="text-[14px] lg:text-[16px] text-white text-center lg:text-left">
          EbookWritingStudio is where your stories find a voice and the world
          finds your words. Explore innovative writing solutions here and let
          your story inspire and connect!
        </p>
        <p className="text-[14px] lg:text-[16px] text-white text-center lg:text-left pt-5 lg:pt-10">
          <span className="font-bold">Address:</span> 2093 Philadephia Pike
          #1911, Claymont, DE, 19703
        </p>
        <div className="flex justify-center lg:justify-start text-white bg-transparent text-3xl lg:text-4xl pt-5 lg:pt-10 gap-4">
          <Link href="https://www.facebook.com/ebookwritingstudio/">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/ebookwritingstudio">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/company/ebookwritingstudio">
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/Ebookswriting">
            <BsTwitterX />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-10 mt-10 lg:mt-0">
        {/* Useful Links */}
        <div className="text-center">
          <p className="text-xl font-bold text-white pb-5">Useful Link</p>
          <ul>
            <Link href="/about-us">
              <li className="text-white hover:underline hover:text-yellow-300">
                About Us
              </li>
            </Link>
            <Link href="/contact-us">
              <li className="text-white hover:underline hover:text-yellow-300">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center">
          <p className="text-xl font-bold text-white pb-5">Services</p>
          <ul>
            <Link href="https://ebookwritingstudio.com/">
              <li className="text-white hover:underline hover:text-yellow-300">
                Ebook Writing
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
