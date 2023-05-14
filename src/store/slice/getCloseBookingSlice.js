import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getCloseBookingService from "../service/getCloseBookingAPI";

const initialState = {
  closeData: [],
  error: null,
  isFetching: null,
  message: null,
};

export const getCloseBooking = createAsyncThunk(
  "/api/user/checkAvailability",
  async (date) => getCloseBookingService.getCloseBooking(date)
);

const getCloseBookingSlice = createSlice({
  name: "getCloseBooking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // getCloseBooking

      .addCase(getCloseBooking.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getCloseBooking.fulfilled, (state, action) => {
        state.isFetching = false;
        state.message = action.payload.message;
        state.closeData = action.payload.message
        // alert(state.message);
      })
      .addCase(getCloseBooking.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
        alert(state.error);
      });
  },
});

export default getCloseBookingSlice.reducer;
