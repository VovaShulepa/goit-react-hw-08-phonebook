import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegAddressBook } from 'react-icons/fa';
import { useAuth } from 'hooks/useAuth';
import css from './Home.module.css';

export default function Home() {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.container}>
      <span className={css.span}>Welcome to service:</span>
      <h1 className={css.title}>Your PhoneBook</h1>
      <FaRegAddressBook size={200} className={css.icon} />
      {!isLoggedIn && (
        <p className={css.paragraph}>
          Please register or login to start using the application:
        </p>
      )}
      {isLoggedIn ? (
        <h3 className={css.description}>
          Hello, <span className={css.spanName}>{user.name}</span>!
          <NavLink to="/contacts" className={css.contacts}>
            Open your contacts
          </NavLink>
        </h3>
      ) : (
        <>
          <NavLink className={css.link} to="/register">
            Sign Up
          </NavLink>

          <NavLink className={css.link} to="/login">
            Sign In
          </NavLink>
        </>
      )}
    </div>
  );
}
