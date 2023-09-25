// next
import Image from 'next/image';

// atropos
import { Parallax } from 'react-next-parallax';

type parallaxItem = { offset: number; img: string };

interface parallaxProps {
  items?: parallaxItem[];
  className?: string;
}

const defaultItems: parallaxItem[] = [
  { offset: -4.5, img: '/images/showcase/balloon_dark/01.webp' },
  { offset: -3.5, img: '/images/showcase/balloon_dark/02.webp' },
  { offset: -2, img: '/images/showcase/balloon_dark/03.webp' },
  { offset: -1, img: '/images/showcase/balloon_dark/04.webp' },
  { offset: 1.5, img: '/images/showcase/balloon_dark/05.webp' },
  { offset: 2, img: '/images/showcase/balloon_dark/06.webp' },
  { offset: 2.5, img: '/images/showcase/balloon_dark/08.webp' },
  { offset: 3.5, img: '/images/showcase/balloon_dark/07.webp' },
];

const ParallaxBalloonDark = ({
  items = defaultItems,
  className,
}: parallaxProps) => {
  return (
    <Parallax
      className={
        'relative [&_img]:-top-[5%] [&_img]:absolute [&_img]:left-[30%] md:[&_img]:left-[60%] lg:[&_img]:left-1/2 [&_img]:pointer-events-none [&_img]:-translate-x-1/2 [&_img]:h-[110%] aspect-[3/4] md:aspect-[1.8] lg:aspect-[2.25] [&_img]:w-auto [&_img]:max-w-none ' +
        className
      }
      // [&_img]:aspect-[2722/1089]
      borderRadius="24px"
      overflowHiddenEnable={false}
      shadowType="drop"
      lineGlareEnable={false}
      shadow="0 0 1rem rgba(0,0,0,0.7)"
      // offsetMultiplier={1.5}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      spotGlareEnable={false}
    >
      <div className="absolute inset-0 rounded-[24px] overflow-hidden border-2 border-black/30">
        {items.map((item, index) => (
          <Image
            key={index}
            data-parallax-offset={item.offset}
            src={item.img}
            alt=""
            className={
              index === 6
                ? 'animate-balloonFloat lg:!-left-[17.5%] hidden lg:block !-top-[10%]'
                : ''
            }
            width="2722"
            height="1089"
            sizes="(min-width: 1024px) 1024px, 100vw"
            unoptimized
            priority
          />
        ))}
      </div>
      <Image
        data-parallax-offset="4.5"
        src="/images/showcase/balloon_dark/09.webp"
        className="animate-balloonFloat2 lg:!-left-[7%] md:!-left-[10%] !-left-[75%] scale-[85%] md:scale-100 md:!-top-[5%] !-top-[10%]"
        alt=""
        width="2722"
        height="1089"
        sizes="(min-width: 1024px) 1024px, 100vw"
        unoptimized
        priority
      />
    </Parallax>
  );
};

export default ParallaxBalloonDark;
