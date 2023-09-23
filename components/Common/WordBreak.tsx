// react
import React from 'react';

// next-intl
import { useLocale } from 'next-intl';

// budoux
import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

// marked
import { marked } from 'marked';

// types
interface wordBreakProps extends React.PropsWithChildren {
  markdown?: boolean;
}

const WordBreak = ({ children, markdown = false }: wordBreakProps) => {
  const locale = useLocale();

  if (markdown && typeof children === 'string') {
    const renderer = new marked.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };
    marked.setOptions({ renderer, mangle: false, headerIds: false });
    return (
      <span
        dangerouslySetInnerHTML={{
          __html:
            locale === 'ja'
              ? parser.translateHTMLString(marked.parse(children))
              : marked.parse(children),
        }}
      ></span>
    );
  }

  return (
    <>
      {typeof children === 'string' && locale === 'ja' && parser
        ? parser.parse(children).map((word, index) => (
            <span className="inline-block" key={index}>
              {word}
            </span>
          ))
        : children}
    </>
  );
};

export default WordBreak;
