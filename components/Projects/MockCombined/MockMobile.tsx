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
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
        tabIndex={0}
        artia-label="Mobile View"
      >
        <Image
          width="150"
          height="0"
          src={image}
          alt="Mobile View"
          aria-hidden="true"
          className="aspect-auto w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/projects/phone-mock-no-notch.webp')] bg-cover bg-no-repeat"></div>
    </div>
  );
};

export default MockMobile;
