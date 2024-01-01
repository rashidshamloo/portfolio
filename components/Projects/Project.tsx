// next
import Image from 'next/image';

// next-intl
import { useLocale, useTranslations } from 'next-intl';

// components
import MockCombined from './MockCombined/MockCombined';
import Button from '../Common/Button';
import WordBreak from '../Common/WordBreak';

// types
interface projectData {
  title: Record<string, string>;
  description: Record<string, string>;
  points: Record<string, string[]>;
  tags: string[];
  imageDesktop?: string;
  imageDesktopDark?: string;
  imageMobile: string;
  imageMobileDark?: string;
  demoLink?: string;
  sourceLink: string;
  backendSourceLink?: string;
  design?: string;
}

interface projectProps {
  reverse?: boolean;
  data: projectData;
}

const Project = ({ reverse = false, data }: projectProps) => {
  const t = useTranslations('Projects');
  const locale = useLocale();
  return (
    <article
      className={
        'glass relative mx-auto flex w-[90%] flex-col items-start justify-start gap-x-16 gap-y-2 rounded-2xl p-4 text-darkViolet/80 backdrop-blur-[2px] dark:text-brightBlue/80 md:gap-y-4 md:rounded-[2rem] md:px-12 md:py-8 ' +
        (reverse ? 'lg:flex-row-reverse' : 'lg:flex-row')
      }
    >
      <div className="mx-auto flex flex-col items-start gap-y-4 md:gap-y-8">
        <h2 className="mx-auto text-center font-merriweather text-[1.75rem] font-bold sm:text-[2rem] md:text-[2.2rem] lg:hidden">
          <WordBreak>{data.title[locale]}</WordBreak>
        </h2>
        <div className="mx-auto w-[300px] sm:w-[450px] 2xl:w-[600px]">
          {data.imageDesktop != undefined ? (
            <MockCombined
              imageDesktop={data.imageDesktop}
              imageDesktopDark={data.imageDesktopDark}
              imageMobile={data.imageMobile}
              imageMobileDark={data.imageMobileDark}
            />
          ) : (
            <div className="relative mt-4 min-h-[250px] md:min-h-[350px]">
              <Image
                src={data.imageMobile}
                alt={data.title[locale]}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
        <ul className="mx-auto flex flex-wrap items-center justify-center gap-2 text-sm font-bold sm:w-[90%] 2xl:text-base [&>li]:rounded-full [&>li]:px-[1em] [&>li]:py-[0.25em]">
          {data.tags.map((tag, index) => (
            <li key={index} className="glass">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full flex-col gap-y-4 py-4 text-center lg:gap-y-6 lg:text-left">
        <h2 className="hidden font-merriweather text-[2rem] font-bold lg:block xl:text-[2.25rem] ">
          <WordBreak>{data.title[locale]}</WordBreak>
        </h2>
        <div className="mb-2 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:my-3 lg:justify-start [&>*]:rounded-xl [&>*]:bg-darkViolet/10 [&>*]:p-1 dark:[&>*]:bg-brightBlue/10 [&>div]:w-[90%] sm:[&>div]:w-auto dark:[&_.aws-btn>span>span>*]:opacity-80 [&_.aws-btn]:w-full sm:[&_.aws-btn]:w-auto [&_a>span>span>span>svg]:text-base [&_a>span]:text-xs [&_a>span]:font-medium xl:[&_a>span]:text-sm">
          {!!data.demoLink && (
            <div>
              <Button
                href={data.demoLink}
                text={t('liveDemo')}
                type="live"
                target="_blank"
              />
            </div>
          )}
          <div>
            <Button
              href={data.sourceLink}
              text={t('sourceCode')}
              type="source"
              target="_blank"
            />
          </div>
          {!!data.backendSourceLink && (
            <div>
              <Button
                href={data.backendSourceLink}
                text={t('backendSourceCode')}
                type="source"
                target="_blank"
              />
            </div>
          )}
          {!!data.design && (
            <div>
              <Button
                href={data.design}
                text={t('design')}
                type="design"
                target="_blank"
              />
            </div>
          )}
        </div>
        <div className="text-lg leading-loose underline-offset-2 [&_a]:text-grayishBlue/90 [&_a]:underline [&_a]:transition-colors [&_a]:duration-300 hover:[&_a]:text-accent/80 dark:[&_a]:text-lightGrayishBlue dark:hover:[&_a]:text-accent/80">
          <WordBreak markdown={true}>{data.description[locale]}</WordBreak>
        </div>
        <ul className="mx-auto inline-block list-none text-center leading-loose lg:mx-0 lg:block lg:text-left [&>li]:my-2">
          {data.points[locale].map((point, index) => (
            <li key={index}>
              <Image
                src="/images/heart.svg"
                alt=""
                width="16"
                height="16"
                aria-hidden="true"
                className="pointer-events-none mb-[0.25em] mr-[0.5em] inline-block flex-shrink-0 opacity-80"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Project;
