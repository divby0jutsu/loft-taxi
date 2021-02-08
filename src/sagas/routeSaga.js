import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE, STOREROUTE, storeRoute } from "../actions";
import { getMapRoute } from "../api";

export function* getRouteSaga(action) {
  console.log(action.payload);
  const { address1, address2 } = action.payload;
  console.log(address1, address2);
  const message = yield call(getMapRoute, address1, address2);
  yield put(storeRoute(message));
}

export function* routeSaga() {
  yield takeEvery(GETROUTE, getRouteSaga);
}

function* drawRouteSaga(action) {}

export function* routeDrawSaga() {
  yield takeEvery(STOREROUTE, drawRouteSaga);
}
