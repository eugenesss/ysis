import { NotificationManager } from "react-notifications";
import * as invType from "Types/InventoryTypes";

/**
 * initial auth user
 */
const INIT_STATE = {
  inventoryList: {
    tableData: [],
    loading: false,
    nowShowing: "All Inventory",
    options: ["All Inventory", "Warehouse 1", "Warehouse 2"]
  },
  itemToView: {
    item: null,
    loading: false
  },
  inventoryForm: {
    loading: false,
    modalLoading: false,
    item: {
      name: "",
      price: 0,
      code: "",
      material: "",
      category: "",
      unit: 0,
      quantity: 0,
      perBox: 0,
      rack: "",
      warehouse: "",
      description: ""
    }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //=========================
    //  API FAILURE
    //=========================
    case invType.INVENTORY_API_FAILURE:
      NotificationManager.error("Inventory API Error");
      console.log(action.payload);
      return INIT_STATE;

    //=========================
    //  GET ALL INVENTORY
    //=========================
    case invType.GET_ALL_INVENTORY:
      return {
        ...state,
        inventoryList: { ...state.inventoryList, loading: true }
      };
    case invType.GET_ALL_INVENTORY_SUCCESS:
      return {
        ...state,
        inventoryList: {
          ...state.inventoryList,
          loading: false,
          tableData: action.payload
        }
      };
    case invType.ON_CHANGE_INVENTORY_LIST:
      return {
        ...state,
        inventoryList: {
          ...state.inventoryList,
          nowShowing: action.payload,
          loading: true
        }
      };

    //=========================
    //  VIEW INVENTORY
    //=========================
    case invType.GET_INVENTORY:
      return { ...state, itemToView: { loading: true } };
    case invType.GET_INVENTORY_SUCCESS:
      return { ...state, itemToView: { loading: false, item: action.payload } };

    //=========================
    //  New INVENTORY
    //=========================
    case invType.SUBMIT_INVENTORY_FORM:
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: true }
      };
    case invType.SUBMIT_INVENTORY_SUCCESS:
      NotificationManager.success("Item Created");
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: false }
      };
    case invType.SUBMIT_INVENTORY_FAILURE:
      NotificationManager.danger("Error in POST api");
      console.log(action.payload);
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: false }
      };

    //=========================
    //  Edit INVENTORY
    //=========================
    case invType.START_EDIT_INVENTORY:
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, modalLoading: true }
      };
    case invType.START_EDIT_INVENTORY_SUCCESS:
      return {
        ...state,
        inventoryForm: {
          ...state.inventoryForm,
          modalLoading: false,
          item: action.payload
        }
      };
    case invType.START_EDIT_INVENTORY_FAILURE:
      NotificationManager.error("Error in fetching Item");
      console.log(action.payload);
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, modalLoading: false }
      };
    default:
      return { ...state };
  }
};
