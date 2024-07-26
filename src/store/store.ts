import { configureStore } from '@reduxjs/toolkit';
import offerReducer from './offerSlice.ts';


export const store = configureStore({
  reducer: {
    offers : offerReducer,
  },
});
