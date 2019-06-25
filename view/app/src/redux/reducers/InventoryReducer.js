import { NotificationManager } from "react-notifications";
import {
  GET_ALL_INVENTORY,
  GET_ALL_INVENTORY_SUCCESS,
  INVENTORY_API_FAILURE,
  GET_INVENTORY,
  GET_INVENTORY_SUCCESS,
  SUBMIT_INVENTORY_FORM,
  SUBMIT_INVENTORY_SUCCESS,
  SUBMIT_INVENTORY_FAILURE
} from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  allInventory: [],
  allInventoryLoading: false,
  singleItem: null,
  singleItemLoading: false,
  inventoryFormLoading: false
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
    case GET_INVENTORY:
      return { ...state, singleItemLoading: true };
    case GET_INVENTORY_SUCCESS:
      return { ...state, singleItem: action.payload, singleItemLoading: false };

    //=========================
    //  New INVENTORY
    //=========================
    case SUBMIT_INVENTORY_FORM:
      return { ...state, inventoryFormLoading: true };
    case SUBMIT_INVENTORY_SUCCESS:
      NotificationManager.success("Item Created");
      return { ...state, inventoryFormLoading: false };
    case SUBMIT_INVENTORY_FAILURE:
      NotificationManager.danger("Error in POST api");
      console.log(action.payload);
      return { ...state, inventoryFormLoading: false };

    default:
      return { ...state };
  }
};
