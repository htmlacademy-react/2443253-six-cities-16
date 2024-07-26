import { FormEvent, useState } from 'react';

type NewReview ={
  review:string;
  rating:number;
}

type NewReviewProps = {
  onReviewSubmit: (newReview:NewReview) => void;
};
type RatingStarProps ={
  newReview:NewReview;
  rating : number;
  onRatingChange : (rating:number) => void;
}
function RatingStar ({newReview,rating,onRatingChange} : RatingStarProps){
  const mouseClockHandler = () => {
    if (onRatingChange){
      onRatingChange(rating);
    }
  };
  return(
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={newReview.rating}
        onChange = {mouseClockHandler}
        id={`${rating}-stars`} type="radio"
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width='37' height='33'>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default function NewReview ({onReviewSubmit}:NewReviewProps){

  const [newReview, setReviewData] = useState({review:'', rating:0});

  const handleReviewChange = (evt: { target: { name: string; value: string } }) => {
    const {name, value} = evt.target;
    setReviewData({...newReview, [name]: value});
  };

  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onReviewSubmit(newReview);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [5,4,3,2,1].map((item) => (
            <RatingStar
              key = {item}
              newReview={newReview}
              rating={item}
              onRatingChange={(rating) => setReviewData({...newReview, rating : rating})}
            />
          ))
        }
      </div>
      <textarea
        onChange={handleReviewChange}
        className="reviews__textarea form__textarea" id="review"
        name="review"
        value = {newReview.review}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >


      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {
          newReview.review || newReview.rating ? (
            <button className="reviews__submit form__submit button" type="submit" >Submit
            </button>)
            :
            (
              <button className="reviews__submit form__submit button" type="submit" disabled> Submit
              </button>)
        }

      </div>
    </form>

  );
}
