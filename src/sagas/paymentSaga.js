import { takeEvery, call, put } from "redux-saga/effects";
import { addBankCard } from "../api";
import {
  SAVECARD,
  storeCard,
  saveCardError,
  saveCardRequesting,
} from "../actions";

export function* saveCardSaga(action) {
  yield put(saveCardRequesting());
  const cardinfo = action.payload;
  const message = yield call(addBankCard, cardinfo);
  if (message.success) {
    console.log(cardinfo);
    yield put(storeCard({ ...cardinfo, success: message.success }));
  } else {
    yield put(saveCardError(message.error));
  }
}

export function* paymentSaga() {
  yield takeEvery(SAVECARD, saveCardSaga);
}
