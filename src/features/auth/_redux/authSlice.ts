import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

export interface AuthState {
  currentUser?: User | undefined;
  authToken?: string | undefined;
}

const initialState: AuthState = {
  currentUser: undefined,
  authToken: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.authToken = action.payload.authToken;
      state.currentUser = action.payload;
    },

    logout(state) {
      state.currentUser = undefined;
      state.authToken = undefined;
    },
    fulfillUser(state, { payload }: PayloadAction<User | undefined>) {
      state.currentUser = payload;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
