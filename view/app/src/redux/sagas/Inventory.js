import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  GET_ALL_INVENTORY,
  ON_CHANGE_INVENTORY_LIST,
  GET_INVENTORY,
  SUBMIT_INVENTORY_FORM,
  START_EDIT_INVENTORY,
  EDIT_INVENTORY
} from "Types/InventoryTypes";
import {
  inventoryApiFailure,
  getAllInventorySuccess,
  getInventorySuccess,
  submitInventorySuccess,
  submitInventoryFailure,
  startEditInventorySuccess,
  startEditInventoryFailure,
  editInventorySuccess,
  editInventoryFailure
} from "Actions";

import api from "Api";

import { inventory } from "Components/dummydata";

//=========================
// REQUESTS
//=========================
const getAllInventoryReq = async () => {
  const result = await api.get("/show_items");
  return result.data;
};
const getAMKInventory = async () => {
  const result = [];
  return result;
};
const getInventoryReq = async id => {
  console.log(`fetching ${id}`);
  const result = inventory;
  return result;
};
const postInventoryReq = async data => {
  console.log("===== post");
  console.log(data);
  const result = await api.post("/save_item", data);
  console.log(result);
  return result.data;
};
const startEditInvReq = async id => {
  const result = await api.get(`update_item/${id}`);
  console.log(result);
  return result.data;
};
const editInvReq = async (item) => {
console.log(item)
  const result = await api.post(`update_item/${item.pid}`, item);
  console.log(result);
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllInventoryFromDB() {
  try {
    const inv = yield call(getAllInventoryReq);
    yield delay(500);
    yield put(getAllInventorySuccess(inv));
  } catch (error) {
    yield put(inventoryApiFailure(error));
  }
}
function* changeInvList({ payload }) {
  let data;
  try {
    if (payload == "All Inventory") {
      // All Leads
      data = yield call(getAllInventoryReq);
      yield delay(500);
      yield put(getAllInventorySuccess(data));
    } else if (payload == "Warehouse 1") {
      data = yield call(getAllInventoryReq);
      yield delay(500);
      yield put(getAllInventorySuccess(data));
    } else if (payload == "Warehouse 2") {
      data = yield call(getAllInventoryReq);
      yield delay(500);
      yield put(getAllInventorySuccess(data));
    } else if (payload == "AMK #3") {
      data = yield call(getAMKInventory);
      yield delay(500);
      yield put(getAllInventorySuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllInventoryReq);
      yield put(getAllInventorySuccess(data));
    }
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
function* startEditInv({ payload }) {
  try {
    const data = yield call(startEditInvReq, payload);
    yield delay(500);
    yield put(startEditInventorySuccess(data));
  } catch (error) {
    yield put(startEditInventoryFailure(error));
  }
}
function* editInv({ payload }) {
  try {
    const data = yield call(editInvReq, payload);
    yield delay(500);
    yield put(editInventorySuccess(data));
  } catch (error) {
    yield put(editInventoryFailure(error));
  }
}

//=========================
// WATCHERS
//=========================
export function* getAllInventoryWatcher() {
  yield takeEvery(GET_ALL_INVENTORY, getAllInventoryFromDB);
}
export function* changeInvListWatcher() {
  yield takeEvery(ON_CHANGE_INVENTORY_LIST, changeInvList);
}
export function* getInventoryWatcher() {
  yield takeEvery(GET_INVENTORY, getInventoryFromDB);
}
export function* submitInventoryWatcher() {
  yield takeEvery(SUBMIT_INVENTORY_FORM, submitInvToDB);
}
export function* startEditInventoryWatcher() {
  yield takeEvery(START_EDIT_INVENTORY, startEditInv);
}
export function* editInventoryWatcher() {
  yield takeEvery(EDIT_INVENTORY, editInv);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(getAllInventoryWatcher),
    fork(changeInvListWatcher),
    fork(getInventoryWatcher),
    fork(submitInventoryWatcher),
    fork(startEditInventoryWatcher),
    fork(editInventoryWatcher)
  ]);
}
