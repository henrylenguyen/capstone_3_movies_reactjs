import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    bannerList: [],
    movieList: [],
    isLoading: true,
    selectedMovie: {},
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

    setSelectedMovie(state, action) {
      state.selectedMovie = { ...action.payload };
    },
    resetSelectedMovie(state) {
      state.selectedMovie = {};
    },
  },
});
export const {
  getMovieBanner,
  getMoviePagination,
  loadingDone,
  setSelectedMovie,
  resetSelectedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
