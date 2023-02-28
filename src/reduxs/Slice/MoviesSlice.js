import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    bannerList: [],
    movieList: [],
    isLoading: true,
  },
  reducers: {
    getMovieBanner(state, action) {
      state.bannerList = action.payload;
    },
    getMoviePagination(state, action) {
      state.movieList = action.payload;
    },
    loadingDone(state) {
      state.isLoading = false;
    },
  },
});
export const { getMovieBanner, getMoviePagination, loadingDone } =
  movieSlice.actions;
export default movieSlice.reducer;
