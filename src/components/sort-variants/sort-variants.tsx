import { useState } from 'react';
import { DEFAULT_SORT_VARIANT, SortVariants } from '../../const';
import { useDispatch } from 'react-redux';
import { offersActions} from '../../store/slices/offers/offers-slice';
import clsx from 'clsx';


export default function SortVariantSelector ():JSX.Element {

  const [isOpened, setOpen] = useState(false);
  //Считаем вариант сортировки из Store
  const dispatch = useDispatch();
  const [currentSortVariant, setCurrentSortVariant] = useState(DEFAULT_SORT_VARIANT);
  //Открываем список сортировки
  const handleSortListOpenClick = (evt :React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;
    if (target.closest('.places__sorting') && target.tagName !== 'LI') {
      setOpen((prevState) =>!prevState);
    }

  };
  //Изменяет текущий вариант сортировки
  const handleChangeVariantClick = (evt :React.MouseEvent<HTMLElement>,sortVariant : SortVariants) => {
    evt.preventDefault();
    setCurrentSortVariant(sortVariant);
    setOpen(false);
    dispatch(offersActions.changeSortVariant(sortVariant));
  };


  return(
    <form className="places__sorting" action="#" method="get"
      onClick ={(evt) =>handleSortListOpenClick(evt)}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex ={0}>
        {currentSortVariant as string}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx('places__options places__options--custom',
        isOpened && 'places__options--opened')}
      >
        {Object.values(SortVariants).map((sortVariant) => (
          <li
            key = {sortVariant}
            onClick = {(evt) =>handleChangeVariantClick(evt,sortVariant)}
            tabIndex ={0}
            className ={clsx('places__option',
              sortVariant === currentSortVariant && 'places__option--active')}
          >
            {sortVariant}
          </li>
        ))}
      </ul>
    </form>

  );

}
