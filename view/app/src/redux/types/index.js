/**
 * App Redux Action Types
 */
export const COLLAPSED_SIDEBAR = "COLLAPSED_SIDEBAR";
export const DARK_MODE = "DARK_MODE";
export const BOXED_LAYOUT = "BOXED_LAYOUT";
export const RTL_LAYOUT = "RTL_LAYOUT";
export const MINI_SIDEBAR = "MINI_SIDEBAR";
export const SEARCH_FORM_ENABLE = "SEARCH_FORM_ENABLE";
export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const TOGGLE_SIDEBAR_IMAGE = "TOGGLE_SIDEBAR_IMAGE";
export const SET_SIDEBAR_IMAGE = "SET_SIDEBAR_IMAGE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const START_USER_TOUR = "START_USER_TOUR";
export const STOP_USER_TOUR = "STOP_USER_TOUR";
export const TOGGLE_DARK_SIDENAV = "TOGGLE_DARK_SIDENAV";

// Sidebar
export const TOGGLE_MENU = "TOGGLE_MENU";

// Auth Actions
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

// Inventory Actions
export const INVENTORY_API_FAILURE = "INVENTORY_API_FAILURE";
export const GET_ALL_INVENTORY = "GET_ALL_INVENTORY";
export const GET_ALL_INVENTORY_SUCCESS = "GET_ALL_INVENTORY_SUCCESS";
// view inventory
export const GET_INVENTORY = "GET_INVENTORY";
export const GET_INVENTORY_SUCCESS = "GET_INVENTORY_SUCCESS";
// new inventory
export const SUBMIT_INVENTORY_FORM = "SUBMIT_INVENTORY_FORM";
export const SUBMIT_INVENTORY_SUCCESS = "SUBMIT_INVENTORY_SUCCESS";
export const SUBMIT_INVENTORY_FAILURE = "SUBMIT_INVENTORY_FAILURE";

// Loctite Actions
export const LOCTITE_API_FAILURE = "LOCTITE_API_FAILURE";
export const GET_ALL_LOCTITE = "GET_ALL_LOCTITE";
export const GET_ALL_LOCTITE_SUCCESS = "GET_ALL_LOCTITE_SUCCESS";
// view loctite
export const VIEW_LOCTITE = "VIEW_LOCTITE";
export const VIEW_LOCTITE_SUCCESS = "VIEW_LOCTITE_SUCCESS";
// new loctite
export const HANDLE_CHANGE_LOCTITE = "HANDLE_CHANGE_LOCTITE";
export const SUBMIT_LOCTITE_FORM = "SUBMIT_LOCTITE_FORM";
export const SUBMIT_LOCTITE_SUCCESS = "SUBMIT_LOCTITE_SUCCESS";
export const SUBMIT_LOCTITE_FAILURE = "SUBMIT_LOCTITE_FAILURE";