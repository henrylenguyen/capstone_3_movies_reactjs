import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
    hasLogout: false,
    hasLogin: false,
    hasSignUp: false,
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
    register(state) {
      state.hasSignUp = true;
    },
    resetRegister(state) {
      state.hasSignUp = false;
    },

    updateUserLogin(state, action) {
      state.userLogin = { ...state.userLogin, ...action.payload };
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
  updateUserLogin,
} = actions;
export default reducer;
