// next
import Image from 'next/image';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

const TiltDemo = () => {
  return (
    <Tilt className="w-[60%] max-w-[280px] lg:w-1/2" borderRadius="12px">
      <div
        className="pointer-events-none relative grid aspect-[350/460] h-full rounded-xl transform-style-3d backface-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/packages/bg.webp"
          className="col-start-1 col-end-1 row-start-1 row-end-1 inline-block h-full w-full rounded-xl object-cover"
          alt="Background"
          sizes="350px"
          fill
        />
        <Image
          src="/images/packages/flower.webp"
          className="col-start-1 col-end-1 row-start-1 row-end-1 object-contain translate-z-16 transform"
          alt="Flower"
          sizes="350px"
          fill
        />
        <Image
          src="/images/packages/text.webp"
          className="col-start-1 col-end-1 row-start-1 row-end-1 object-contain translate-z-36 transform"
          alt="Saffron"
          sizes="350px"
          fill
        />
      </div>
    </Tilt>
  );
};

export default TiltDemo;
