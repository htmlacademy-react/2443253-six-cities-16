import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoaderStateType } from '../../types';
import { LOADER_SLICE_NAME } from '../slice-names';


const initialState : LoaderStateType = {
  loaderStatus: false,
};


export const loaderSlice = createSlice({
  name: LOADER_SLICE_NAME,
  initialState: initialState,
  reducers: {
    changeLoaderStatus(state, action:PayloadAction<boolean>) {
      state.loaderStatus = action.payload;
    },
  },
  selectors: {
    loaderStatus: (state:LoaderStateType) => state.loaderStatus,
  }
});

export const loaderActions = loaderSlice.actions;
export const loaderSelectors = loaderSlice.selectors;


