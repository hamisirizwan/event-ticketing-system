import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    persist: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      //   console.log(state.user.name);
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      //   console.log(action.payload.user);
      localStorage.setItem("sessionUser", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      // console.log(action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("sessionUser");
      localStorage.removeItem("token");
    },
  },
});

export const { persist, login, logout } = authSlice.actions;

export default authSlice.reducer;
