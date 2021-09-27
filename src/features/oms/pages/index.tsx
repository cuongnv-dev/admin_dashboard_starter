import { SplashScreen } from 'components/common';
import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { OrdersPage } from './OrdersPage';
// import { AddEditUserPage } from "./add-edit-user/AddEditPage";
// import { UsersPage } from "./UsersPage";

export default function OrderManagementPage() {
  const match = useRouteMatch();

  return (
    <Suspense fallback={<SplashScreen />}>
      <Switch>
        {/* <Route path={`${match.path}/new`}>
          <AddEditUserPage />
        </Route>
        <Route path={`${match.path}/:userId/edit`}>
          <AddEditUserPage />
        </Route> */}
        <Route path={match.path}>
          <OrdersPage />
        </Route>
      </Switch>
    </Suspense>
  );
}
