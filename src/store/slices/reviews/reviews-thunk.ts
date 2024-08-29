import { DataPathUrl} from '../../../const';
import { Offer } from '../../../types/offer';
import { Review } from '../../../types/review';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';


type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: Offer['id'];
};


export const fetchReviews = createAppAsyncThunk<Review[], Offer['id']>(
  'reviews/fetchReviews',
  async (offerId, {extra: api }) => {
    const response = await api.get<Review[]>(`${DataPathUrl.Comments}/${offerId}`);

    return response.data;
  }
);

export const postReview = createAppAsyncThunk<Review, PostCommentProps>(
  'reviews/postReview',
  async ({ body, offerId }, {extra: api }) => {
    const response = await api.post<Review>(
      `${DataPathUrl.Comments}/${offerId}`,
      body
    );

    return response.data;
  }
);


