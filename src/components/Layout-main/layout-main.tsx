
import { AppRoute, LayOutClasses } from '../../const';
import { useFavoriteCount } from '../../hooks/use-favorites';
import { Header } from '../header/header';
import {Outlet, useLocation} from 'react-router-dom';

type LayoutMainProps = {
  isAuth : boolean;
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


export default function LayoutMain ({isAuth}:LayoutMainProps) :JSX.Element {
  const {pathname : pathName} = useLocation();
  const favoritesCount = useFavoriteCount();

  return(
    <div className={`page ${getClassesForLayout(pathName as AppRoute,favoritesCount)}`}>
      <Header favoritesCount={favoritesCount} isAuth={isAuth} pathName={pathName as AppRoute}/>
      <Outlet />
    </div>
  );


}


