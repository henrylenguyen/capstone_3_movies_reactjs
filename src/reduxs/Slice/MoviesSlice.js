import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movie",
  initialState:{
   
  },
  reducers: {
    getMovies:{}
  }
})
export const {getMovies} = movieSlice.actions;
export default movieSlice.reducer;