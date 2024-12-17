import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    countInCart: 0,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    addItemCart(state, action) {
      state.countInCart = action.payload.count;
    },
  },
});

export const { login, logout, addItemCart } = authSlice.actions;
export default authSlice.reducer;
