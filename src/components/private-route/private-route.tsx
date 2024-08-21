import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAuth } from '../../hooks/use-auth';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { userSelectors } from '../../store/slices/user/user-slice';

type PrivateRouteProps = {
  children: JSX.Element;
  unAuth?: boolean;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children,unAuth} = props;
  const isAuth = useAuth();
  const location = useLocation();
  const userStatus = useAppSelector(userSelectors.userStatus);

  if(userStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }


  if(isAuth && unAuth) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const from = location.state?.from || { pathname: '/' };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return <Navigate to={from} />;
  }

  if(!isAuth && !unAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />;
  }

  return children;
}


