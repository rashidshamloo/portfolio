import './globals.css';

// react
import React from 'react';

// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

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
const Logo = dynamic(() => import('@/components/Common/Logo'));
import ScrollToTop from '@/components/Layout/ScrollToTop';

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Portfolio',
  description: "Rashid Shamloo's Portfolio",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Portfolio, Web Developer, Front-end Developer, Project, Showcase, Contact Info, Blog',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/images/favicon.webp',
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
      className="scroll-smooth snap-proximity snap-y"
      suppressHydrationWarning
    >
      <body className={`${raleway.variable} ${merriweather.variable}`}>
        <Logo />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ScrollToTop />
            <Header />
            <main className={`min-h-screen font-raleway`}>{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
