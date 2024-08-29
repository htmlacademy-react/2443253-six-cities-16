import { RequestStatus } from '../../../services/api';
import { fetchFavorites } from './favorites-thunk';
import { favoritesSlice } from './favorites-slice';


describe('Favorite Slice', () => {
  const initialState = {
    status: RequestStatus.Idle,
    items: [],
  };
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = favoritesSlice.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return favorites offers = success when fetchFavoriteAction.fulfilled', () => {
    const expectedState = {
      status: RequestStatus.Success,
      items: [],

    };
    const result = favoritesSlice.reducer(initialState, fetchFavorites.fulfilled([],'',undefined));
    expect(result).toEqual(expectedState);

  });

});
