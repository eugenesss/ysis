/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import inventoryReducer from "./InventoryReducer";
import authUserReducer from "./AuthUserReducer";
import loctiteReducer from "./LoctiteReducer";

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  inventoryState: inventoryReducer,
  loctiteState: loctiteReducer
});

export default reducers;
