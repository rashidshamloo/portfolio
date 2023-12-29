// components
import Transition from '@/components/Common/Transition';

const PageInfo = ({ children }: React.PropsWithChildren) => {
  return (
    <Transition
      component="p"
      className="mx-[5%] mt-2 max-w-2xl text-center leading-7 tracking-wide lg:mx-auto lg:mt-4 lg:leading-8 xl:text-lg"
    >
      {children}
    </Transition>
  );
};

export default PageInfo;
