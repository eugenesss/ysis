import {
  GET_ALL_LOCTITE,
  GET_ALL_LOCTITE_SUCCESS,
  LOCTITE_API_FAILURE,
  VIEW_LOCTITE,
  VIEW_LOCTITE_SUCCESS
} from "Types";

/**
 * GET ALL Loctite
 */
export const loctiteApiFailure = error => ({
  type: LOCTITE_API_FAILURE,
  payload: error
});

/**
 * GET ALL Loctite
 */
export const getAllLoctite = () => ({
  type: GET_ALL_LOCTITE
});
export const getAllLoctiteSuccess = Loctite => ({
  type: GET_ALL_LOCTITE_SUCCESS,
  payload: Loctite
});

/**
 * View Loctite
 */

export const viewLoctite = id => ({
  type: VIEW_LOCTITE,
  payload: id
});
export const viewLoctiteSuccess = inv => ({
  type: VIEW_LOCTITE_SUCCESS,
  payload: inv
});
