import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { GET_ALL_INVENTORY, VIEW_INVENTORY } from "Types";
import {
  inventoryApiFailure,
  getAllInventorySuccess,
  viewInventorySuccess
} from "Actions";

import api from "Api";

import { inventoryList, inventory } from "Components/dummydata";

//=========================
// REQUESTS
//=========================
const getInventoryReq = async () => {
  //const result = await api.get("/show_items");
  const result = inventoryList;
  return result;
};
const viewInventoryReq = async id => {
  console.log(`fetching ${id}`);
  const result = inventory;
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllInventoryFromDB() {
  try {
    const inv = yield call(getInventoryReq);
    yield put(getAllInventorySuccess(inv));
  } catch (error) {
    yield put(inventoryApiFailure(error));
  }
}
function* viewInventoryFromDB({ payload }) {
  try {
    const inv = yield call(viewInventoryReq, payload);
    yield put(viewInventorySuccess(inv));
  } catch (error) {
    yield put(inventoryApiFailure(error));
  }
}

//=========================
// WATCHERS
//=========================
export function* getAllInventoryWatcher() {
  yield takeEvery(GET_ALL_INVENTORY, getAllInventoryFromDB);
}
export function* viewInventoryWatcher() {
  yield takeEvery(VIEW_INVENTORY, viewInventoryFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(getAllInventoryWatcher), fork(viewInventoryWatcher)]);
}
