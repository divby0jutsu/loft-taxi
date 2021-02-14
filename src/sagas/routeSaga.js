import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE, storeRoute } from "../actions";
import { getMapRoute } from "../api";

export function* getRouteSaga(action) {
  const { address1, address2 } = action.payload;
  const message = yield call(getMapRoute, address1, address2);
  yield put(storeRoute(message));
}

export function* routeSaga() {
  yield takeEvery(GETROUTE, getRouteSaga);
}
