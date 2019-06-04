import React from "react";
import { Route, Switch } from "react-router-dom";

// async components
import {
  AsyncInventoryViewAllComponent,
  AsyncInventoryNewComponent,
  AsyncLoctiteComponent,
  AsyncInventoryAdjustmentsComponent,
  AsyncViewSingleInventory
} from "Components/AsyncComponent/AsyncComponent";

const InventorySwitcher = ({ match }) => (
  <div className="saas-dashboard">
    <Switch>
      <Route
        path={`${match.url}/all`}
        component={AsyncInventoryViewAllComponent}
      />
      <Route path={`${match.url}/new`} component={AsyncInventoryNewComponent} />
      <Route path={`${match.url}/loctite`} component={AsyncLoctiteComponent} />
      <Route
        path={`${match.url}/adjustments`}
        component={AsyncInventoryAdjustmentsComponent}
      />
      <Route path={`${match.url}/:id`} component={AsyncViewSingleInventory} />
    </Switch>
  </div>
);
export default InventorySwitcher;
