import { DataPathUrl} from '../../../const';
import { OfferPreview} from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { ChangeProps, ChangeResponse} from '../../types';

const fetchFavorites = createAppAsyncThunk<OfferPreview[], undefined>(
  'favorites/fetchAll',
  async (_arg, { extra: api }) => {

    const response = await api.get<OfferPreview[]>(DataPathUrl.Favorite);
    return response.data;
  }
);

const changeFavorites = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorites/change',
  async ({ offerId, status }, {extra: api }) => {
    const response = await api.post<OfferPreview>(
      `${DataPathUrl.Favorite}/${offerId}/${status}`
    );
    return { offer: response.data, status };
  }
);

export { changeFavorites, fetchFavorites };
