import { REGISTER } from "../actions";

const initialState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  token: "AUTH_TOKEN",
};

export const registerReducer = (state = initialState, action) => {
  if (action.type === REGISTER) {
    return { ...action.payload };
  }
  return state;
};
