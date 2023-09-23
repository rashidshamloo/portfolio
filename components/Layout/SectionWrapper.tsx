// types
interface SectionWrapperProps extends React.PropsWithChildren {
  separator?: boolean;
  separatorImage?: string;
  separatorHeight?: number;
  innerClass?: string;
  zIndex?: number;
  className?: string;
}

const SectionWrapper = ({
  children,
  separator = true,
  separatorImage = 'waves-2',
  separatorHeight = 50,
  innerClass = '',
  zIndex = 1,
  className = '',
}: SectionWrapperProps) => {
  return (
    <section
      className={'relative ' + className}
      style={{
        marginBottom: separator ? `-${separatorHeight}px` : undefined,
        zIndex,
      }}
      data-section="1"
    >
      {/* using an image for shadow instead of drop-shadow for performance */}
      {separator && (
        <div
          className="pointer-events-none absolute left-0 right-0 h-[80px] bg-[url('/images/shadow.png')]"
          aria-hidden="true"
          style={{ bottom: `-${separatorHeight - 10}px` }}
        />
      )}
      <div
        className={`relative z-[1] text-mediumViolet/90 max-w-full overflow-hidden dark:text-brightBlue/90 flex flex-col ${innerClass} ${
          separator ? 'pb-[50px] lg:pb-[100px]' : ''
        }`}
        style={
          separator
            ? {
                maskImage: `url('/images/${separatorImage}.svg'),linear-gradient(black 95%,transparent 0%)`,
                WebkitMaskImage: `url('/images/${separatorImage}.svg'),linear-gradient(black 95%,transparent 0%)`,
                maskPosition: 'bottom',
                WebkitMaskPosition: 'bottom',
                maskSize: '150%',
                WebkitMaskSize: '150%',
                minHeight: `calc(100vh + ${separatorHeight * 2}px)`,
                paddingTop: `calc(${separatorHeight * 2}px)`,
              }
            : {
                minHeight: `calc(100dvh + 100px)`,
              }
        }
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
