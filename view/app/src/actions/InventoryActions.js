import {
  GET_ALL_INVENTORY,
  GET_ALL_INVENTORY_SUCCESS,
  INVENTORY_API_FAILURE
} from "./types";

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
