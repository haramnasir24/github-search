import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchReducer from "../slices/searchSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["search"], // only persist the search slice
};

const persistedReducer = persistReducer(persistConfig, searchReducer);

export const store = configureStore({
  reducer: {
    search: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
