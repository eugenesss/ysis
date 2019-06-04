import {
  GET_ALL_INVENTORY,
  GET_ALL_INVENTORY_SUCCESS,
  INVENTORY_API_FAILURE,
  VIEW_INVENTORY,
  VIEW_INVENTORY_SUCCESS
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

export const viewInventory = id => ({
  type: VIEW_INVENTORY,
  payload: id
});
export const viewInventorySuccess = inv => ({
  type: VIEW_INVENTORY_SUCCESS,
  payload: inv
});
