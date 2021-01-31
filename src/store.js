import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { authMiddleware } from "./authMiddleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [authMiddleware],
});
