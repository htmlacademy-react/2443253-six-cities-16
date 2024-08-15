import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { UserStateType } from '../../types';

const USER_SLICE_NAME = 'user';

const initialState : UserStateType = {
  authStatus: AuthorizationStatus.Auth,
};


export const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: initialState,
  reducers: {
    requireAuthorization(state, action:PayloadAction<AuthorizationStatus>) {
      state.authStatus = action.payload;
    },
  },
  selectors: {
    authStatus: (state:UserStateType) => state.authStatus,
  }
});

export default userSlice;
export const userSelectors = userSlice.selectors;


