import { AUTHENTICATE, login } from "./actions";
import { serverLogin } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const credentials = action.payload;
    const message = await serverLogin(credentials);
    console.log(message.success);
    if (message.success) {
      store.dispatch(login(message.token));
    } else {
      console.log(message.error);
    }
  } else {
    next(action);
  }
};
