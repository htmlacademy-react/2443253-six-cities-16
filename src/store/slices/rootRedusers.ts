import { combineReducers } from '@reduxjs/toolkit';
import {offerSlice} from './offer-slice';


export const rootReducers = combineReducers({
  [offerSlice.name] : offerSlice.reducer
});
