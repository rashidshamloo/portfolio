// next
import Link from 'next-intl/link';

// glass class
import glassClass from '@/styles/glassProvider';

// types
import { Pages } from '@/types/types';
interface PaginationProps {
  pages: Pages;
  url: string;
  sidePageCount?: number;
  className?: string;
}

const Pagination = ({
  pages: { total, current },
  url,
  sidePageCount = 2,
  className,
}: PaginationProps) => {
  const pagesToShow: number[] = [];

  const addPage = (...nums: number[]) => {
    for (const num of nums)
      if (!pagesToShow.includes(num) && num >= 1 && num <= total)
        pagesToShow.push(num);
  };

  addPage(1, total, current);
  for (let i = 1; i <= sidePageCount; i++) addPage(current + i, current - i);
  pagesToShow.sort((a, b) => a - b);

  const pagesToShowString: string[] = [];

  for (let i = 0; i < pagesToShow.length; i++) {
    pagesToShowString.push(String(pagesToShow[i]));
    if (pagesToShow[i + 1] - pagesToShow[i] === 2)
      pagesToShowString.push(String(pagesToShow[i] + 1));
    else if (pagesToShow[i + 1] - pagesToShow[i] > 2)
      pagesToShowString.push('...');
  }

  return (
    <div
      className={
        'flex gap-2 [&>*]:flex [&>*]:select-none [&>*]:items-center [&>*]:justify-center [&>*]:rounded-lg [&>*]:px-2 hover:[&>a.glass]:bg-grayishGreen/20 dark:hover:[&>a.glass]:bg-grayishGreen/20 [&>a]:transition-all [&>a]:duration-300 hover:[&>a]:text-accent ' +
        className +
        glassClass
      }
    >
      {current > 1 && (
        <Link className="glass" href={url + (current - 1)}>
          &lt;
        </Link>
      )}
      {pagesToShowString.map((page, index) =>
        page === '...' ? (
          <div key={index} className="glass">
            {page}
          </div>
        ) : page === String(current) ? (
          <div key={index} className="glass !bg-grayishGreen/20 text-accent">
            {page}
          </div>
        ) : (
          <Link key={index} className="glass" href={url + page}>
            {page}
          </Link>
        ),
      )}
      {current < total && (
        <Link className="glass" href={url + total}>
          &gt;
        </Link>
      )}
    </div>
  );
};

export default Pagination;
