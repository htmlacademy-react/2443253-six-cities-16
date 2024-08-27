import { OFFERS_DETAIL } from '../../../mocks/offers';
import { RequestStatus } from '../../../services/api';

import { reviewsSlice } from './reviews-slice';
import { fetchReviews } from './reviews-thunk';

describe('ExtraReducers ReviewsSlice', () => {
  const initialState = {
    items: [],
    status: RequestStatus.Idle
  };
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = reviewsSlice.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return loading when fetchReviews.pending', () => {
    const expectedState = {
      items: [],
      status: RequestStatus.Loading
    };
    const result = reviewsSlice.reducer(initialState, fetchReviews.pending('',''));
    expect(result).toEqual(expectedState);

  });
  it('should return success when fetchReviews.fulfilled', () => {
    const mocksReviews = OFFERS_DETAIL[0].reviews;
    const expectedState = {
      items: mocksReviews,
      status: RequestStatus.Success,
    };
    const result = reviewsSlice.reducer(initialState, fetchReviews.fulfilled(mocksReviews,'',''));
    expect(result).toEqual(expectedState);

  });
  it('should return Failed when fetchReviews.rejected', () => {
    const expectedState = {
      items: [],
      status: RequestStatus.Failed

    };
    const result = reviewsSlice.reducer(initialState, fetchReviews.rejected(null,'',''));
    expect(result).toEqual(expectedState);

  });
});
