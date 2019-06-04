import { NotificationManager } from "react-notifications";
import {
  GET_ALL_INVENTORY,
  GET_ALL_INVENTORY_SUCCESS,
  INVENTORY_API_FAILURE,
  VIEW_INVENTORY,
  VIEW_INVENTORY_SUCCESS
} from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  allInventory: [],
  allInventoryLoading: false,
  singleItem: null,
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
      return INIT_STATE;
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
    //=========================
    //  VIEW INVENTORY
    //=========================
    case VIEW_INVENTORY:
      return { ...state, singleItemLoading: true };
    case VIEW_INVENTORY_SUCCESS:
      return { ...state, singleItem: action.payload, singleItemLoading: false };

    default:
      return { ...state };
  }
};
