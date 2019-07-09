import { NotificationManager } from "react-notifications";
import * as types from "Types/LoctiteTypes";

/**
 * initial auth user
 */
const INIT_STATE = {
  loctiteList: {
    loading: false,
    tableData: []
  },
  loctiteToView: {
    loading: false,
    loctite: null
  },
  loctiteForm: {
    loading: false,
    modalLoading: false,
    loctite: {
      name: "",
      description: "",
      totalStock: 0,
      batchNum: 0,
      batch: 0,
      expiry: ""
    }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //=========================
    //  API FAILURE
    //=========================
    case types.LOCTITE_API_FAILURE:
      NotificationManager.error("Loctite API Error");
      console.log(action.payload);
      return INIT_STATE;
    //=========================
    //  GET ALL LOCTITE
    //=========================
    case types.GET_ALL_LOCTITE:
      return { ...state, loctiteList: { ...state.loctiteList, loading: true } };
    case types.GET_ALL_LOCTITE_SUCCESS:
      return {
        ...state,
        loctiteList: {
          ...state.loctiteList,
          loading: false,
          tableData: action.payload
        }
      };
    //=========================
    //  VIEW LOCTITE
    //=========================
    case types.VIEW_LOCTITE:
      return {
        ...state,
        loctiteToView: { ...state.loctiteToView, loading: true }
      };
    case types.VIEW_LOCTITE_SUCCESS:
      return {
        ...state,
        loctiteToView: {
          ...state.loctiteToView,
          loading: false,
          loctite: action.payload
        }
      };

    //=========================
    //  New LOCTITE
    //=========================
    case types.SUBMIT_LOCTITE_FORM:
      return {
        ...state,
        loctiteForm: { ...state.loctiteForm, loading: true }
      };
    case types.SUBMIT_LOCTITE_SUCCESS:
      NotificationManager.success("Success");
      return {
        ...state,
        loctiteForm: { ...state.loctiteForm, loading: false }
      };
    case types.SUBMIT_LOCTITE_FAILURE:
      NotificationManager.danger("Error in POST api");
      console.log(action.payload);
      return {
        ...state,
        loctiteForm: { ...state.loctiteForm, loading: false }
      };
    case types.CLEAR_LOCTITE_FORM:
      return { ...state, loctiteForm: INIT_STATE.loctiteForm };
    case types.HANDLE_LOCTITE_FORM:
      return {
        ...state,
        loctiteForm: {
          ...state.loctiteForm,
          loctite: {
            ...state.loctiteForm.loctite,
            [action.payload.field]: action.payload.value
          }
        }
      };

    //=========================
    //  Edit LOCTITE
    //=========================
    case types.START_EDIT_LOCTITE:
      return {
        ...state,
        loctiteForm: { ...state.loctiteForm, modalLoading: true }
      };
    case types.START_EDIT_LOCTITE_SUCCESS:
      return {
        ...state,
        loctiteForm: {
          ...state.loctiteForm,
          modalLoading: false,
          loctite: action.payload
        }
      };
    case types.START_EDIT_LOCTITE_FAILURE:
      NotificationManager.error("Error in fetching loctite");
      console.log(action.payload);
      return {
        ...state,
        loctiteForm: { ...state.loctiteForm, modalLoading: false }
      };

    default:
      return { ...state };
  }
};
