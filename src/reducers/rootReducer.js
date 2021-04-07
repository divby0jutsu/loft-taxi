import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { registerReducer } from "./registerReducer";
import { addressListReducer } from "./addressListReducer";
import { routeReducer } from "./routeReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["error"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  profile: profileReducer,
  reg: registerReducer,
  addresses: addressListReducer,
  route: routeReducer,
});

export const loginStateSelector = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export const loginErrorSelector = (state) => ({
  error: state.auth.error,
});

export const cardInfoSelector = (state) => ({
  storedCard: state.profile,
  token: state.auth.authToken,
  error: state.profile.error,
});

export const addressSelector = (state) => ({
  addresses: state.addresses.addresses,
});

export const cardNumberSelector = (state) => ({
  cardNumber: state.profile.cardNumber,
});

export const routeSelector = (state) => ({
  route: state.route,
});

export default persistReducer(rootPersistConfig, rootReducer);
