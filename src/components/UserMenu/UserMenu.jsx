import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import operations from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>
      <button
        className={css.btnLogin}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
};
