'use client';

// react
import { PropsWithChildren } from 'react';

// redux-toolkit
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@/lib/redux';

const Providers = ({ children }: PropsWithChildren) => {
  return <ReduxProvider store={reduxStore}>{children}</ReduxProvider>;
};

export default Providers;
