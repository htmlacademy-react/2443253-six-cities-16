import { RequestStatus } from '../../../services/api';
import { changeFavorites, fetchFavorites } from './favorites-thunk';
import { favoritesSlice } from './favorites-slice';
import { mockOffersPreview } from '../../../mocks/offers';
import { ChangeProps, ChangeResponse, FavoritesStatus } from '../../types';


describe('Favorite Slice', () => {
  const initialState = {
    status: RequestStatus.Idle,
    items: [],
  };
  const initialStateToRemove = {
    status: RequestStatus.Idle,
    items: [mockOffersPreview[0]],
  };

  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = favoritesSlice.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return favorites offers = success when fetchFavoriteAction.fulfilled', () => {
    const mocksFavorites = mockOffersPreview;
    const expectedState = {
      status: RequestStatus.Success,
      items: [mocksFavorites],

    };
    const result = favoritesSlice.reducer(initialState, fetchFavorites.fulfilled(mocksFavorites,'',undefined));
    expect(result).toEqual(expectedState);

  });
  it('should return statusFavorite = Added when changeFavoriteAction.fulFilled', () => {
    const addedFavoriteOffer:ChangeResponse = {offer:mockOffersPreview[0],status:FavoritesStatus.Added};
    const changeProps:ChangeProps = {offerId:mockOffersPreview[0].id,status:FavoritesStatus.Added};
    const expectedState = {
      status: RequestStatus.Success,
      items: [mockOffersPreview[0]]
    };
    const result = favoritesSlice.reducer(initialState, changeFavorites.fulfilled(addedFavoriteOffer,'',changeProps));
    expect(result).toEqual(expectedState);

  });
  it('should return statusFavorite = Removed when changeFavoriteAction.fulFilled', () => {
    const removedFavoriteOffer:ChangeResponse = {offer:mockOffersPreview[0],status:FavoritesStatus.Removed};
    const changeProps:ChangeProps = {offerId:mockOffersPreview[0].id,status:FavoritesStatus.Removed};

    const expectedState = {
      status: RequestStatus.Success,
      items: []
    };
    const result = favoritesSlice.reducer(initialStateToRemove, changeFavorites.fulfilled(removedFavoriteOffer,'',changeProps));
    expect(result).toEqual(expectedState);

  });

});
