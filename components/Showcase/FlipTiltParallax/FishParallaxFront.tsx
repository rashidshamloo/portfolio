// next
import Image from 'next/image';

// types
interface FishParallaxProps {
  index: number;
}

const FishParallaxFront = ({ index }: FishParallaxProps) => {
  return (
    <div className="pointer-events-none relative aspect-[35/46] w-[350px] max-w-full [&>img]:absolute [&>img]:-inset-[7%] [&>img]:h-[114%] [&>img]:w-[114%] [&>img]:max-w-none">
      <Image
        src={`/images/showcase/fish/${String(index).padStart(2, '0')}.webp`}
        alt=""
        className=" brightness-[115%] contrast-[90%] grayscale-[30%]  saturate-[75%]"
        width="350"
        height="460"
        unoptimized
      />
    </div>
  );
};

export default FishParallaxFront;
