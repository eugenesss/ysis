import * as types from "Types/InventoryTypes";

/**
 * GET ALL INVENTORY
 */
export const inventoryApiFailure = error => ({
  type: types.INVENTORY_API_FAILURE,
  payload: error
});

/**
 * GET ALL INVENTORY
 */
export const getAllInventory = () => ({
  type: types.GET_ALL_INVENTORY
});
export const getAllInventorySuccess = inventory => ({
  type: types.GET_ALL_INVENTORY_SUCCESS,
  payload: inventory
});
export const changeInvList = option => ({
  type: types.ON_CHANGE_INVENTORY_LIST,
  payload: option
});

/**
 * View Inventory
 */
export const getInventory = id => ({
  type: types.GET_INVENTORY,
  payload: id
});
export const getInventorySuccess = inv => ({
  type: types.GET_INVENTORY_SUCCESS,
  payload: inv
});

/**
 * New Inventory
 */
export const submitInventory = data => ({
  type: types.SUBMIT_INVENTORY_FORM,
  payload: data
});
export const submitInventorySuccess = data => ({
  type: types.SUBMIT_INVENTORY_SUCCESS,
  payload: data
});
export const submitInventoryFailure = error => ({
  type: types.SUBMIT_INVENTORY_FAILURE,
  payload: error
});
export const clearInventoryForm = () => ({
  type: types.CLEAR_INVENTORY_FORM
});
export const handleInvFormChange = (field, value) => ({
  type: types.HANDLE_INV_FORM_CHANGE,
  payload: { field, value }
});

// Edit
export const startEditInventory = id => ({
  type: types.START_EDIT_INVENTORY,
  payload: id
});
export const startEditInventorySuccess = data => ({
  type: types.START_EDIT_INVENTORY_SUCCESS,
  payload: data
});
export const startEditInventoryFailure = error => ({
  type: types.START_EDIT_INVENTORY_FAILURE,
  payload: error
});
