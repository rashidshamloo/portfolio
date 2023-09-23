// next-intl
import Link from 'next-intl/link';
import { useTranslations, useLocale } from 'next-intl';

// components
import Transition from '@/components/Common/Transition';

// data
import navigation from '@/data/navigation.json';

//types
interface headerSideNavProps {
  closeSideNav: () => void;
}

const HeaderSideNav = ({ closeSideNav }: headerSideNavProps) => {
  // next-intl
  const t = useTranslations('Header');
  const locale = useLocale();

  return (
    <Transition
      id="side-menu"
      key="backdrop"
      className="backdrop fixed inset-0 z-10 bg-black/60"
      duration={0.15}
      onClick={(e) => {
        const targetEle = e.target as HTMLDivElement;
        if (targetEle.classList.contains('backdrop')) closeSideNav();
      }}
    >
      <Transition
        key="menu"
        duration={0.35}
        className={
          'fixed bottom-0 left-0 top-0 w-[65%] bg-brightBlue/90 dark:bg-darkGrayishViolet/80 ' +
          (locale === 'ja' ? 'text-lg' : '')
        }
        effect="fadeLTRPN"
      >
        <ul
          className={
            'mt-16 flex flex-col items-center gap-y-4 font-medium uppercase [&>li]:w-full [&_a]:mx-auto [&_a]:block [&_a]:w-3/4 [&_a]:rounded-xl [&_a]:border-[1px] [&_a]:border-white/50 [&_a]:bg-white/60 [&_a]:px-6 [&_a]:py-1 [&_a]:text-grayishBlue/60 [&_a]:shadow-sm [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:border-darkGrayishViolet/20 hover:[&_a]:bg-white/60 hover:[&_a]:text-accent/50 hover:[&_a]:shadow-md dark:[&_a]:border-black/30 dark:[&_a]:bg-grayishBlue/20 dark:[&_a]:text-gray-400/80 dark:hover:[&_a]:border-grayishBlue/40 dark:hover:[&_a]:bg-black/30 dark:hover:[&_a]:text-accent/80'
          }
        >
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.link} onClick={closeSideNav}>
                {t(item.translation)}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </Transition>
  );
};

export default HeaderSideNav;
