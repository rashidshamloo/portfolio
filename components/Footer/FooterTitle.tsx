// next
import Image from 'next/image';

// next-intl
import { useTranslations } from 'next-intl';

const FooterTitle = () => {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 font-merriweather text-lg tracking-wide drop-shadow-md">
      <div className="relative aspect-square w-28 self-center overflow-hidden rounded-full border-2 border-darkViolet/70 dark:border-brightBlue/70">
        <Image
          src="/images/profile.webp"
          alt="Profile Photo"
          aria-hidden="true"
          sizes="400px"
          fill
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>{t('my')}</p>
        <p className="text-accent">{t('portfolio')}</p>
      </div>
    </div>
  );
};

export default FooterTitle;
