// react
import { RefObject } from 'react';

// next
import Image from 'next/image';

// components
import Transition from '@/components/Common/Transition';
import WordBreak from '@/components/Common/WordBreak';

// types
interface tPSectionProps {
  title: string;
  text: string[];
  images: string[];
  triggerRef?: RefObject<HTMLHeadingElement>;
}

const TPSection = ({ title, text, images, triggerRef }: tPSectionProps) => {
  return (
    <>
      <Transition
        ref={triggerRef}
        duration={1.5}
        effect="fadeIn"
        component="h2"
        className="relative mx-auto mt-16 inline-block w-[80%] border-b-2 pb-3 font-merriweather text-4xl font-bold leading-tight drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] transition-all duration-500 after:absolute after:left-[60%] after:top-[100%] after:h-2 after:w-1/2 after:border-b-2 md:text-5xl lg:ml-[17.5%] lg:w-auto lg:pr-16 lg:text-6xl"
      >
        <WordBreak>{title}</WordBreak>
      </Transition>
      <div className="relative w-full before:absolute before:left-1/2 before:top-1/2 before:z-20 before:hidden before:h-[95%] before:border-r-2 before:transition-all before:duration-500 before:-translate-x-1/2 before:-translate-y-1/2 lg:before:block">
        <div className="relative mx-auto mt-3 flex flex-col items-center justify-center gap-y-8 text-xl leading-[1.75] lg:mt-4 lg:max-w-[65%] lg:gap-y-16 lg:text-2xl [&>p:nth-child(even)]:ml-[5%] [&>p:nth-child(even)]:mr-auto lg:[&>p:nth-child(even)]:ml-auto lg:[&>p:nth-child(even)]:mr-[52%] [&>p:nth-child(odd)]:ml-auto [&>p:nth-child(odd)]:mr-[5%] [&>p:nth-child(odd)]:text-right lg:[&>p:nth-child(odd)]:ml-[52%] lg:[&>p:nth-child(odd)]:mr-auto [&>p]:inline-block [&>p]:w-[70%] [&>p]:border-b-2 [&>p]:p-2 lg:[&>p]:w-[48%]">
          {!!images[0] && (
            <Transition
              duration={1.5}
              effect="fadeBTT"
              className="relative mx-auto aspect-[20/13] w-[75%] overflow-hidden rounded-lg shadow-[0.5rem_0.5rem_0] shadow-black/20 lg:-mb-24 lg:mr-[5%] lg:w-[40%]"
            >
              <Image
                src={images[0]}
                alt={title + ' Image 1'}
                aria-hidden="true"
                sizes="(min-width: 768px) 25vw, 100vw"
                fill
              />
            </Transition>
          )}
          {text.map((item, index) => (
            <Transition
              duration={1.5}
              effect={index % 2 ? 'fadeRTL' : 'fadeLTR'}
              component="p"
              key={index}
            >
              <WordBreak>{item}</WordBreak>
            </Transition>
          ))}
          {!!images[1] && (
            <Transition
              duration={1.5}
              effect="fadeBTT"
              className="relative mx-auto mt-1 aspect-[20/13] w-[75%] overflow-hidden rounded-lg shadow-[0.5rem_0.5rem_0] shadow-black/20 lg:ml-[5%] lg:w-[40%]"
            >
              <Image
                src={images[1]}
                alt={title + ' Image 2'}
                aria-hidden="true"
                sizes="(min-width: 768px) 25vw, 100vw"
                fill
              />
            </Transition>
          )}
        </div>
      </div>
    </>
  );
};

export default TPSection;
