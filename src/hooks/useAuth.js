import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshCurrentUser);
  const user = useSelector(authSelectors.selectUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
