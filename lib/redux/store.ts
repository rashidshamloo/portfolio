/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

/* Instruments */
import { reducer } from './rootReducer';
import { middleware } from './middleware';

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production')
      return getDefaultMiddleware().concat(middleware);
    return getDefaultMiddleware();
  },
});
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

// Cypress

// interface CypressWithStore extends Cypress.Cypress {
//   store?: ReduxStore;
// }

// declare global {
//   interface Window {
//     Cypress?: CypressWithStore;
//   }
// }

// if (typeof window !== 'undefined' && window.Cypress) {
//   window.Cypress.store = reduxStore;
// }
