import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { userActions } from '../../store/slices/user/user-slice';


export const LayOutAuth = (favoritesCount: number) => {
  const { logout } = useActionCreators(userActions);
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
        <span className="header__nav-link" onClick={() => {
          logout();
        }}
        >
          <span className="header__signout">Sign out</span>
        </span>
      </li>
    </>
  );
};
