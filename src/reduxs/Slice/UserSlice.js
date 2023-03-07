import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasLogout: false,
    hasLogin: false,
    hasSignUp: false,
    userRegister: null,
  },
  reducers: {
    loginUser(state, action) {
      state.userLogin = action.payload;
    },
    logoutUser(state) {
      state.userLogin = null;
      state.userRegister = null;
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
    registerUser(state, action) {
      state.userRegister = action.payload;
    },

    resetLogout(state) {
      state.hasLogout = false;
    },
    register(state) {
      state.hasSignUp = true;
    },
    resetRegister(state) {
      state.hasSignUp = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  loginUser,
  logoutUser,
  logout,
  resetLogout,
  login,
  resetLogin,
  register,
  resetRegister,
  registerUser,
} = actions;
export default reducer;
