import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../store/hooks/useAppSelector';
import { userSelectors } from '../store/slices/user/user-slice';

export const useAuth = () => {
  const status = useAppSelector(userSelectors.userStatus);
  return status === AuthorizationStatus.Auth;
};
