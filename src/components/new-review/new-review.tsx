import { FormEvent, useState } from 'react';

type NewReview ={
  review:string;
  rating:number;
}

type NewReviewProps = {
  onReviewSubmit: (newReview:NewReview) => void;
};


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

        <input className="form__rating-input visually-hidden"
          name="rating"
          value={newReview.rating}
          onChange = {() =>setReviewData({...newReview, rating : 5})}
          id="5-stars" type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input className="form__rating-input visually-hidden"
          name="rating"
          value={newReview.rating}
          onChange = {() =>setReviewData({...newReview, rating : 4})}
          id="4-stars" type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value={newReview.rating}
          onChange = {() =>setReviewData({...newReview, rating : 3})}
          id="3-stars" type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value={newReview.rating}
          onChange = {() =>setReviewData({...newReview, rating : 3})}
          id="2-stars" type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value={newReview.rating}
          onChange = {() =>setReviewData({...newReview, rating : 1})}
          id="1-star" type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
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
