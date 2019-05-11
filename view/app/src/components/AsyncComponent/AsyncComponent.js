/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

//  dashboard
export const AsyncDashboardComponent = Loadable({
  loader: () => import("Routes/dashboard"),
  loading: () => <RctPageLoader />
});

//  inventory
export const AsyncInventoryViewAllComponent = Loadable({
  loader: () => import("Routes/inventory/all"),
  loading: () => <RctPageLoader />
});
export const AsyncInventoryNewComponent = Loadable({
  loader: () => import("Routes/inventory/new"),
  loading: () => <RctPageLoader />
});
export const AsyncLoctiteComponent = Loadable({
  loader: () => import("Routes/inventory/loctite"),
  loading: () => <RctPageLoader />
});
export const AsyncInventoryAdjustmentsComponent = Loadable({
  loader: () => import("Routes/inventory/adjustments"),
  loading: () => <RctPageLoader />
});

//  warehouse
export const AsyncWarehouse1Component = Loadable({
  loader: () => import("Routes/warehouse/warehouse_1"),
  loading: () => <RctPageLoader />
});
export const AsyncWarehouse2Component = Loadable({
  loader: () => import("Routes/warehouse/warehouse_2"),
  loading: () => <RctPageLoader />
});
export const AsyncWarehouse3Component = Loadable({
  loader: () => import("Routes/warehouse/warehouse_3"),
  loading: () => <RctPageLoader />
});
