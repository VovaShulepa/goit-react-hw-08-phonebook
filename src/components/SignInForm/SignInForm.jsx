import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import operations from 'redux/auth/auth-operations';
import css from './SignInForm.module.css';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [isSigninForm, setIsSigninForm] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSigninForm(true);
    dispatch(
      operations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(res => {
        toast.success(`Welcome back ${res.payload.user.name}👋`);
      })
      .finally(() => {
        setIsSigninForm(false);
        form.reset();
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          className={css.label}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.label}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>
      {isSigninForm ? (
        <Loader />
      ) : (
        <button className={css.formBtn} type="submit">
          Sign In
        </button>
      )}
    </form>
  );
};
