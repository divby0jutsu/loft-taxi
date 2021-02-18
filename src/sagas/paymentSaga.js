import { takeEvery, call, put } from "redux-saga/effects";
import { addBankCard } from "../api";
import { SAVECARD, storeCard, saveCardError } from "../actions";

export function* saveCardSaga(action) {
  const cardinfo = action.payload;
  const message = yield call(addBankCard, cardinfo);
  if (message.success) {
    yield put(storeCard(cardinfo));
  } else {
    yield put(saveCardError(message.error));
  }
}

export function* paymentSaga() {
  yield takeEvery(SAVECARD, saveCardSaga);
}
