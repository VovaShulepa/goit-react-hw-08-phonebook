import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import operations from 'redux/auth/auth-operations';

import css from './SignUpForm.module.css';
import { Loader } from 'components/Loader/Loader';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSubmittingForm(true);
    dispatch(
      operations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      // .then(res => toast.success(`Welcome, ${res.meta.arg.name}`))
      .catch(err =>
        toast.error(`User ${form.elements.name.value} already registered`)
      )
      .finally(() => {
        setIsSubmittingForm(false);
        form.reset();
      });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className={css.label}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
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
      {isSubmittingForm ? (
        <Loader />
      ) : (
        <button className={css.formBtn} type="submit">
          Sign Up
        </button>
      )}
    </form>
  );
};
