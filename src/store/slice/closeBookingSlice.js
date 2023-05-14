import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import closeBookingService from "../service/closeBooking";

const initialState = {
  closeBookingDate: [],
  error: null,
  isFetching: null,
  message: null,
};

export const closeBooking = createAsyncThunk(
  "api/manager/closedDate",
  async (credential) => closeBookingService.closeBooking(credential)
);

export const managerCloseBooking = createAsyncThunk(
  "api/manager/managerClosedDate",
  async (credential) => closeBookingService.managerCloseBooking(credential)
);

const closedBookingSlice = createSlice({
  name: "bookingHistory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(closeBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(closeBooking.fulfilled, (state, action) => {
        state.isFetching = false;
        state.message = action.payload.message;
        alert(state.message);
      })
      .addCase(closeBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
        alert(state.error);
      })

      .addCase(managerCloseBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(managerCloseBooking.fulfilled, (state, action) => {
        console.log("booking date", action);
        state.isFetching = false;
        state.message = action.payload.message;
        state.closeBookingDate = action.payload.dates;
      })
      .addCase(managerCloseBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      });
  },
});

export default closedBookingSlice.reducer;
