import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({ auth: authReducer });

export const loginStateSelector = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default rootReducer;
