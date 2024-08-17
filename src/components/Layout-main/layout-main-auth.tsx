import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { userActions } from '../../store/slices/user/user-slice';
import { useFavoriteCount } from '../../utils/use-favorites';


export const LayOutMainAuth = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { logout } = useActionCreators(userActions);
  const favoritesCount = 1;//useFavoriteCount();
  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
          <span className="header__favorite-count">{favoritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <span className="header__nav-link" onClick={() => logout()}>
          <span className="header__signout">Sign out</span>
        </span>
      </li>
    </>
  );
};
