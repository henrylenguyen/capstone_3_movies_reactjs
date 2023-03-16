import { createSlice } from "@reduxjs/toolkit";

const theaterSlice = createSlice({
  name: "theater",
  initialState: {
    theaterList: [],
    isLoading: true,
    theaterListByMovieId: null,
  },
  reducers: {
    getTheaterList(state, action) {
      state.theaterList = action.payload;
    },
    doneLoading(state) {
      state.isLoading = false;
    },
    getTheaterListByMovieId(state, action) {
      state.theaterListByMovieId = action.payload;
    },
    resetTheaterListByMovieId(state) {
      state.theaterListByMovieId = null;
    },
  },
});

const { actions, reducer } = theaterSlice;
export const {
  getTheaterList,
  doneLoading,
  getTheaterListByMovieId,
  resetTheaterListByMovieId,
} = actions;
export default reducer;
