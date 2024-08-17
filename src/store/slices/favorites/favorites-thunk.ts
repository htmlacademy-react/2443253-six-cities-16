import { DATA_PATH_URL} from '../../../const';
import { OfferPreview, Offer } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { ChangeProps, ChangeResponse} from '../../types';
import { loaderActions } from '../loader/loader-slice';


const fetchFavorites = createAppAsyncThunk<OfferPreview[], undefined>(
  'favorites/fetchAll',
  async (_arg, { dispatch,extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.get<OfferPreview[]>(DATA_PATH_URL.Favorite);
    dispatch(loaderActions.changeLoaderStatus(false));

    return response.data;
  }
);

const changeFavorites = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorites/change',
  async ({ offerId, status }, {dispatch, extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.post<Offer>(
      `${DATA_PATH_URL.Favorite}/${offerId}/${status}`
    );
    dispatch(loaderActions.changeLoaderStatus(false));

    return { offer: response.data, status };
  }
);

export { changeFavorites, fetchFavorites };
