
import { AppRoute, LayOutClasses } from '../../const';
import { hardcoreUser } from '../../mocks/user';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { userActions } from '../../store/slices/user/user-slice';

import { useAuth } from '../../utils/use-auth';
import Logo from '../logo/logo';
import {Link, Outlet, useLocation} from 'react-router-dom';


const getClassesForLayout = (pageRoute : AppRoute,favoritesCount : number):string => {

  switch (pageRoute) {
    case (AppRoute.Login):
      return `${LayOutClasses.PageGray} ${LayOutClasses.PageLogin}`;
    case (AppRoute.Main):
      return `${LayOutClasses.PageGray} ${LayOutClasses.PageMain}`;
    case (AppRoute.Favorites):
      return favoritesCount > 0 ? '' : LayOutClasses.PageFavoritesEmpty;
    case (AppRoute.OfferId || AppRoute.Offer):
      return '';
    default : return '';
  }
};

function LayOutMainNotAuth ():JSX.Element {
  return(
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

function LayOutMainAuth (favoritesCount:number):JSX.Element {
  const { logout } = useActionCreators(userActions);
  return(
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{hardcoreUser.email}</span>
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
}

export default function LayoutMain () :JSX.Element {
  const {pathname : pathName} = useLocation();
  const isAuth = useAuth();


  const favoritesCount = 3;//useFavoriteCount();

  return(

    <div className={`page ${getClassesForLayout(pathName as AppRoute,favoritesCount)}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left" >
              <Logo/>
            </div>
            {(pathName as AppRoute !== AppRoute.Login) &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {(isAuth) ? LayOutMainAuth(favoritesCount) : LayOutMainNotAuth()}
              </ul>
            </nav>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>

  );


}


