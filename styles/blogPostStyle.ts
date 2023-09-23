const headerStyles =
  ' [&_h2]:text-xl md:[&_h2]:text-2xl [&_h1]:text-2xl md:[&_h1]:text-3xl [&_h1]:leading-[1.5] [&_h1]:text-center [&_h1]:mb-4 [&_h1]:border-b-2 [&_h1]:border-brightBlue dark:[&_h1]:border-darkGrayishBlue [&_h3]:text-lg md:[&_h3]:text-xl [&_h4]:text-lg md:[&_h4]:text-xl [&_h2]:font-merriweather [&_h2]:py-4 [&_h2]:font-bold [&_h1]:font-bold [&_h3]:font-bold [&_h1]:font-merriweather [&_h1]:py-4 [&_h3]:font-merriweather [&_h3]:py-4';

const linkStyles =
  ' [&_a]:underline [&_a]:text-[#668cac] hover:[&_a]:text-accent/70 [&_a]:transition-all [&_a]:duration-300';

const listStyles =
  ' [&_li>p:not(:first-child)]:my-4 [&_ul]:m-4 [&_ul_ul]:my-1 [&_ol]:m-4 [&_blockquote]:ml-4 [&_ol>li]:relative [&_ol>li]:pl-[1.5rem] [&_ol>li]:bg-[length:14px] [&_ol>li]:bg-[url("/images/heart.svg")] [&_ol>li]:bg-no-repeat [&_ol>li]:bg-[left_0.25rem] md:[&_ol>li]:bg-[left_0.375rem] [&_ul>li]:relative [&_ul>li]:pl-[1.5rem] [&_ul>li]:bg-[length:14px] [&_ul>li]:bg-[url("/images/heart.svg")] [&_ul>li]:bg-no-repeat [&_ul>li]:bg-[left_0.25rem] md:[&_ul>li]:bg-[left_0.375rem] [&_li>p]:p-0';

const imageStyles = ' [&_img]:rounded-lg';

const hrStyles =
  ' [&_hr]:my-8 dark:[&_hr]:border-darkGrayishBlue [&_hr]:border-brightBlue [&_hr]:max-w-[75%] [&_hr]:mx-auto [&_hr]:border-y-[1px]';

export const className =
  ' dark:[&_pre]:bg-black/30 [&_pre]:text-base [&_pre]:my-2 [&_pre]:overflow-x-auto [&_pre]:bg-brightBlue/70 [&_pre_code]:!p-0 [&_pre_code]:!bg-transparent [&_pre]:p-4 [&_pre]:rounded-lg md:text-lg text-darkGrayishBlue dark:text-brightBlue [&_em]:font-bold [&_p]:py-1 [&_img]:mx-auto dark:[&_code]:bg-white/10 [&_code]:bg-black/10 [&_code]:rounded-md [&_code]:px-1 [&_p>code]:bg-black/10 [&_.js-actions-panel]:!hidden [&_iframe]:!mx-auto [&_iframe]:!max-w-full [&_iframe]:!rounded-lg [&_iframe]:overflow-hidden [&_iframe]:my-2 ' +
  headerStyles +
  linkStyles +
  listStyles +
  imageStyles +
  hrStyles;
