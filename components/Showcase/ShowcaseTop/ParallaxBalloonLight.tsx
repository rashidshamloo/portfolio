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
  { offset: -1, img: '/images/showcase/balloon_light/07.webp' },
  { offset: 0, img: '/images/showcase/balloon_light/02.webp' },
  { offset: 1, img: '/images/showcase/balloon_light/04.webp' },
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
        'relative [&_img]:-top-[5%] [&_img]:absolute [&_img]:left-[30%] md:[&_img]:left-[60%] lg:[&_img]:left-1/2 [&_img]:pointer-events-none [&_img]:-translate-x-1/2 [&_img]:h-[110%] aspect-[3/4] md:aspect-[1.8] lg:aspect-[2.25] [&_img]:w-auto [&_img]:max-w-none ' +
        className
      }
      borderRadius="24px"
      overflowHiddenEnable={false}
      shadowType="drop"
      lineGlareEnable={false}
      shadow="0 0 1rem rgba(0,0,0,0.5)"
      offsetMultiplier={1.5}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      spotGlareEnable={false}
    >
      <div className="absolute inset-0 rounded-[24px] overflow-hidden border-2 border-white/80">
        {items.map((item, index) => (
          <Image
            key={index}
            data-parallax-offset={item.offset}
            src={item.img}
            alt=""
            className={
              index === 5
                ? 'animate-float lg:!left-[46%] hidden lg:block !-top-[10%]'
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
        className="animate-float2 lg:!left-1/2 md:!left-[62%] !left-[85%] scale-[85%] md:scale-100 !-top-[12.5%]"
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
