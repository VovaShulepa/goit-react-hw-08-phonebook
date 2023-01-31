const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUsername = state => state.auth.user;
const selectIsRefreshCurrentUser = state => state.auth.isRefreshUser;
const selectToken = state => state.auth.token;
const selectError = state => state.auth.error;
const selectIsLoading = state => state.auth.isLoading;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectIsRefreshCurrentUser,
  selectToken,
  selectError,
  selectIsLoading,
};

export default authSelectors;
