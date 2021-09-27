/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { useAppSelector } from 'store';
import { ErrorPage } from 'components/common';
import { AdminLayout } from 'components/Layout';
import { LoginPage } from 'features/auth/pages';
import React from 'react';
import { shallowEqual } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import BasePage from './BasePage';

export function Routes() {
  const { isAuthorized } = useAppSelector(
    ({ auth }) => ({
      isAuthorized: auth.currentUser != null,
    }),
    shallowEqual
  );
  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <LoginPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorPage} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <AdminLayout>
          <BasePage />
        </AdminLayout>
      )}
    </Switch>
  );
}
