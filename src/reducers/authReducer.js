import { LOGIN, LOGIN_ERROR, LOGOUT } from "../actions";

const initialState = {
  isLoggedIn: false,
  authToken: "",
  error: " ",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true, authToken: action.payload, error: " " };
    case LOGIN_ERROR:
      return { error: action.payload };
    case LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
};
