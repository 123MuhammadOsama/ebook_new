import Hero from '@/components/serviceComponents/firstSection';
import Order from '@/components/serviceComponents/secondSection';
import Ghost from '@/components/serviceComponents/thirdSection';
import AboutFeatures from '@/components/serviceComponents/fourthsection';
import Testimonial from '@/components/serviceComponents/fifthSection';
import FAQ from '@/components/serviceComponents/sixthsection';
//import FourthSection from '@/components/aboutComponents/FourthSection'
// import SixthSection from '@/components/aboutComponents/SixthSection'
import Contact from '@/components/serviceComponents/seventhSection';
import React from 'react';
import Discount from '@/components/serviceComponents/DIscount';
import Process from '@/components/serviceComponents/Process';
import Migrate from '@/components/serviceComponents/Migrate';
import Bookmarketeer from '@/components/serviceComponents/Bookmarketeer';

export const metadata = {
  slug: 'ebook-publishing-services',
  serviceName: "World's Leading eBook Writing Specialists USA",
  path: '/ebook-publishing-services',
  title: 'EBook Publishing Services - Best EBook Publishing Agency',
  description:
    'Want to reach millions of readers by publishing your ebook? hire our ebook publishing services today at affordable prices and showcase your work to global audience',
  last_modified: '2024-11-17',
  isoDate: new Date('2024-10-23').toISOString(),
  alternates: {
    canonical: 'https://ebookwritingstudio.com/ebook-publishing-services', // Ensure this is the correct domain.
  },
  openGraph: {
    title: 'EBook Publishing Services - Best EBook Publishing Agency',
    description:
      'Want to reach millions of readers by publishing your ebook? hire our ebook publishing services today at affordable prices and showcase your work to global audience',
    locale: 'en_US',
    type: 'website',
    publishedTime: '2024-10-23T00:00:00.000Z',
    authors: 'eBook Writers Team',
    site_name: 'eBook Writers USA',
    url: 'https://ebookwritingstudio.com/ebook-publishing-services',
    images: [
      {
        url: 'https://ebookwriters.com/_next/image?url=%2Fassets%2Febook_banner.png&w=1200&q=75',
        width: 1200,
        height: 628,
        type: 'image/png',
        alt: 'Professional eBook Writing Services - Trusted Specialists USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional eBook Writing Services | Transform Your Ideas Today',
    description:
      'Achieve publishing success with our expert eBook writing services. Work with trusted professionals to create impactful eBooks from start to finish.',
    site: '@eBookWritersUSA',
    creator: '@eBookWritersUSA',
    images: [
      'https://ebookwriters.com/_next/image?url=%2Fassets%2Febook_banner.png&w=1200&q=75',
    ],
  },
};

const About = () => {
  return (
    <div>
      <Hero />
      <Discount />
      <Order />
      <Process />
      <Migrate />
      <Ghost />
      <Bookmarketeer />
      <AboutFeatures />
      <Testimonial />
      <FAQ />
      <Contact />
    </div>
  );
};

export default About;
