import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../../services/api';
import { OFFER_SLICE_NAME } from '../slice-names';
import { fetchOffer, fetchNearBy } from './offer-thunk';
import { OfferState } from '../../types';


const initialState: OfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};

export const offerSlice = createSlice({
  name: OFFER_SLICE_NAME,
  initialState,
  reducers: {
    clear: (state) => {
      state.info = null;
      state.nearby = [];
    },
    updateOffer: (state, action: PayloadAction<string>) => {
      state.info =
        state.info?.id === action.payload
          ? { ...state.info, isFavorite: !state.info?.isFavorite }
          : state.info;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      });
  },
  selectors: {
    nearbyOffers: (state) => state.nearby,
    offer: (state) => state.info,
  },
});

export const offerActions = offerSlice.actions;
export const offerSelectors = offerSlice.selectors;
