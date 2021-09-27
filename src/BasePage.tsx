import { SplashScreen } from 'components/common';
import { DashboardPage } from 'features/dashboard/pages';
import { MasterDataPage } from 'features/masterData/pages';
import OrderManagementPage from 'features/oms/pages';
import UsersIndexPage from 'features/users/pages';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// const UserProfilepage = lazy(() =>
//   import("./modules/UserProfile/UserProfilePage")
// );

export default function BasePage() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/users" component={UsersIndexPage} />
        <Route path="/master-data" component={MasterDataPage} />
        <Route path="/oms" component={OrderManagementPage} />
        <Redirect to="error" />
      </Switch>
    </Suspense>
  );
}
