'use client';

// react
import { useEffect, useRef, useState } from 'react';

//next
import Image from 'next/image';

// framer motion
import { AnimatePresence } from 'framer-motion';

// theme-toggles
import '@theme-toggles/react/css/Within.css';
import { Within } from '@theme-toggles/react';

// components
import HeaderSideNav from './HeaderSideNav';
import Glow from './Glow';

// next-intl
import Link from 'next-intl/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';

// hamburger-react
import { Divide as Cheeseburger } from 'hamburger-react';

// next-themes
import { useTheme } from 'next-themes';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// data
import navigation from '@/data/navigation.json';

function Header() {
  const darkMode = useNextThemes();

  // states
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // next-intl
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  // next-themes
  const { setTheme } = useTheme();

  // ref
  const dummyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  // it was not possible to show the hamburger menu icon on top
  // of the mobile menu due to z-index hell (believe me, i tried)
  // so i added another element in the parent and switch their
  // visibility when the menu is open

  // disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      iconRef.current?.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      iconRef.current?.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  // sets icon position to the dummy element position
  const setIconPosition = () => {
    iconRef.current!.style.top =
      String(dummyRef.current!.getBoundingClientRect().top) + 'px';
    iconRef.current!.style.left =
      String(dummyRef.current!.getBoundingClientRect().left) + 'px';
  };

  const closeSideNav = () => {
    window.removeEventListener('scroll', setIconPosition);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-20 flex h-14 items-center justify-center border-b-2 bg-white/40 shadow-md shadow-black/5 dark:border-darkGrayishViolet/50 dark:bg-darkGrayishViolet/40 lg:h-12">
        <Glow />
        <div className="mx-auto flex w-full items-center justify-between px-4 drop-shadow-sm xl:container xl:px-8">
          <nav aria-label="Main Navigation Menu">
            <div
              ref={dummyRef}
              className="text-moon/70 dark:text-gray-500 lg:hidden"
            >
              <Cheeseburger
                toggled={isOpen}
                toggle={() => {
                  setIconPosition();
                  window.addEventListener('scroll', setIconPosition, {
                    passive: true,
                  });
                  window.scrollTo(0, 0);
                  setIsOpen((prev) => !prev);
                }}
                aria-controls="side-menu"
                aria-expanded={isOpen}
                rounded={true}
              />
            </div>
            <ul className="hidden items-center gap-x-4 text-sm font-semibold uppercase lg:flex [&_a]:block [&_a]:rounded-xl [&_a]:border-[1px] [&_a]:border-white/50 [&_a]:bg-white/60 [&_a]:px-6 [&_a]:py-1 [&_a]:text-grayishBlue/60 [&_a]:shadow-sm [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:border-darkGrayishViolet/20 hover:[&_a]:bg-white/60 hover:[&_a]:text-accent/50 hover:[&_a]:shadow-md dark:[&_a]:border-black/30 dark:[&_a]:bg-grayishBlue/20 dark:[&_a]:text-gray-400 dark:hover:[&_a]:border-grayishBlue/40 dark:hover:[&_a]:bg-black/30 dark:hover:[&_a]:text-accent/80">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{t(item.translation)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-center dark:text-brightBlue/50">
            <div className="mx-2 flex h-4 items-center justify-center gap-x-2 border-r-[1px] border-darkGrayishViolet/50 px-2 text-sm text-darkGrayishViolet/70 dark:border-brightBlue/50 dark:text-brightBlue/70 lg:text-xs">
              <Link
                href={pathname}
                locale="ja"
                className={
                  'flex items-center justify-center gap-x-1 transition-all duration-300 will-change-transform transform hover:text-accent hover:opacity-100 hover:drop-shadow-md hover:scale-110 ' +
                  (locale === 'en'
                    ? 'opacity-50'
                    : 'pointer-events-none font-bold')
                }
              >
                {t('jp')}
                <Image
                  src="/images/icons/jp.svg"
                  width="0"
                  height="0"
                  className="h-auto w-[1.25em]"
                  aria-label="Japanese"
                  alt="Japan Flag"
                />
              </Link>
              <div className="h-4 w-[1px] bg-darkGrayishViolet/50 dark:bg-brightBlue/50"></div>
              <Link
                href={pathname}
                locale="en"
                className={
                  'flex items-center justify-center gap-x-1 transition-all duration-300 will-change-transform transform hover:text-accent hover:opacity-100 hover:drop-shadow-md hover:scale-110 ' +
                  (locale === 'ja'
                    ? 'opacity-50'
                    : 'pointer-events-none font-bold')
                }
              >
                {t('en')}
                <Image
                  src="/images/icons/gb.svg"
                  width="0"
                  height="0"
                  className="h-auto w-[1.25em]"
                  aria-label="English"
                  alt="Great Britain Flag"
                />
              </Link>
            </div>
            <Within
              duration={500}
              className="h-8 text-3xl text-moon transition-all duration-300 hover:text-accent hover:brightness-90 hover:drop-shadow-md hover:scale-110 dark:text-yellow-200 dark:hover:text-accent lg:text-2xl"
              toggled={!darkMode}
              onToggle={() => {
                setTheme(darkMode ? 'light' : 'dark');
              }}
            />
          </div>
        </div>
      </header>
      <nav
        aria-label="Side Navigation Menu"
        aria-hidden={!isOpen}
        className="relative z-20"
      >
        <div
          ref={iconRef}
          className="absolute z-30 hidden text-moon/70 dark:text-gray-500 lg:hidden "
        >
          <Cheeseburger
            toggled={isOpen}
            toggle={closeSideNav}
            aria-controls="side-menu"
            aria-expanded={isOpen}
            rounded={true}
          />
        </div>
        <AnimatePresence>
          {isOpen && <HeaderSideNav closeSideNav={closeSideNav} />}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Header;
