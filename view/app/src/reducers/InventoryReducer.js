import { NotificationManager } from "react-notifications";
import {
  GET_ALL_INVENTORY,
  GET_ALL_INVENTORY_SUCCESS,
  INVENTORY_API_FAILURE
} from "Actions/types";

/**
 * initial auth user
 */
const INIT_STATE = {
  allInventory: [],
  allInventoryLoading: false,
  singleItem: {},
  singleItemLoading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //=========================
    //  API FAILURE
    //=========================
    case INVENTORY_API_FAILURE:
      NotificationManager.error("Inventory API Error");
      console.log(action.payload);
      return { ...state };
    //=========================
    //  GET ALL INVENTORY
    //=========================
    case GET_ALL_INVENTORY:
      return { ...state, allInventoryLoading: true };
    case GET_ALL_INVENTORY_SUCCESS:
      return {
        ...state,
        allInventory: action.payload,
        allInventoryLoading: false
      };

    default:
      return { ...state };
  }
};
