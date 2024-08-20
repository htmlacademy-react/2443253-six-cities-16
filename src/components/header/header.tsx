import { AppRoute } from '../../const';
import { LayOutMainAuth, LayOutMainNotAuth } from '../layout-main/layout-main-auth';
import Logo from '../logo/logo';


type HeaderProps = {
  favoritesCount:number;
  isAuth:boolean;
  pathName:AppRoute;
}

export function Header({favoritesCount,isAuth,pathName}:HeaderProps) {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left" >
            <Logo/>
          </div>
          {(pathName !== AppRoute.Login) &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ? LayOutMainAuth(favoritesCount) : LayOutMainNotAuth()}
              </ul>
            </nav>}
        </div>
      </div>
    </header>

  );
}
