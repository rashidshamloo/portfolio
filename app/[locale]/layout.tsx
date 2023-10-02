import '@/styles/globals.css';

// react
import React from 'react';

// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// analytics
import { Analytics } from '@vercel/analytics/react';

// next-intl
import { NextIntlClientProvider } from 'next-intl';
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

// providers
import Providers from '@/providers/Providers';

// font
import { Raleway, Merriweather } from 'next/font/google';
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--raleway',
});
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--merriweather',
});

// components
const Header = dynamic(() => import('@/components/Header/Header'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));
// const Logo = dynamic(() => import('@/components/Common/Logo'));
import ScrollToTop from '@/components/Layout/ScrollToTop';

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Portfolio',
  description: "Rashid Shamloo's Portfolio",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Portfolio, Web Developer, Front-end Developer, Project, Showcase, Contact Information, Blog',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/images/favicon.webp',
  },
  metadataBase: new URL('https://www.rashidshamloo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ja-JP': '/ja',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/',
    title: 'Rashid Shamloo | Portfolio',
    siteName: 'Rashid Shamloo | Portfolio',
    description:
      "Rashid Shamloo's portfolio, blog, resume, project showcase, contact information",
    images: {
      url: '/images/screenshots/home.webp',
      alt: "Rashid Shamloo's Portfolio",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/home.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | Portfolio',
    description:
      "Rashid Shamloo's portfolio, blog, resume, project showcase, contact information",
    images: '/images/screenshots/home.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

// types
interface rootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: rootLayoutProps) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }

  return (
    <html
      lang={locale}
      className="snap-y snap-proximity scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              email: 'rashidshamloo@gmail.com',
              image: 'https://www.rashidshamloo.com/images/profile.webp',
              jobTitle: 'Front-end Developer',
              name: 'Rashid Shamloo',
              alumniOf: 'Ferdowsi University of Mashhad',
              birthPlace: 'Mashhad, Iran',
              birthDate: '1986-02-21',
              gender: 'male',
              nationality: 'Persian',
              url: 'https://www.rashidshamloo.com',
              sameAs: [
                'https://www.linkedin.com/in/rashid-shamloo/',
                'https://github.com/rashidshamloo/',
                'https://twitter.com/rashidshamloo',
                'https://dev.to/rashidshamloo',
                'https://www.wantedly.com/id/rashid_shamloo',
              ],
            }),
          }}
        ></script>
      </head>
      <body className={`${raleway.variable} ${merriweather.variable}`}>
        {/* <Logo /> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ScrollToTop />
            <Header />
            <main className={`min-h-screen font-raleway`}>{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
