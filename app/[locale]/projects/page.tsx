// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// components
import ProjectsTop from '@/components/Projects/ProjectsTop';
const MoreProjects = dynamic(
  () => import('@/components/Projects/MoreProjects/MoreProjects'),
);

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Projects',
  description: "Rashid Shamloo's Projects",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Projects, Web Developer, Front-end Developer',
  metadataBase: new URL('https://www.rashidshamloo.com'),
  alternates: {
    canonical: '/projects',
    languages: {
      'en-US': '/en/projects',
      'ja-JP': '/ja/projects',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/projects',
    title: 'Rashid Shamloo | Projects',
    siteName: 'Rashid Shamloo | Portfolio',
    description: "Rashid Shamloo's Projects",
    images: {
      url: '/images/screenshots/projects.webp',
      alt: "Rashid Shamloo's Projects",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/projects.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | Projects',
    description: "Rashid Shamloo's Projects",
    images: '/images/screenshots/projects.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

const Projects = () => {
  return (
    <>
      <ProjectsTop />
      <MoreProjects />
    </>
  );
};

export default Projects;
