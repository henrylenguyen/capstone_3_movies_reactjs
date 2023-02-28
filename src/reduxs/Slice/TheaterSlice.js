import { createSlice } from "@reduxjs/toolkit";

const theaterSlice = createSlice({
  name: "theater",
  initialState: {
    theaterList: [],
    isLoading: true,
  },
  reducers: {
    getTheaterList(state, action) {
      state.theaterList = action.payload;
    },
    doneLoading(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = theaterSlice;
export const { getTheaterList, doneLoading } = actions;
export default reducer;
