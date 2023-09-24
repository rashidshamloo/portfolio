'use client';

// react
import { PropsWithChildren } from 'react';

// redux-toolkit
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@/lib/redux';

// nmext-themes
import { ThemeProvider } from 'next-themes';

// framer-motion
import { LazyMotion, domAnimation } from 'framer-motion';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion features={domAnimation}>
      <ReduxProvider store={reduxStore}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </ReduxProvider>
    </LazyMotion>
  );
};

export default Providers;
