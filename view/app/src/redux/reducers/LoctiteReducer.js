import { NotificationManager } from "react-notifications";
import {
  GET_ALL_LOCTITE,
  GET_ALL_LOCTITE_SUCCESS,
  LOCTITE_API_FAILURE,
  VIEW_LOCTITE,
  VIEW_LOCTITE_SUCCESS
} from "Types";

/**
 * initial auth user
 */
const INIT_STATE = {
  allLoctite: [],
  allLoctiteLoading: false,
  singleLoctite: null,
  singleLoctiteLoading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    //=========================
    //  API FAILURE
    //=========================
    case LOCTITE_API_FAILURE:
      NotificationManager.error("Loctite API Error");
      console.log(action.payload);
      return INIT_STATE;
    //=========================
    //  GET ALL INVENTORY
    //=========================
    case GET_ALL_LOCTITE:
      return { ...state, allLoctiteLoading: true };
    case GET_ALL_LOCTITE_SUCCESS:
      return {
        ...state,
        allLoctite: action.payload,
        allLoctiteLoading: false
      };
    //=========================
    //  VIEW INVENTORY
    //=========================
    case VIEW_LOCTITE:
      return { ...state, singleLoctiteLoading: true };
    case VIEW_LOCTITE_SUCCESS:
      return {
        ...state,
        singleLoctite: action.payload,
        singleLoctiteLoading: false
      };

    default:
      return { ...state };
  }
};
