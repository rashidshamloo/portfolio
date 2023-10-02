// next-intl
import { useLocale, useTranslations } from 'next-intl';

// types
interface letterProps {
  userName: string;
  userEmail: string;
}
// font
import { Alex_Brush } from 'next/font/google';
const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--alexBrush',
});

const Letter = ({ userName, userEmail }: letterProps) => {
  const t = useTranslations('Contact');
  const locale = useLocale();
  return (
    <div
      className={
        "relative rounded-md bg-[url('/images/contact/paper.webp')] bg-cover font-alexBrush text-[1.875em] leading-[1.25] text-darkViolet/70 drop-shadow-md -translate-y-[2em] translate-x-[3em] rotate-[-25deg] skew-x-[25deg] dark:bg-[url('/images/contact/paper-dark.webp')] " +
        alexBrush.variable +
        (locale === 'ja'
          ? ' px-[0.5em] pt-2 [&_p]:text-[0.65em] [&_p]:leading-relaxed'
          : ' px-[0.75em]')
      }
    >
      <p
        className={
          'overflow-hidden whitespace-nowrap ' +
          (locale === 'ja' ? 'max-w-[23em]' : 'max-w-[14.5em]')
        }
      >
        {t('from')} <span className="text-[1.2em]">{userName}</span>
      </p>
      <p
        className={
          'overflow-hidden whitespace-nowrap ' +
          (locale === 'ja' ? 'max-w-[18em]' : 'max-w-[12em]')
        }
      >
        {t('email')}{' '}
        <span className={locale === 'ja' ? 'text-[1.5384em] leading-none' : ''}>
          {userEmail}
        </span>
      </p>
      <p className="absolute bottom-0 left-0 right-[0.5em] text-right">
        {t('withLove')}
      </p>
    </div>
  );
};

export default Letter;
