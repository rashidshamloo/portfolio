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
  { offset: -4.5, img: '/images/showcase/balloon_light/01.webp' },
  { offset: -3, img: '/images/showcase/balloon_light/03.webp' },
  { offset: -2, img: '/images/showcase/balloon_light/02.webp' },
  { offset: -1, img: '/images/showcase/balloon_light/04.webp' },
  { offset: 2, img: '/images/showcase/balloon_light/07.webp' },
  { offset: 3, img: '/images/showcase/balloon_light/05.webp' },
  { offset: 4.5, img: '/images/showcase/balloon_light/08.webp' },
];

const ParallaxBalloon = ({
  items = defaultItems,
  className,
}: parallaxProps) => {
  return (
    <Parallax
      className={
        'relative aspect-[3/4] md:aspect-[1.8] lg:aspect-[2.25] [&_img]:pointer-events-none [&_img]:absolute [&_img]:-top-[5%] [&_img]:left-[30%] [&_img]:h-[110%] [&_img]:w-auto [&_img]:max-w-none [&_img]:-translate-x-1/2 md:[&_img]:left-[60%] lg:[&_img]:left-1/2 ' +
        className
      }
      borderRadius="24px"
      overflowHiddenEnable={false}
      shadowType="drop"
      lineGlareEnable={false}
      shadow="0 0 1rem rgba(0,0,0,0.5)"
      // offsetMultiplier={1}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      spotGlareEnable={false}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[24px] border-2 border-white/80">
        {items.map((item, index) => (
          <Image
            key={index}
            data-parallax-offset={item.offset}
            src={item.img}
            alt=""
            className={
              index === 5
                ? '!-top-[5%] hidden animate-balloonFloat lg:!-left-[7%] lg:block'
                : ''
            }
            width="2296"
            height="1020"
            sizes="(min-width: 1024px) 1024px, 100vw"
            unoptimized
            priority
          />
        ))}
      </div>
      <Image
        data-parallax-offset="4.5"
        src="/images/showcase/balloon_light/06.webp"
        className="!-left-[75%] !-top-[15%] animate-balloonFloat2 scale-[85%] md:!-left-[10%] md:!-top-[10%] md:scale-100 lg:!-left-[7%]"
        alt=""
        width="2296"
        height="1020"
        sizes="(min-width: 1024px) 1024px, 100vw"
        unoptimized
        priority
      />
    </Parallax>
  );
};

export default ParallaxBalloon;
