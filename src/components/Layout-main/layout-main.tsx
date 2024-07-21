import { AppRoute, AuthorizationStatus, LayOutClasses } from '../../const';
import { User } from '../../types/user';
import Logo from '../logo/logo';
import {Link, Outlet, useLocation} from 'react-router-dom';

type LayoutMainProps ={
  favoritesCount:number;
  authStatus:AuthorizationStatus;
  currentUser:User;
}

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

export default function LayoutMain ({favoritesCount,authStatus,currentUser}:LayoutMainProps) :JSX.Element {
  const {pathname : pathName} = useLocation();
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
                {(authStatus === AuthorizationStatus.Auth) &&
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{currentUser.email}</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>

                </li>}
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">{authStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in' }</span>
                  </a>
                </li>
              </ul>
            </nav>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>

  );


}


