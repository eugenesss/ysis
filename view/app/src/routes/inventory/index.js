import React from "react";
import { Route, Switch } from "react-router-dom";

// async components
import {
  AsyncInventoryViewAllComponent,
  AsyncInventoryNewComponent
} from "Components/AsyncComponent/AsyncComponent";

const InventorySwitcher = ({ match }) => (
  <div className="saas-dashboard">
    <Switch>
      <Route
        path={`${match.url}/all`}
        component={AsyncInventoryViewAllComponent}
      />
      <Route path={`${match.url}/new`} component={AsyncInventoryNewComponent} />
    </Switch>
  </div>
);
export default InventorySwitcher;
