import { DATA_PATH_URL} from '../../../const';
import { OfferPreview} from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { ChangeProps, ChangeResponse} from '../../types';

const fetchFavorites = createAppAsyncThunk<OfferPreview[], undefined>(
  'favorites/fetchAll',
  async (_arg, { extra: api }) => {

    const response = await api.get<OfferPreview[]>(DATA_PATH_URL.Favorite);
    return response.data;
  }
);

const changeFavorites = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorites/change',
  async ({ offerId, status }, {extra: api }) => {
    const response = await api.post<OfferPreview>(
      `${DATA_PATH_URL.Favorite}/${offerId}/${status}`
    );
    return { offer: response.data, status };
  }
);

export { changeFavorites, fetchFavorites };
