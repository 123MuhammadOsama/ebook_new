// import type { Metadata } from "next";
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  slug: 'home',
  serviceName: 'Ebook Writing Services – Hire Affordable Ebook Ghost Writers',
  path: '/',
  title: 'Ebook Writing Services – Hire Affordable Ebook Ghost Writers',
  description:
    'Hire Ebook Ghostwriters at ebookwritingstudio.com, Bring Your Vision to life with our top ebook writing services. Trust us for writing, editing and publishing.',
  last_modified: '17/11/2024',
  isoDate: new Date('10/23/2024').toISOString(),
  alternates: {
    canonical: 'https://ebookwritingstudio.com/',
  },
  openGraph: {
    title: 'Ebook Writing Services – Hire Affordable Ebook Ghost Writers',
    description:
      'Hire Ebook Ghostwriters at ebookwritingstudio.com, Bring Your Vision to life with our top ebook writing services. Trust us for writing, editing and publishing.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2024-11-11T00:00:00.000Z',
    authors: 'eBook Writers Team',
    site_name: 'eBook Writers USA',
    url: 'https://ebookwritingstudio.com/',
    images: [
      {
        url: 'https://ebookwritingstudio.com/_next/image?url=%2Flogo.png&w=256&q=75',
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
