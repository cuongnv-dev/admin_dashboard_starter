import { Redirect, Route, Switch } from 'react-router-dom';
import { MasterCategoriesPage } from './masterCategories';
import { MasterItemsPage } from './masterItems';
import { MasterSubCategoriesPage } from './masterSubCategories';
import { SyncMenuPage } from './syncMenu';

export const MasterDataPage = () => {
  return (
    <Switch>
      <Redirect exact={true} from="/master-data" to="/master-data/items" />
      {/* Master items */}
      <Route path="/master-data/items" component={MasterItemsPage} />

      {/* Master categories */}
      <Route path="/master-data/categories" component={MasterCategoriesPage} />

      {/* Master sub categories */}
      <Route path="/master-data/sub-categories" component={MasterSubCategoriesPage} />

      {/* sync menu */}
      <Route path="/master-data/sync-menu" component={SyncMenuPage} />
    </Switch>
  );
};
