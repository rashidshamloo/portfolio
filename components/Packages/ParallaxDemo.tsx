'use client';

// next
import Image from 'next/image';

// components
import { Parallax } from 'react-next-parallax';

const ParallaxDemo = () => {
  return (
    <Parallax
      className="aspect-[35/46] w-[60%] max-w-[280px] lg:w-1/2"
      borderRadius="12px"
      overflowHiddenEnable={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
    >
      <div className="pointer-events-none relative h-full w-full [&>img]:absolute [&>img]:!-inset-[5%] [&>img]:!h-[110%] [&>img]:!w-[110%] [&>img]:max-w-none">
        <Image
          data-parallax-offset="-5"
          src="/images/showcase/fish_parallax/01.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="-3.5"
          data-parallax-rotation="0;5"
          src="/images/showcase/fish_parallax/02.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="-2"
          data-parallax-rotation="5;0"
          src="/images/showcase/fish_parallax/03.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="0"
          src="/images/showcase/fish_parallax/04.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="2"
          src="/images/showcase/fish_parallax/05.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="3.5"
          src="/images/showcase/fish_parallax/06.webp"
          alt=""
          sizes="350px"
          fill
        />
        <Image
          data-parallax-offset="2"
          src={`/images/showcase/fish_parallax/fish02.webp`}
          alt=""
          sizes="350px"
          fill
          className="animate-fishFloat"
        />
        <Image
          data-parallax-offset="5"
          src="/images/showcase/fish_parallax/07.webp"
          alt=""
          sizes="350px"
          fill
          className="animate-bubbleFloat"
        />
      </div>
    </Parallax>
  );
};

export default ParallaxDemo;
