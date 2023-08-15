// next
import Image from 'next/image';

// types
interface mockMobileProps {
  image: string;
}

const MockMobile = ({ image }: mockMobileProps) => {
  return (
    <div className={`relative aspect-[200/387] w-full overflow-auto`}>
      <div
        className="relative mx-auto mt-[9.25%] aspect-[200/433] w-[80.5%] overflow-y-scroll rounded-lg [&::-webkit-scrollbar]:hidden"
        // calc(100%_/_1.24)
        // 80.5%
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <Image
          width="150"
          height="0"
          src={image}
          alt="Mobile View"
          aria-hidden="true"
          className="w-full aspect-auto"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/projects/phone-mock-no-notch.webp')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default MockMobile;
