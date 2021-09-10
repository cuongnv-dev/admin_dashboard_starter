import { SplashScreen } from 'components/common';
import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AddEditUserPage } from './add-edit-user/AddEditPage';
import { UsersPage } from './UsersPage';

export default function UsersIndexPage() {
  const match = useRouteMatch();

  return (
    <Suspense fallback={<SplashScreen />}>
      <Switch>
        <Route path={`${match.path}/new`}>
          <AddEditUserPage />
        </Route>
        <Route path={`${match.path}/:userId/edit`}>
          <AddEditUserPage />
        </Route>
        <Route path={match.path}>
          <UsersPage />
        </Route>
      </Switch>
    </Suspense>
  );
}
