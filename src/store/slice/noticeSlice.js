import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import noticeService from "../service/noticeAPI";

const initialState = {
  noticeData: [],
  updateNotice:[],
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

export const deleteManagerNotice = createAsyncThunk(
  "api/manager/delete",
  async (credential) => noticeService.deleteManagerNotice(credential)
  
);

export const updateManagerNotice = createAsyncThunk(
  "api/manager/updateNotice",
  async (data) => noticeService.updateManagerNotice(data._id, data.noticeValue)
);

export const getManagerNoticeId = createAsyncThunk(
  "api/managerNotice/id",
  async (id) => noticeService.getManagerNoticeId(id)
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
        alert(state.message);
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
        alert(state.error);
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
      })

      //manager Delete
      .addCase(deleteManagerNotice.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(deleteManagerNotice.fulfilled, (state, _action) => {
        state.isFetching = false;
        state.message = _action.payload.message;
        alert(state.message);
      })
      .addCase(deleteManagerNotice.rejected, (state, _action) => {
        state.isFetching = false;
        state.error = _action.error.message;
      })

      //manager update

      .addCase(updateManagerNotice.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(updateManagerNotice.fulfilled, (state, _action) => {
        state.isFetching = false;
        state.message = _action.payload.message;
        alert(state.message);
      })
      .addCase(updateManagerNotice.rejected, (state, _action) => {
        state.isFetching = false;
        state.error = _action.error.message;
        alert(state.error);
      })
      //get manager by id
      .addCase(getManagerNoticeId.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getManagerNoticeId.fulfilled, (state, _action) => {
        state.isFetching = false;
        state.updateNotice = _action.payload.notice
        state.message = _action.payload.message;
      })
      .addCase(getManagerNoticeId.rejected, (state, _action) => {
        state.isFetching = false;
        state.error = _action.error.message;
      });

      
  },
});

export default noticeSlice.reducer;
