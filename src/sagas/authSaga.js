import { takeEvery, call, put } from "redux-saga/effects";
import { serverLogin } from "../api";
import { AUTHENTICATE, login, loginError } from "../actions";

export function* authenticateSaga(action) {
  const credentials = action.payload;
  const message = yield call(serverLogin, credentials);
  if (message.success) {
    yield put(login(message.token));
  } else {
    yield put(loginError(message.error));
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
