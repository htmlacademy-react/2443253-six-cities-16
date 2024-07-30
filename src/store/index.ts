import { configureStore } from '@reduxjs/toolkit';
import {rootReducers} from './slices/rootRedusers.ts';

import {offerSlice} from './slices/offer-slice.ts';
export default offerSlice;


export const store = configureStore({
  reducer: rootReducers,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

