import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { persistStore } from "redux-persist";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./sagas/";

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleWare();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
