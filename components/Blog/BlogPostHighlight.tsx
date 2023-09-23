// react
import { useEffect } from 'react';

// highlight.js
import hljs from 'highlight.js/lib/common';
import '@/styles/highlight.scss';
hljs.configure({});

const MDBlogPost = ({ postBody }: { postBody: string }) => {
  useEffect(() => {
    hljs.highlightAll();
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
