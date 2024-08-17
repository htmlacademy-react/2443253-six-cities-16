import { DATA_PATH_URL} from '../../../const';
import { Offer } from '../../../types/offer';
import { Review } from '../../../types/review';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { loaderActions } from '../loader/loader-slice';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: Offer['id'];
};


export const fetchReviews = createAppAsyncThunk<Review[], Offer['id']>(
  'reviews/fetchReviews',
  async (offerId, { dispatch,extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.get<Review[]>(`${DATA_PATH_URL.Comments}/${offerId}`);
    dispatch(loaderActions.changeLoaderStatus(false));

    return response.data;
  }
);

export const postReview = createAppAsyncThunk<Review, PostCommentProps>(
  'reviews/postReview',
  async ({ body, offerId }, {dispatch,extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.post<Review>(
      `${DATA_PATH_URL.Comments}/${offerId}`,
      body
    );
    dispatch(loaderActions.changeLoaderStatus(true));

    return response.data;
  }
);
