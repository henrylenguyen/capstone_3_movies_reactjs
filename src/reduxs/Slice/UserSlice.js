import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasLogout: false,
    hasLogin: false,
  },
  reducers: {
    loginUser(state, action) {
      state.userLogin = action.payload;
    },
    logoutUser(state) {
      state.userLogin = null;
    },
    logout(state) {
      state.hasLogout = true;
    },

    login(state) {
      state.hasLogin = true;
    },

    resetLogin(state) {
      state.hasLogin = false;
    },

    resetLogout(state) {
      state.hasLogout = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginUser, logoutUser, logout, resetLogout, login, resetLogin } =
  actions;
export default reducer;
