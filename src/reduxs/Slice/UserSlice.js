import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogin: null,
  },
  reducers: {
    loginUser(state, action) {
      state.userLogin = action.payload;
    },
    logoutUser(state) {
      state.userLogin = null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginUser, logoutUser } = actions;
export default reducer;
