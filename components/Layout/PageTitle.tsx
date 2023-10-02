// components
import Transition from '@/components/Common/Transition';

const PageTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <Transition
      component="h1"
      className="mx-auto mt-16 font-merriweather text-[1.85rem] font-bold uppercase sm:text-4xl md:text-[2.25rem] lg:mt-20 xl:text-5xl [&_*:first-child]:first-letter:text-[1.5em] [&_*:first-child]:first-letter:text-accent"
      effect="textReveal"
      duration={0.75}
    >
      {children}
    </Transition>
  );
};

export default PageTitle;
