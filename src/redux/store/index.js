import mainReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  transform: [
    encryptTransform({ secretKey: process.env.REACT_APP_PERSIST_KEY }),
  ],
};
const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableLevel: false }),
});
export const persistor = persistStore(store);
