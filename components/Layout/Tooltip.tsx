import { ReactNode, forwardRef } from 'react';

// types
interface TooltipProps {
  children: ReactNode;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className = '' }: TooltipProps, ref) => {
    return (
      <div
        ref={ref}
        className={
          'absolute bottom-[calc(100%_+_10px)] w-[max-content] rounded-full bg-slate-300 px-3 py-[2px] text-slate-700 drop-shadow-[0_0_1px_rgb(51,65,85)] after:absolute after:left-1/2 after:top-full after:border-[6px] after:border-[rgb(203,213,225)_transparent_transparent_transparent] after:-translate-x-1/2 ' +
          className
        }
      >
        {children}
      </div>
    );
  },
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
