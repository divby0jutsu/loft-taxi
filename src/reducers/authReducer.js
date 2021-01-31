import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("dispatched");
      return { isLoggedIn: true };
    case LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
};
