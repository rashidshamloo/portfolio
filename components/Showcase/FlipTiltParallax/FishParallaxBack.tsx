// next
import Image from 'next/image';

// types
interface FishParallaxProps {
  index: number;
}

const FishParallaxBack = ({ index }: FishParallaxProps) => {
  return (
    <div className="pointer-events-none relative aspect-[35/46] w-[350px] max-w-full [&>img]:absolute [&>img]:-inset-[7%] [&>img]:h-[114%] [&>img]:w-[114%] [&>img]:max-w-none">
      <Image
        data-parallax-offset="-5"
        src="/images/showcase/fish_parallax/01.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="-3.5"
        data-parallax-rotation="0;5"
        src="/images/showcase/fish_parallax/02.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="-2"
        data-parallax-rotation="5;0"
        src="/images/showcase/fish_parallax/03.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="0"
        src="/images/showcase/fish_parallax/04.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="2"
        src="/images/showcase/fish_parallax/05.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="3.5"
        src="/images/showcase/fish_parallax/06.webp"
        alt=""
        width="350"
        height="460"
        unoptimized
      />
      <Image
        data-parallax-offset="2"
        src={`/images/showcase/fish_parallax/fish${String(index).padStart(
          2,
          '0',
        )}.webp`}
        alt=""
        className="animate-fishFloat"
        width="350"
        height="460"
        unoptimized
      />
      {index === 5 && (
        <Image
          data-parallax-offset="1"
          src={`/images/showcase/fish_parallax/fish05_2.webp`}
          alt=""
          className="animate-fishFloat2"
          width="350"
          height="460"
          unoptimized
        />
      )}
      <Image
        data-parallax-offset="5"
        src="/images/showcase/fish_parallax/07.webp"
        alt=""
        className="animate-bubbleFloat"
        width="350"
        height="460"
        unoptimized
      />
    </div>
  );
};

export default FishParallaxBack;
