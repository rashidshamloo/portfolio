// components
import Transition from '@/components/Common/Transition';

const PageInfo = ({ children }: React.PropsWithChildren) => {
  return (
    <Transition
      component="p"
      className="mx-[5%] mt-2 leading-8 tracking-wide lg:mx-auto lg:mt-4 xl:text-lg max-w-2xl text-center"
    >
      {children}
    </Transition>
  );
};

export default PageInfo;
