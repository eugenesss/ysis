import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { GET_ALL_INVENTORY, GET_INVENTORY, SUBMIT_INVENTORY_FORM } from "Types";
import {
  inventoryApiFailure,
  getAllInventorySuccess,
  getInventorySuccess,
  submitInventorySuccess,
  submitInventoryFailure
} from "Actions";

import api from "Api";

import { inventoryList, inventory } from "Components/dummydata";

//=========================
// REQUESTS
//=========================
const getAllInventoryReq = async () => {
  //const result = await api.get("/show_items");
  const result = inventoryList;
  return result;
};
const getInventoryReq = async id => {
  console.log(`fetching ${id}`);
  const result = inventory;
  return result;
};
const postInventoryReq = async data => {
  console.log(data);
  const result = {};
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllInventoryFromDB() {
  try {
    const inv = yield call(getAllInventoryReq);
    yield put(getAllInventorySuccess(inv));
  } catch (error) {
    yield put(inventoryApiFailure(error));
  }
}
function* getInventoryFromDB({ payload }) {
  try {
    const inv = yield call(getInventoryReq, payload);
    yield put(getInventorySuccess(inv));
  } catch (error) {
    yield put(inventoryApiFailure(error));
  }
}
function* submitInvToDB({ payload }) {
  try {
    const inv = yield call(postInventoryReq, payload);
    yield put(submitInventorySuccess(inv));
  } catch (error) {
    yield put(submitInventoryFailure(error));
  }
}

//=========================
// WATCHERS
//=========================
export function* getAllInventoryWatcher() {
  yield takeEvery(GET_ALL_INVENTORY, getAllInventoryFromDB);
}
export function* getInventoryWatcher() {
  yield takeEvery(GET_INVENTORY, getInventoryFromDB);
}
export function* submitInventoryWatcher() {
  yield takeEvery(SUBMIT_INVENTORY_FORM, submitInvToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(getAllInventoryWatcher),
    fork(getInventoryWatcher),
    fork(submitInventoryWatcher)
  ]);
}
