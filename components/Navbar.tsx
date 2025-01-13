'use client';
import { ChevronDownIcon, ChevronUpIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 850px)' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDesktopOrLaptop && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isDesktopOrLaptop, isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      name: 'Ebook Publishing Services',
      link: '/ebook-publishing-services',
    },
  ];

  return (
    <section
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="py-4 flex items-center justify-between px-4 md:px-4 lg:px-10 xl:px-20 2xl:px-40">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="eBook"
              width={200}
              height={100}
              className="object-contain"
              title="eBook"
            />
          </Link>
        </div>

        <div className="md:hidden">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none text-gray-600"
            >
              <HiOutlineMenuAlt3 size={32} />
            </button>
          )}
        </div>

        <div className="hidden md:flex space-x-1 lg:space-x-4 xl:space-x-12">
          <Link
            href="/about-us"
            className="text-sm lg:text-base xl:text-xl font-medium hover:text-[#802312]"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-sm lg:text-base xl:text-xl font-medium hover:text-[#802812]"
          >
            Contact Us
          </Link>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm lg:text-base xl:text-xl font-medium hover:text-[#802312] flex items-center space-x-1"
            >
              <span>Services</span>
              {isDropdownOpen ? (
                <ChevronUpIcon className="h-4 w-4 text-sm lg:text-base xl:text-xl font-medium" />
              ) : (
                <ChevronDownIcon className="h-4 w-4 text-sm lg:text-base xl:text-xl font-medium" />
              )}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-md border rounded-md mt-2">
                <ul className="divide-y">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.link}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#802312]"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {!isSidebarOpen && (
          <div className="hidden md:flex items-center gap-4 2xl:gap-8">
            <div className="hidden sm:flex relative flex-col group overflow-hidden">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <BsWhatsapp size={22} />
                <Link
                  href="http://wa.me/+1(206)746-7149"
                  className="text-sm lg:text-base xl:text-xl hover:text-green-500"
                >
                  +1(206)746-7149
                </Link>
              </div>
              <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-green-500">
                <BsWhatsapp size={22} />
                <Link
                  href="http://wa.me/++1(206)746-7149"
                  className="text-sm lg:text-base xl:text-xl hover:text-green-500"
                >
                  +1(206)746-7149
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex relative flex-col group overflow-hidden">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <Mail size={24} />
                <Link
                  href="mailto:info@ebookwritingstudio.com"
                  className="text-sm lg:text-base xl:text-xl hover:text-blue-500"
                >
                  info@ebookwritingstudio.com
                </Link>
              </div>
              <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue-500">
                <Mail size={24} />
                <Link
                  href="mailto:info@ebookwritingstudio.com"
                  className="text-sm lg:text-base xl:text-xl hover:text-blue-500"
                >
                  info@ebookwritingstudio.com
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 lg:w-80 xl:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-8">
          <div className="self-end">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="focus:outline-none"
            >
              <HiX size={32} />
            </button>
          </div>

          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Business proposal writers"
                width={150}
                height={100}
                className="object-contain h-auto w-auto"
                onClick={() => setIsSidebarOpen(false)}
                title="Business proposal writers"
              />
            </Link>
          </div>
          <Link
            href="/about-us"
            onClick={() => setIsSidebarOpen(false)}
            className="text-md lg:text-lg xl:text-xl font-medium hover:text-[#124680]"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setIsSidebarOpen(false)}
            className="text-md lg:text-lg xl:text-xl font-medium hover:text-[#124680]"
          >
            Contact Us
          </Link>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm lg:text-base xl:text-xl font-medium hover:text-[#802312] flex items-center space-x-1"
            >
              <span>Services</span>
              <ChevronDownIcon className="h-4 w-4 text-sm lg:text-base xl:text-xl font-medium" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-md border rounded-md mt-2">
                <ul className="divide-y">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.link}
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-[#fa2a5e]"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="text-md lg:text-lg xl:text-xl font-medium hover:text-[#124680]"
          >
            Blogs
          </Link>

          <div className="flex gap-5">
            <Link href="http://wa.me/+1(206)746-7149">
              <div className="bg-green-500 text-white p-2 rounded-xl">
                <BsWhatsapp size={26} />
              </div>
            </Link>
            <Link href="mailto:info@ebookwritingstudio.com">
              <div className="bg-blue-500 text-white p-2 rounded-xl">
                <Mail size={26} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </section>
  );
};

export default Navbar;
