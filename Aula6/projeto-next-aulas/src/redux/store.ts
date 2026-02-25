import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import loggerMiddleware from "./reduxMiddleware";
import productReducer from "./slices/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const counterPersistConfig = {
  key: "counter",
  storage,
};

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCounter = persistReducer(counterPersistConfig, counterReducer);
const persistedCart = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    counter: persistedCounter,
    cart: persistedCart,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
