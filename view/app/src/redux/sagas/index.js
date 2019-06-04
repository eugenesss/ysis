/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// sagas
import authSagas from "./Auth";
import inventorySagas from "./Inventory";
import loctiteSagas from "./Loctite";

export default function* rootSaga(getState) {
  yield all([authSagas(), inventorySagas(), loctiteSagas()]);
}
