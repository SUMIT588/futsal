import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import bookingHistory from "../service/bookingHistoryAPI";

const initialState = {
  bookingHistory: [],
  error: null,
  isFetching: null,
  message: null,
};

export const getBookingHistory = createAsyncThunk(
  "api/user/getBookingHistory",
  async (date) => bookingHistory.getBookingHistory()
);

const bookingHistorySlice = createSlice({
  name: "bookingHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookingHistory.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getBookingHistory.fulfilled, (state, action) => {
        state.isFetching = false;
        state.bookingHistory = action.payload;
        state.message = action.payload.message;
      })
      .addCase(getBookingHistory.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })
      
  },
});

export default bookingHistorySlice.reducer;
