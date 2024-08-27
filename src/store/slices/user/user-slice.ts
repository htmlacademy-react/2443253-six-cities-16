import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { USER_SLICE_NAME } from '../slice-names';
import { User } from '../../../types/user';
import { checkAuth, login, logout } from './user-thunk';
import { UserState } from '../../types';


const initialState: UserState = {
  info: null,
  status: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        checkAuth.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(
        login.fulfilled,
        (state: UserState, action: PayloadAction<User>) => {
          state.info = action.payload;
          state.status = AuthorizationStatus.Auth;
        }
      )
      .addCase(logout.fulfilled, (state: UserState) => {
        state.info = null;
        state.status = AuthorizationStatus.NoAuth;
      })
      .addCase(
        checkAuth.rejected,
        (state: UserState) => {
          state.status = AuthorizationStatus.NoAuth;
        }
      );
  },
  selectors: {
    userStatus: (state) => state.status,
    user: (state) => state.info,
  },
});
export default userSlice;
export const userSelectors = userSlice.selectors;
export const userActions = {...userSlice.actions,checkAuth, login, logout};


