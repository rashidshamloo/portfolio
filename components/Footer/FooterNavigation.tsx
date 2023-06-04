// next-intl
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

//icons
import { TbSquareRoundedChevronRightFilled } from 'react-icons/tb';

// data
import navigation from '@/data/navigation.json';

function FooterNavigation() {
  const t = useTranslations('Header');
  return (
    <ul>
      {navigation.map((item, index) => (
        <li key={index}>
          <Link href={item.link} className="items-center justify-start gap-x-2">
            <TbSquareRoundedChevronRightFilled /> {t(item.translation)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FooterNavigation;
