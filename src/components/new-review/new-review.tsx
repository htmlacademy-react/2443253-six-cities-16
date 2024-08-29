import { ChangeEvent, useState } from 'react';
import { reviewsActions, reviewsSelectors } from '../../store/slices/reviews/reviews-slice';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { RequestStatus } from '../../services/api';
import { toast } from 'react-toastify';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, ratings, textError } from '../../const';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import RatingStar from '../rating-star/rating-star';


type NewReview ={
    comment:string;
    rating:number;
}
type NewReviewProps ={
  offerId:string;
}


export default function NewReview ({offerId}:NewReviewProps){


  const reviewsStatus = useAppSelector(reviewsSelectors.reviewsStatus);
  const dispatch = useAppDispatch();
  const [newReview, setReviewData] = useState({comment:'', rating:0});


  //Обработчик изменения текста
  const handleCommentChange = (evt: { target: { name: string; value: string } }) => {
    const {value} = evt.target;
    setReviewData({...newReview, comment: value});
  };
  //Обработчик изменения рейтинга
  const handleStarChange = (({ target }: ChangeEvent<HTMLInputElement>) =>
    setReviewData({ ...newReview, rating: Number(target.value) }
    ));


  //Обработчик добавления отзыва
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();


    if (newReview.comment.length < MIN_COMMENT_LENGTH || newReview.comment.length > MAX_COMMENT_LENGTH) {
      return toast.error(textError.textErrorReviewValidation);
    }

    dispatch(
      reviewsActions.postReview({body:
          {comment : newReview.comment,rating:newReview.rating}
      ,offerId:offerId})
    )
      .unwrap().then(() => {
        setReviewData({comment:'', rating:0});
        toast.success('Your review has been submitted');
      })
      .catch(() => toast.error('Error adding review'));

  };

  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleFormSubmit}
    >

      <fieldset style={{border:'0 none'}} disabled={(reviewsStatus === RequestStatus.Loading)}>

        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {
            ratings.map((item) => (
              <RatingStar
                key = {item.stars}
                rating={item.stars}
                title={item.title}
                onRatingChange={handleStarChange}
              />
            ))

          }
        </div>
        <textarea
          onChange={handleCommentChange}
          className="reviews__textarea form__textarea" id="review"
          name="review"
          value = {newReview.comment}
          placeholder="Tell how was your stay, what you like and what can be improved"
        >


        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          {
            <button className="reviews__submit form__submit button" type="submit"
              disabled={(reviewsStatus === RequestStatus.Loading) || !newReview.comment || !newReview.rating}
            >Submit
            </button>
          }

        </div>
      </fieldset>
    </form>

  );
}

