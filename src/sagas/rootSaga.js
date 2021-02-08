import { fork } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { paymentSaga } from "./paymentSaga";
import { registerSaga } from "./registerSaga";
import { addressListSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(paymentSaga);
  yield fork(registerSaga);
  yield fork(addressListSaga);
  yield fork(routeSaga);
}
