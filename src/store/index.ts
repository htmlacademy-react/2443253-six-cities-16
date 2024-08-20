import { configureStore } from '@reduxjs/toolkit';
import {rootReducers} from './slices/rootRedusers.ts';

import { createAPI } from '../services/api.ts';


export const api = createAPI();


export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

