// next
import Image from 'next/image';

// react-flip-tilt
import { FlipTilt } from 'react-flip-tilt';

const FlipTiltDemo = () => {
  return (
    <FlipTilt
      className="w-[60%] max-w-[280px] lg:w-1/2"
      borderRadius="12px"
      borderWidth="16px"
      front="/images/packages/front.webp"
      back={
        <div
          className="pointer-events-none relative grid h-full rounded-xl transform-style-3d backface-hidden [&>*]:backface-hidden"
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
            className="col-start-1 col-end-1 row-start-1 row-end-1 object-contain translate-z-16 scale-125 transform"
            alt="Flower"
            sizes="350px"
            fill
          />
          <Image
            src="/images/packages/text.webp"
            className="col-start-1 col-end-1 row-start-1 row-end-1 object-contain translate-z-36 scale-125 transform"
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
