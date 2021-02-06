import { SAVECARD, storeCard } from "./actions";
import { addBankCard } from "./api";

export const profileMiddleware = (store) => (next) => async (action) => {
  if (action.type === SAVECARD) {
    const cardinfo = action.payload;
    const message = await addBankCard(cardinfo);
    console.log(message.success);
    if (message.success) {
      store.dispatch(storeCard(cardinfo));
    } else {
      console.log(message.error);
    }
  } else {
    next(action);
  }
};
