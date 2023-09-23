// types
interface TopWrapperProps extends React.PropsWithChildren {
  separator?: boolean;
  separatorType?: 'waves' | 'steps';
  title?: string;
  className?: string;
  innerClass?: string;
}

const TopWrapper = ({
  children,
  separator = false,
  separatorType = 'waves',
  title,
  className = '',
  innerClass = '',
}: TopWrapperProps) => {
  let separatorImage = '';
  let separatorHeight = 0;
  let maskSize: number | undefined = undefined;
  switch (separatorType) {
    case 'waves':
      separatorImage = 'waves-2';
      separatorHeight = 50;
      maskSize = 100;
      break;
    case 'steps':
      separatorImage = 'steps';
      separatorHeight = 50;
    default:
      break;
  }
  return (
    <section
      className={'relative z-10 ' + className}
      style={{
        marginBottom: `-${separatorHeight}px`,
      }}
      data-section="1"
    >
      {/* using an image for shadow instead of drop-shadow for performance */}
      {separator && (
        <div
          className="pointer-events-none absolute -bottom-[40px] left-0 right-0 -z-[1] h-[80px] bg-[url('/images/shadow.png')]"
          aria-hidden="true"
        />
      )}
      {title && <h1 className="sr-only">{title}</h1>}
      <div
        className={
          'text-mediumViolet/90 relative max-w-full overflow-x-hidden bg-heroBg bg-[length:1.5rem,auto] pb-10 lg:py-0 dark:bg-heroBgDark dark:text-brightBlue/90 flex flex-col items-center justify-center ' +
          (!separator ? `min-h-[calc(100dvh_+_50px)] pb-14 lg:pb-20` : '') +
          innerClass
        }
        style={
          separator
            ? {
                maskImage: `url('/images/${separatorImage}.svg'),linear-gradient(black 95%,transparent 0%)`,
                WebkitMaskImage: `url('/images/${separatorImage}.svg'),linear-gradient(black 95%,transparent 0%)`,
                maskPosition: 'bottom',
                WebkitMaskPosition: 'bottom',
                maskSize: maskSize ? `${maskSize}%` : undefined,
                WebkitMaskSize: maskSize ? `${maskSize}%` : undefined,
                paddingBottom: `calc(${separatorHeight}px + 16px)`,
                minHeight: `calc(100dvh + ${separatorHeight}px)`,
              }
            : {}
        }
      >
        {children}
      </div>
    </section>
  );
};

export default TopWrapper;
