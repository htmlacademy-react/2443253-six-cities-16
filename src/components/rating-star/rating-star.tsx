import { ChangeEvent } from 'react';

type RatingStarProps ={
  title:string;
  rating : number;
  onRatingChange : ({ target }: ChangeEvent<HTMLInputElement>) => void;
}
export default function RatingStar ({title,rating,onRatingChange} : RatingStarProps){

  return(
    <>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        onChange = {onRatingChange}
        id={`${rating}-stars`}
        type="radio"
      />
      <label htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label" title={title}
      >
        <svg className="form__star-image" width='37' height='33'>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
