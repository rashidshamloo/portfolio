// react
import { RefObject } from 'react';

// swiper
import { SwiperClass } from 'swiper/react';

// react-icons
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// types
interface NavigationButtonsProps {
  isStart: boolean;
  isEnd: boolean;
  swiper: RefObject<SwiperClass>;
}

const NavigationButtons = ({
  isStart,
  isEnd,
  swiper,
}: NavigationButtonsProps) => {
  return (
    <div className="absolute flex aspect-[8/5.75] w-full items-end justify-end gap-4 xs:aspect-[8/5.5] md:static md:aspect-auto md:gap-8 lg:absolute lg:inset-0 lg:block">
      <button
        title="Previous Slide"
        onClick={() => swiper.current?.slidePrev()}
        className={
          'z-10 transition-all duration-300 lg:absolute lg:-left-[7.5em] lg:top-[65%] lg:-translate-y-1/2 ' +
          (!isStart
            ? 'text-slate-300 hover:text-brightBlue hover:drop-shadow-lg hover:scale-125 dark:text-grayishBlue'
            : 'text-gray-200/20 dark:text-gray-400/10')
        }
        disabled={isStart}
      >
        <BsChevronLeft className="text-[max(4em,40px)] md:text-[5.375em]" />
      </button>
      <button
        title="Next Slide"
        onClick={() => swiper.current?.slideNext()}
        className={
          'z-10 transition-all duration-300 lg:absolute lg:-right-[7.5em] lg:top-[65%] lg:-translate-y-1/2 ' +
          (!isEnd
            ? 'text-slate-300 hover:text-brightBlue hover:drop-shadow-lg hover:scale-125 dark:text-grayishBlue'
            : 'text-gray-200/10 dark:text-gray-400/10')
        }
        disabled={isEnd}
      >
        <BsChevronRight className="text-[max(4em,40px)] md:text-[5.375em]" />
      </button>
    </div>
  );
};

export default NavigationButtons;
