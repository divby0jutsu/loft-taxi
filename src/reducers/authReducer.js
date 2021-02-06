import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  isLoggedIn: false,
  authToken: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return { isLoggedIn: true, authToken: action.payload };
    case LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
};
