import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { GET_ALL_INVENTORY } from "Actions/types";
import { inventoryApiFailure, getAllInventorySuccess } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getInventoryReq = async () => {
  const result = await api.get("/show_items");
  return result.data;
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

//=========================
// WATCHERS
//=========================
export function* getAllInventoryWatcher() {
  yield takeEvery(GET_ALL_INVENTORY, getAllInventoryFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(getAllInventoryWatcher)]);
}
