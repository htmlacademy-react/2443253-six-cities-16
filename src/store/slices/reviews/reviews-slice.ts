import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../../services/api';
import { REVIEWS_SLICE_NAME } from '../slice-names';
import { fetchReviews, postReview } from './reviews-thunk';
import { isActionPending, isActionRejected } from '../../../utils/redux';
import { ReviewsState } from '../../types';


const initialState: ReviewsState = {
  items: [],
  status: RequestStatus.Idle
};

export const reviewsSlice = createSlice({
  name: REVIEWS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(postReview.fulfilled,
        (state, action) => {
          state.items.push(action.payload);
        })
      .addMatcher(isActionPending(REVIEWS_SLICE_NAME), (state) => {
        state.status = RequestStatus.Loading;
      })
      .addMatcher(isActionRejected(REVIEWS_SLICE_NAME), (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    reviews: (state:ReviewsState) => state.items,
    reviewsStatus: (state:ReviewsState) => state.status,
  },
});

export const reviewsActions = {...reviewsSlice.actions,fetchReviews,postReview};
export const reviewsSelectors = {...reviewsSlice.selectors};

