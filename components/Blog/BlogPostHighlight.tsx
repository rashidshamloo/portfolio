'use client';

// react
import { useEffect } from 'react';

// highlight.js
import hljs from 'highlight.js/lib/common';
import '@/styles/highlight.scss';
hljs.configure({});

const MDBlogPost = ({ postBody }: { postBody: string }) => {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('pre').forEach((ele) => {
      ele.innerHTML = hljs.highlightAuto(ele.textContent || ele.innerText, [
        'css',
        'javascript',
        'typescript',
        'html',
        'plaintext',
      ]).value;
    });
  }, []);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: postBody,
      }}
    />
  );
};

export default MDBlogPost;
