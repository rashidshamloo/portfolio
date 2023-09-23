// react
import { useState, useEffect } from 'react';

// next
import dynamic from 'next/dynamic';
import Image from 'next/image';

// next-intl
import { useLocale, useTranslations } from 'next-intl';

// react-syntax-highlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  dracula,
  atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
import Button from '../Common/Button';
import WordBreak from '../Common/WordBreak';
const TiltDemo = dynamic(() => import('./TiltDemo'));
const FlipTiltDemo = dynamic(() => import('./FlipTiltDemo'));
const ParallaxDemo = dynamic(() => import('./ParallaxDemo'));

// types
interface projectData {
  title: Record<string, string>;
  description: Record<string, string>;
  points: Record<string, string[]>;
  tags: string[];
  code: string;
  npmLink: string;
  sourceLink: string;
  blogLink?: string;
}

interface projectProps {
  reverse?: boolean;
  data: projectData;
}

const Package = ({ reverse = false, data }: projectProps) => {
  const darkMode = useNextThemes();

  // next-intl
  const t = useTranslations('Packages');
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
        <div className="mx-auto w-[90%] sm:min-w-[450px] lg:mt-4 lg:w-auto 2xl:min-w-[600px]">
          {(data.title.en.includes('Tilt') ||
            data.title.en.includes('Parallax')) && (
            <div className="mb-16 flex items-center justify-center">
              {data.title.en.includes('React Flip Tilt') && <FlipTiltDemo />}
              {data.title.en.includes('React Next Tilt') && <TiltDemo />}
              {data.title.en.includes('React Next Parallax') && (
                <ParallaxDemo />
              )}
            </div>
          )}
          <div className="overflow-hidden rounded-xl bg-[rgba(245,247,255,0.4)] text-xs opacity-90 dark:bg-[rgba(40,42,54,0.5)] sm:text-sm md:p-2 lg:p-4 lg:text-base [&>pre]:!bg-transparent">
            <SyntaxHighlighter
              language="javascript"
              style={darkMode ? dracula : atelierSulphurpoolLight}
              wrapLines={true}
              wrapLongLines={true}
            >
              {data.code}
            </SyntaxHighlighter>
          </div>
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
        <h2 className="hidden font-merriweather text-[2rem] font-bold lg:block xl:text-4xl">
          <WordBreak>{data.title[locale]}</WordBreak>
        </h2>
        <div className="mb-2 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:my-3 lg:justify-start [&>*]:rounded-xl [&>*]:bg-darkViolet/10 [&>*]:p-1 dark:[&>*]:bg-brightBlue/10 [&>div]:w-[90%] sm:[&>div]:w-auto dark:[&_.aws-btn>span>span>*]:opacity-80 [&_.aws-btn]:w-full sm:[&_.aws-btn]:w-auto [&_a>span>span>span>svg]:text-base [&_a>span]:text-xs [&_a>span]:font-medium xl:[&_a>span]:text-sm">
          <div>
            <Button
              href={data.npmLink}
              text={t('npm')}
              type="live"
              target="_blank"
            />
          </div>
          <div>
            <Button
              href={data.sourceLink}
              text={t('sourceCode')}
              type="source"
              target="_blank"
            />
          </div>
          {!!data.blogLink && (
            <div>
              <Button
                href={data.blogLink}
                text={t('blog')}
                type="resume"
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

export default Package;
