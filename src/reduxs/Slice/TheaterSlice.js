import { createSlice } from "@reduxjs/toolkit";

const theaterSlice = createSlice({
  name: "theater",
  initialState: {
    theaterList: [],
    isLoading: true,
    theaterListByMovieId: [],
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
  },
});

const { actions, reducer } = theaterSlice;
export const { getTheaterList, doneLoading, getTheaterListByMovieId } = actions;
export default reducer;
