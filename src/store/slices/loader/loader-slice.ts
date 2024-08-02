import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoaderStateType } from '../../types';

const LOADER_SLICE_NAME = 'loader';

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


