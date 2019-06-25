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
 * GET ALL INVENTORY
 */
export const inventoryApiFailure = error => ({
  type: INVENTORY_API_FAILURE,
  payload: error
});

/**
 * GET ALL INVENTORY
 */
export const getAllInventory = () => ({
  type: GET_ALL_INVENTORY
});
export const getAllInventorySuccess = inventory => ({
  type: GET_ALL_INVENTORY_SUCCESS,
  payload: inventory
});

/**
 * View Inventory
 */
export const getInventory = id => ({
  type: GET_INVENTORY,
  payload: id
});
export const getInventorySuccess = inv => ({
  type: GET_INVENTORY_SUCCESS,
  payload: inv
});

/**
 * New Inventory
 */
export const submitInventory = data => ({
  type: SUBMIT_INVENTORY_FORM,
  payload: data
});
export const submitInventorySuccess = data => ({
  type: SUBMIT_INVENTORY_SUCCESS,
  payload: data
});
export const submitInventoryFailure = error => ({
  type: SUBMIT_INVENTORY_FAILURE,
  payload: error
});
