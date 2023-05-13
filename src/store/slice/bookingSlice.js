import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import bookingService from "../service/boookingAPI";

const initialState = {
  booking: [],
  error: null,
  isFetching: null,
  message: null
};

export const getBooking = createAsyncThunk(
  "api/user/getBooking",
  async (date) => bookingService.getBooking(date)
);

export const addBooking = createAsyncThunk(
  "api/user/addBooking",
  async (credential) => bookingService.addBooking(credential)
);

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.isFetching = false;
        state.booking = action.payload.bookings;
        state.message = action.payload.message;
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })
      //use addBooking
      .addCase(addBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.isFetching = false;
        state.booking = action.payload.bookings;
        state.message = action.payload.message;
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      });
      
  },
});

export default bookingSlice.reducer;
