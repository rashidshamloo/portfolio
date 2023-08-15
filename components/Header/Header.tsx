'use client';

// react
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

//next
import Image from 'next/image';

// framer motion
import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
} from 'framer-motion';

// theme-toggles
import '@theme-toggles/react/css/Within.css';
import { Within } from '@theme-toggles/react';

// components
import Transition from '@/components/common/Transition';
import HeaderSideNav from './HeaderSideNav';

// context
import darkModeSetting from '@/context/darkModeSetting';

// next-intl
import Link from 'next-intl/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';

// hamburger-react
import { Divide as Cheeseburger } from 'hamburger-react';

// data
import navigation from '@/data/navigation.json';

function Header() {
  // states
  const [darkMode, setDarkMode] = useContext(darkModeSetting)!;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // next-intl
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  // ref
  const dummyRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // motionValue
  const translateX = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

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

  // animates the glow
  const animateGlow = useCallback(
    async (jump = false) => {
      if (!glowRef.current) return;

      const pathNametoCheck =
        locale === 'en'
          ? pathname
          : '/' + locale + (pathname === '/' ? '' : pathname);

      const currentPathElement = document.querySelector<HTMLAnchorElement>(
        `[href="${pathNametoCheck}"]`
      );

      if (!currentPathElement) return;

      const boundigRect = currentPathElement.getBoundingClientRect();
      const currentPathElementCenter = boundigRect.left + boundigRect.width / 2;

      if (jump) {
        scaleX.jump(boundigRect.width / 12);
        scaleY.jump(0.25);
        translateX.jump(currentPathElementCenter);
      } else {
        glowRef.current.classList.add(
          'shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)]'
        );
        glowRef.current.classList.remove(
          'shadow-[0_0_0.25rem_0.1rem_rgba(110,231,183,0.5)]'
        );
        await Promise.all([animate(scaleX, 1), animate(scaleY, 1)]);

        await animate(translateX, currentPathElementCenter, {
          type: 'spring',
          mass: 0.5,
          stiffness: 120,
        });
        glowRef.current.classList.add(
          'shadow-[0_0_0.25rem_0.1rem_rgba(110,231,183,0.5)]'
        );
        glowRef.current.classList.remove(
          'shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)]'
        );
        await Promise.all([
          animate(scaleX, boundigRect.width / 12),
          animate(scaleY, 0.25),
        ]);
      }
    },
    [pathname, locale, translateX, scaleX, scaleY]
  );

  useEffect(() => {
    animateGlow();
  }, [animateGlow]);

  const handleResize = useCallback(() => {
    animateGlow(true);
  }, [animateGlow]);

  // adding resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

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
      <Transition
        delay={pathname !== '/' ? 0.5 : 1.5}
        effect="fadeTTBPN"
        duration={1.25}
        threshold={0}
        component="header"
        className="absolute left-0 right-0 top-0 z-10 flex h-14 items-center justify-center border-b-2 bg-white/40 shadow-md shadow-black/5 dark:border-darkGrayishViolet/50 dark:bg-darkGrayishViolet/40 lg:h-12"
      >
        <motion.div
          style={{ translateX, scaleX, scaleY }}
          ref={glowRef}
          className="bg-emerald-300/80 shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)] absolute bottom-[5%] -left-[5px] origin-center w-[10px] h-[10px] hidden lg:block rounded-[5px]"
        ></motion.div>
        <div
          className="mx-auto flex w-full items-center justify-between px-4 drop-shadow-sm xl:container xl:px-8"
          ref={(ref) => {
            if (ref) animateGlow();
          }}
        >
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
                locale="ja"
                href={pathname}
                className={
                  'flex items-center justify-center gap-x-1 transition-all duration-300 transform hover:scale-110 hover:text-accent hover:opacity-100 hover:drop-shadow-md ' +
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
                locale="en"
                href={pathname}
                className={
                  'flex items-center justify-center gap-x-1 transition-all duration-300 transform hover:scale-110 hover:text-accent hover:opacity-100 hover:drop-shadow-md ' +
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
              className="h-8 text-3xl text-moon transition-all duration-300 hover:scale-110 hover:text-accent hover:brightness-90 hover:drop-shadow-md dark:text-yellow-200 dark:hover:text-accent lg:text-2xl"
              toggled={!darkMode}
              onToggle={() => {
                document.body.classList.toggle('dark'),
                  localStorage.setItem('darkMode', String(!darkMode));
                setDarkMode((prev) => !prev);
              }}
            />
          </div>
        </div>
      </Transition>
      <nav aria-label="Side Navigation Menu" aria-hidden={!isOpen}>
        <div
          ref={iconRef}
          className="absolute z-20 hidden text-moon/70 dark:text-gray-500 lg:hidden "
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
