// import type { Metadata } from "next";
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  slug: 'home',
  serviceName: "World's Leading eBook Writing Specialists USA",
  path: '/',
  title:
    'Expert eBook Writing Services USA | Transform Your Ideas Into Bestsellers',
  description:
    'Partner with our professional eBook writing specialists to turn your ideas into bestselling eBooks. From concept creation to publication, we make it seamless. Get started today!',
  last_modified: '2024-11-17',
  isoDate: new Date('2024-10-23').toISOString(),
  alternates: {
    canonical: 'https://ebookwriters.com', // Ensure this is the correct domain.
  },
  openGraph: {
    title: 'Expert eBook Writing Services | Trusted eBook Specialists USA',
    description:
      'Looking for top-tier eBook writing services? Work with our skilled writers and editors to create compelling, professional eBooks. Achieve your publishing goals today!',
    locale: 'en_US',
    type: 'website',
    publishedTime: '2024-10-23T00:00:00.000Z',
    authors: 'eBook Writers Team',
    site_name: 'eBook Writers USA',
    url: 'https://ebookwriters.com',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
