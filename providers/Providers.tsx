'use client';

// react
import { PropsWithChildren } from 'react';

// redux-toolkit
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@/lib/redux';

// nmext-themes
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={reduxStore}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
