import { login } from "./actions";
import { store } from "./store";
import { serverLogin } from "./api";
import { AUTHENTICATE } from "./actions";

export const authMiddleware = (state) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const credentials = action.payload;
    const { success, token } = await serverLogin(credentials);
    if (success) {
      store.dispatch(login());
    }
  } else {
    next(action);
  }
};
