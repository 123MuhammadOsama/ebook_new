import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-red-900 flex flex-col lg:flex-row px-8 lg:px-10 2xl:px-32 py-10 lg:py-20">
      {/* Right Section */}
      <div className="max-w-full lg:max-w-2xl">
        <Image
          src="/footer.png"
          width={300}
          height={200}
          alt="image"
          className="object-contain"
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

      {/* Left Section */}
      <div className="mx-10 xl:px-32 text-white flex flex-col lg:flex-row  space-y-5 pt-10 space-x-0 lg:space-x-4 xl:space-x-10 2xl:space-x-32 items-center">
        {/* pehla */}
        <div className="text-center">
          <h3 className="font-bold text-xl">Usefull Links</h3>
          <ul className="flex-col mt-4 space-y-1">
            <Link href="/">
              <li className="hover:text-yellow-300 underline">Home</li>
            </Link>
            <Link href="/about-us">
              <li className="hover:text-yellow-300 underline">About Us</li>
            </Link>
            <Link href="/ebook-publishing-services">
              <li className="hover:text-yellow-300 underline">Services</li>
            </Link>
            <Link href="/contact-us">
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
              <li className="hover:text-yellow-300 underline">
                Fiction Ebook Writing
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:text-yellow-300 underline">
                Non-Fiction Ebook Writing
              </li>
            </Link>
            <Link href="/services">
              <li className="hover:text-yellow-300 underline">
                Biographies & Memoirs boo writing
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-yellow-300 underline">
                Self-Help Ebook Writing
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                Ebook Editing & Proofreading
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                Ebook Cover Design
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                3D Ebook Mockups
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                EBook Publishing Services
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                EBook Marketing
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-yellow-300 underline">
                EBook Author Website
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
