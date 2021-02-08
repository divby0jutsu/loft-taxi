import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { registerReducer } from "./registerReducer";
import { addressListReducer } from "./addressListReducer";
import { routeReducer } from "./routeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  reg: registerReducer,
  addresses: addressListReducer,
  route: routeReducer,
});

export const loginStateSelector = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export const cardInfoSelector = (state) => ({
  storedCard: state.profile,
  token: state.auth.authToken,
});

export const routeSelector = (state) => ({
  addresses: state.addresses.addresses,
  route: state.route.route,
});

export const cardNumberSelector = (state) => ({
  cardNumber: state.profile.cardNumber,
});

export default rootReducer;
