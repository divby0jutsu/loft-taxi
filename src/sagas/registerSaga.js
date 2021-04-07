import { takeEvery, call, put } from "redux-saga/effects";
import { serverRegister } from "../api";
import { REGISTER, login, loginError } from "../actions";

export function* registrationSaga(action) {
  const credentials = action.payload;
  const message = yield call(serverRegister, credentials);
  if (message.success) {
    yield put(login(message.token));
  } else {
    yield put(loginError(message.error));
  }
}

export function* registerSaga() {
  yield takeEvery(REGISTER, registrationSaga);
}
