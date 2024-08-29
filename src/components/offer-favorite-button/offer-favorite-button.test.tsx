
import { BookmarkSizeMap } from '../../const';
import { withHistory } from '../../app/mock-component';
import OfferFavoriteButton from './offer-favorite-button';
import { mockOffersPreview } from '../../mocks/offers';
import { render,screen } from '@testing-library/react';


describe('ButtonFavorite',() => {

  it('should return component ButtonFavorite', () => {

    const buttonFavoriteTestId = 'offer-favorite-button';
    const extraClass = 'place-card_bookmark-button-active';

    const componentButtonFavorite = withHistory(
      <OfferFavoriteButton
        width={BookmarkSizeMap.small.width} height={BookmarkSizeMap.small.height}
        isFavorite isPreview
        offerId={mockOffersPreview[0].id}
      />
    );
    render(componentButtonFavorite);
    expect(screen.getByTestId(buttonFavoriteTestId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonFavoriteTestId)).not.toHaveClass(extraClass);
  });
}
);
