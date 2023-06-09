import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authService from "../service/authApi";

const initialState = {
  user: null,
  isFetching: false,
  error: null,
  errorMessage: null,
};

export const loginOwner = createAsyncThunk(
  "auth/loginOwner",
  async (credentials) => authService.loginOwner(credentials)
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials) => authService.loginUser(credentials)
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials) => authService.registerUser(credentials)
);

export const registerOwner = createAsyncThunk(
  "auth/registerOwner",
  async (credentials) => authService.registerOwner(credentials)
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("auth");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login user
      .addCase(loginUser.pending, (state, _action) => {
        state.isFetching = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
        console.log(action, "action");
        alert(action.error.message);
      })

      // Login Owner
      .addCase(loginOwner.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(loginOwner.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(loginOwner.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
        console.log(action, "action");
        alert(action.error);
        //    localStorage.removeItem(auth);
      })

      // Register Owner
      .addCase(registerOwner.pending, (state, _action) => {
        state.isFetching = true;
      })
      .addCase(registerOwner.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(registerOwner.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
        alert(action.error.message);
      })

      // Register User
      .addCase(registerUser.pending, (state, _action) => {
        state.isFetching = true;
      })
      .addCase(registerUser.fulfilled, (state, _action) => {
        state.isFetching = false;
        state.user = _action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
        // console.log('hello', action.error)
        alert(action.error.message);
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
