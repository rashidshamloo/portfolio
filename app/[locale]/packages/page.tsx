// next
import { Metadata } from 'next';

// components
import PackagesTop from '@/components/Packages/PackagesTop';

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | NPM Packages',
  description: "Rashid Shamloo's NPM Packages",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, NPM Packages, Web Developer, Front-end Developer',
  metadataBase: new URL('https://www.rashidshamloo.com'),
  alternates: {
    canonical: '/packages',
    languages: {
      'en-US': '/en/packages',
      'ja-JP': '/ja/packages',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/packages',
    title: 'Rashid Shamloo | NPM Packages',
    siteName: 'Rashid Shamloo | Portfolio',
    description: "Rashid Shamloo's NPM Packages",
    images: {
      url: '/images/screenshots/packages.webp',
      alt: "Rashid Shamloo's NPM Packages",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/packages.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | NPM Packages',
    description: "Rashid Shamloo's NPM Packages",
    images: '/images/screenshots/packages.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

const Projects = () => {
  return (
    <>
      <PackagesTop />
    </>
  );
};

export default Projects;
