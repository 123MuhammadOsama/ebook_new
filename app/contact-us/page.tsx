import ContactForm from '@/components/contactComponent/firstSection';

import React from 'react';
export const metadata = {
  slug: 'contact-us',
  serviceName: "World's Leading eBook Writing Specialists USA",
  path: '/contact-us',
  title: 'Contact Us - Best Ebook Writing Platform',
  description:
    'Contact us for your ebook writing, editing, publishing, cover design or ghostwriting, just contact us through email, live chat we are 24/7 open.',
  last_modified: '2024-11-17',
  isoDate: new Date('2024-10-23').toISOString(),
  alternates: {
    canonical: 'https://ebookwritingstudio.com/contact-us', // Ensure this is the correct domain.
  },
  openGraph: {
    title: 'Contact Us - Best Ebook Writing Platform',
    description:
      'Contact us for your ebook writing, editing, publishing, cover design or ghostwriting, just contact us through email, live chat we are 24/7 open.',
    locale: 'en_US',
    type: 'website',
    publishedTime: '2024-10-23T00:00:00.000Z',
    authors: 'eBook Writers Team',
    site_name: 'eBook Writers USA',
    url: 'https://ebookwritingstudio.com/contact-us',
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
      <ContactForm />
    </div>
  );
};

export default About;
