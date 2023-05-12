import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import noticeService from "../service/noticeAPI";

const initialState = {
  noticeData: [],
  error: null,
  isFetching: null,
  message: null,
};

export const addNotice = createAsyncThunk(
  "api/manager/addNotice",
  async (credential) => noticeService.addNotice(credential)
);

export const getUserNotice = createAsyncThunk(
  "api/user/getNotice",
  async (credential) => noticeService.getUserNotice(credential)
);

export const getManagerNotice = createAsyncThunk(
  "api/manager/getNotice",
  async (credential) => noticeService.getManagerNotice(credential)
);



const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for manager add notice
      .addCase(addNotice.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.isFetching = false;

        state.message = action.payload.message;
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })

      //for user get Notice
      .addCase(getUserNotice.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getUserNotice.fulfilled, (state, action) => {
        state.isFetching = false;
        state.noticeData = action.payload.notices;
        state.message = action.payload.message;
      })
      .addCase(getUserNotice.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })

      // for manager get Notice
      .addCase(getManagerNotice.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getManagerNotice.fulfilled, (state, action) => {
        state.isFetching = false;
        state.noticeData = action.payload.notices;
        state.message = action.payload.message;
      })
      .addCase(getManagerNotice.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      });
  },
});

export default noticeSlice.reducer;
