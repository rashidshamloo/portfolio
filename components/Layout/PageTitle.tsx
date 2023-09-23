// components
import Transition from '@/components/Common/Transition';

const PageTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <Transition
      component="h1"
      className="mx-auto text-[1.85rem] font-bold sm:text-4xl md:text-[2.25rem] xl:text-5xl font-merriweather [&_*:first-child]:first-letter:text-accent [&_*:first-child]:first-letter:text-[1.5em] uppercase mt-20"
      effect="textReveal"
      duration={0.75}
    >
      {children}
    </Transition>
  );
};

export default PageTitle;
