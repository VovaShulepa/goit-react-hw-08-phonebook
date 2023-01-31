import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import operations from './auth-operations';

const extraActions = [
  operations.register,
  operations.logOut,
  operations.logIn,
  operations.refreshCurrentUser,
];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshUser: false,
  isLoading: false,
  error: null,
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operations.refreshCurrentUser.pending, state => {
        state.isRefreshUser = true;
        state.isLoading = true;
      })
      .addCase(operations.refreshCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshUser = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(
        operations.refreshCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshUser = false;
        }
      )

      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
