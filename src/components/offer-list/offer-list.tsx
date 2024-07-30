import {OfferPreview} from '../../types/offer';
import clsx from 'clsx';


type OfferListProps = {
  offers: OfferPreview[];
  extraClassName? : string;
  children : (data: OfferPreview) => React.ReactNode;
}


export function OfferList ({offers,extraClassName,children}:OfferListProps){


  return(
    <div className={clsx('places__list',extraClassName && extraClassName)}>
      {
        offers.map((data) =>
          children(data)
        )
      }
    </div>


  );

}
