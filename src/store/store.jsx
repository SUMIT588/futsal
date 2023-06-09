import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noticeSlice, { getUserNotice } from "./slice/noticeSlice";

import authReducer from "./slice/authSlice";
import bookingHistorySlice from './slice/historySlice'
import bookingSlice from "./slice/bookingSlice";
import calendarSlice from "./slice/calendarSlice";
import closeBookingSlice from "./slice/closeBookingSlice";
import customerBooking from "./slice/customerBooking";
import getCloseBookingSlice from "./slice/getCloseBookingSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  authSlice: authReducer,
  bookingSlice: bookingSlice,
  calendarSlice: calendarSlice,
  customerBookingSlice: customerBooking,
  noticeSlice: noticeSlice,
  bookingHistorySlice: bookingHistorySlice,
 closeBookingSlice: closeBookingSlice,
  getCloseBookingSlice: getCloseBookingSlice
  // add slice here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
