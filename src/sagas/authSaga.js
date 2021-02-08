import { takeEvery, call, put } from "redux-saga/effects";
import { serverLogin } from "../api";
import { AUTHENTICATE, login } from "../actions";

export function* authenticateSaga(action) {
  const credentials = action.payload;
  const message = yield call(serverLogin, credentials);
  if (message.success) {
    yield put(login(message.token));
  } else {
    console.log(message.error);
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
