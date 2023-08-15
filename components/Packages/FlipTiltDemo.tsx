// next
import Image from 'next/image';

// react-flip-tilt
import { FlipTilt } from 'react-flip-tilt';

const FlipTiltDemo = () => {
  return (
    <FlipTilt
      className="w-[60%] lg:w-1/2 max-w-[280px]"
      borderRadius="12px"
      borderWidth="24px"
      front="/images/packages/front.webp"
      back={
        <div
          className="relative pointer-events-none grid h-full rounded-xl backface-hidden transform-style-3d [&>*]:backface-hidden"
          aria-hidden="true"
        >
          <Image
            src="/images/packages/bg.webp"
            className="col-start-1 col-end-1 row-start-1 row-end-1 inline-block h-full w-full object-cover"
            alt="Background"
            sizes="350px"
            fill
          />
          <Image
            src="/images/packages/flower.webp"
            className="col-start-1 col-end-1 row-start-1 row-end-1 scale-125 translate-z-16 transform object-contain"
            alt="Flower"
            sizes="350px"
            fill
          />
          <Image
            src="/images/packages/text.webp"
            className="col-start-1 col-end-1 row-start-1 row-end-1 scale-125 translate-z-36 transform object-contain"
            alt="Saffron"
            sizes="350px"
            fill
          />
        </div>
      }
    />
  );
};

export default FlipTiltDemo;
