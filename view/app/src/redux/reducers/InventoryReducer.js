import { NotificationManager } from "react-notifications";
import * as types from "Types/InventoryTypes";

/**
 * initial auth user
 */
const INIT_STATE = {
  inventoryList: {
    tableData: [],
    loading: false,
    nowShowing: "All Inventory",
    options: ["All Inventory", "Warehouse 1", "Warehouse 2", "AMK #3"]
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
    case types.INVENTORY_API_FAILURE:
      NotificationManager.error("Inventory API Error");
      console.log(action.payload);
      return INIT_STATE;

    //=========================
    //  GET ALL INVENTORY
    //=========================
    case types.GET_ALL_INVENTORY:
      return {
        ...state,
        inventoryList: { ...state.inventoryList, loading: true }
      };
    case types.GET_ALL_INVENTORY_SUCCESS:
      return {
        ...state,
        inventoryList: {
          ...state.inventoryList,
          loading: false,
          tableData: action.payload
        }
      };
    case types.ON_CHANGE_INVENTORY_LIST:
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
    case types.GET_INVENTORY:
      return { ...state, itemToView: { loading: true } };
    case types.GET_INVENTORY_SUCCESS:
      return { ...state, itemToView: { loading: false, item: action.payload } };

    //=========================
    //  New INVENTORY
    //=========================
    case types.SUBMIT_INVENTORY_FORM:
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: true }
      };
    case types.SUBMIT_INVENTORY_SUCCESS:
      NotificationManager.success("Successfully created Item");
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: false }
      };
    case types.SUBMIT_INVENTORY_FAILURE:
      NotificationManager.error("Error in POST api");
      console.log(action.payload);
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, loading: false }
      };
    case types.CLEAR_INVENTORY_FORM:
      return { ...state, inventoryForm: INIT_STATE.inventoryForm };
    case types.HANDLE_INV_FORM_CHANGE:
      return {
        ...state,
        inventoryForm: {
          ...state.inventoryForm,
          item: {
            ...state.inventoryForm.item,
            [action.payload.field]: action.payload.value
          }
        }
      };

    //=========================
    //  Edit INVENTORY
    //=========================
    case types.START_EDIT_INVENTORY:
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, modalLoading: true }
      };
    case types.START_EDIT_INVENTORY_SUCCESS:
      return {
        ...state,
        inventoryForm: {
          ...state.inventoryForm,
          modalLoading: false,
          item: action.payload
        }
      };
    case types.START_EDIT_INVENTORY_FAILURE:
      NotificationManager.error("Error in fetching Item");
      console.log(action.payload);
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, modalLoading: false }
      };

    case types.EDIT_INVENTORY:
      return {
        ...state,
        inventoryForm: { ...state.inventoryForm, modalLoading: true }
      };
    case types.EDIT_INVENTORY_SUCCESS:
      NotificationManager.success("Successfully edit Item");
      return { ...state, modalLoading: false };
    case types.EDIT_INVENTORY_FAILURE:
      NotificationManager.error("Error in edit item");
      console.log(action.payload);
      return { ...state, modalLoading: false };
    default:
      return { ...state };
  }
};
