import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAuth } from 'hooks/useAuth';
import operations from 'redux/auth/auth-operations';
import { RestrictedRoute } from 'route/RestrictedRoute';
import { PrivateRoute } from 'route/PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const SighUpPage = lazy(() => import('../pages/SignUp'));
const SighInPage = lazy(() => import('../pages/SignIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SighUpPage />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<SighInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" navigateTo="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
