import * as types from "Types/LoctiteTypes";

/**
 * Loctite API failure
 */
export const loctiteApiFailure = error => ({
  type: types.LOCTITE_API_FAILURE,
  payload: error
});

/**
 * GET ALL Loctite
 */
export const getAllLoctite = () => ({
  type: types.GET_ALL_LOCTITE
});
export const getAllLoctiteSuccess = Loctite => ({
  type: types.GET_ALL_LOCTITE_SUCCESS,
  payload: Loctite
});

/**
 * View Loctite
 */

export const viewLoctite = id => ({
  type: types.VIEW_LOCTITE,
  payload: id
});
export const viewLoctiteSuccess = inv => ({
  type: types.VIEW_LOCTITE_SUCCESS,
  payload: inv
});

/**
 * New Loctite
 */
export const submitLoctite = data => ({
  type: types.SUBMIT_LOCTITE_FORM,
  payload: data
});
export const submitLoctiteSuccess = data => ({
  type: types.SUBMIT_LOCTITE_SUCCESS,
  payload: data
});
export const submitLoctiteFailure = error => ({
  type: types.SUBMIT_LOCTITE_FAILURE,
  payload: error
});
export const clearLoctiteForm = () => ({
  type: types.CLEAR_LOCTITE_FORM
});
export const handleLoctiteForm = (field, value) => ({
  type: types.HANDLE_LOCTITE_FORM,
  payload: { field, value }
});

// Edit
export const startEditLoctite = id => ({
  type: types.START_EDIT_LOCTITE,
  payload: id
});
export const startEditLoctiteSuccess = data => ({
  type: types.START_EDIT_LOCTITE_SUCCESS,
  payload: data
});
export const startEditLoctiteFailure = error => ({
  type: types.START_EDIT_LOCTITE_FAILURE,
  payload: error
});
