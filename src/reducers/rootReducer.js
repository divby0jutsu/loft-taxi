import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export const loginStateSelector = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export const cardInfoSelector = (state) => ({
  storedCard: state.profile,
  token: state.auth.authToken,
});

export default rootReducer;
