import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./userSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const cartPersistedReducer = persistReducer(persistConfig, cartReducer)
const userPersistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: { 
    cart: cartPersistedReducer,
    user: userPersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export let persistor = persistStore(store)
