// routes
import Dashboard from "Routes/dashboard";
import Inventory from "Routes/inventory";
import Warehouse from "Routes/warehouse";

export default [
  {
    path: "dashboard",
    component: Dashboard
  },
  {
    path: "inventory",
    component: Inventory
  },
  { path: "warehouse", component: Warehouse }
];
