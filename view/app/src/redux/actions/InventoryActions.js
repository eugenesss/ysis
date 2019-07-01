import * as invType from "Types/InventoryTypes";

/**
 * GET ALL INVENTORY
 */
export const inventoryApiFailure = error => ({
  type: invType.INVENTORY_API_FAILURE,
  payload: error
});

/**
 * GET ALL INVENTORY
 */
export const getAllInventory = () => ({
  type: invType.GET_ALL_INVENTORY
});
export const getAllInventorySuccess = inventory => ({
  type: invType.GET_ALL_INVENTORY_SUCCESS,
  payload: inventory
});
export const changeInvList = option => ({
  type: invType.ON_CHANGE_INVENTORY_LIST,
  payload: option
});

/**
 * View Inventory
 */
export const getInventory = id => ({
  type: invType.GET_INVENTORY,
  payload: id
});
export const getInventorySuccess = inv => ({
  type: invType.GET_INVENTORY_SUCCESS,
  payload: inv
});

/**
 * New Inventory
 */
export const submitInventory = data => ({
  type: invType.SUBMIT_INVENTORY_FORM,
  payload: data
});
export const submitInventorySuccess = data => ({
  type: invType.SUBMIT_INVENTORY_SUCCESS,
  payload: data
});
export const submitInventoryFailure = error => ({
  type: invType.SUBMIT_INVENTORY_FAILURE,
  payload: error
});
// Edit

export const startEditInventory = id => ({
  type: invType.START_EDIT_INVENTORY,
  payload: id
});
export const startEditInventorySuccess = data => ({
  type: invType.START_EDIT_INVENTORY_SUCCESS,
  payload: data
});
export const startEditInventoryFailure = error => ({
  type: invType.START_EDIT_INVENTORY_FAILURE,
  payload: error
});
