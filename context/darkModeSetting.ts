import { createContext } from 'react';

type darkModeType =
  | [
      boolean | undefined,
      React.Dispatch<React.SetStateAction<boolean | undefined>>
    ]
  | null;

const darkModeSetting = createContext<darkModeType>(null);

export default darkModeSetting;
