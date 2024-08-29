import { DataPathUrl} from '../../../const';
import { saveToken, dropToken } from '../../../services/token';
import { User } from '../../../types/user';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { USER_SLICE_NAME } from '../slice-names';

type LoginData = {
  email: string;
  password: string;
};

export const checkAuth = createAppAsyncThunk<User, undefined>(
  'user/checkAuth',
  async (_arg, {extra: api }) => {
    const response = await api.get<User>(DataPathUrl.Login);

    return response.data;
  }
);

export const login = createAppAsyncThunk<User, LoginData>(
  `${USER_SLICE_NAME}/login`,
  async (body, { extra: api }) => {
    const response = await api.post<User>(DataPathUrl.Login, body);
    saveToken(response.data.token);

    return response.data;
  }
);

export const logout = createAppAsyncThunk<unknown, undefined>(
  `${USER_SLICE_NAME}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(DataPathUrl.Logout);
    dropToken();
  }
);

