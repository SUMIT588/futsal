import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import customerBookingService from "../service/customerBookingAPI";

const initialState = {
  bookingData: [],
  error: null,
  isFetching: null,
  message: null,
};

export const customerBooking = createAsyncThunk(
  "api/manager/getUserBooking",
  async (date) => customerBookingService.customerBooking(date)
);

const customerBookingSlice = createSlice({
  name: "customerBookingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(customerBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(customerBooking.fulfilled, (state, action) => {
        state.isFetching = false;
        state.bookingData = action.payload.bookings;
        state.message = action.payload.message;
      })
      .addCase(customerBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.bookingData = null;
           state.error = action.error.message;
      });
  },
});

export default customerBookingSlice.reducer;
