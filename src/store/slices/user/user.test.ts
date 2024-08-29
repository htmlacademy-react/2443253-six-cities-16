import { AuthorizationStatus} from '../../../const';
import { User } from '../../../types/user';

import userSlice from './user-slice';
import { checkAuth, login, logout } from './user-thunk';

const mockUser:User = {
  id: Math.random(),
  name : 'Дима',
  email : 'Diman@gmail.com',
  token: '',
  avatarUrl:'',
  isPro:false
};


describe('Users Slice (ExtraRedusers)', () => {

  const initialState = {
    info: null,
    status: AuthorizationStatus.Unknown,
  };
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const result = userSlice.reducer(initialState, emptyAction);
    expect(result).toEqual(initialState);
  });

  it('should return AuthorizationStatus.Auth when checkAuth.fulfilled', () => {
    const expectedState = {
      info: mockUser,
      status: AuthorizationStatus.Auth,
    };
    const result = userSlice.reducer(initialState, checkAuth.fulfilled(mockUser,'',undefined));
    expect(result).toEqual(expectedState);

  });
  it('should return AuthorizationStatus.Auth when login.fulfilled', () => {
    const expectedState = {
      info: mockUser,
      status: AuthorizationStatus.Auth,
    };
    const result = userSlice.reducer(initialState, login.fulfilled(mockUser,'',{email:mockUser.email,password:''}));
    expect(result).toEqual(expectedState);

  });

  it('should return AuthorizationStatus.NoAuth when checkAuth.rejected', () => {
    const expectedState = {
      info: null,
      status: AuthorizationStatus.NoAuth,
    };
    const result = userSlice.reducer(initialState, checkAuth.rejected(null,'',undefined));
    expect(result).toEqual(expectedState);

  });

  it('should return AuthorizationStatus.NoAuth when logout.fulfilled', () => {
    const expectedState = {
      info: mockUser,
      status: AuthorizationStatus.NoAuth,
    };
    const result = userSlice.reducer(initialState, logout.fulfilled(mockUser,'',undefined));
    expect(result).toEqual(expectedState);

  });
});
