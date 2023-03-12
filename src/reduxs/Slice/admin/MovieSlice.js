import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [],
    ticketList: [],
    cineplex: [],
  },
  reducers: {
    getMoviesShowtimeInfor: (state, { payload }) => {
      return {
        ...state,
        movieList: payload,
      };
    },
    getSeatsByShowtimeCode: (state, { payload }) => {
      return {
        ...state,
        ticketList: payload,
      };
    },
    getCineplexInfor:(state,{payload})=>{
       return {
         ...state,
         cineplex: payload,
       };
    }
  },
});
export const { getMoviesShowtimeInfor, getSeatsByShowtimeCode, getCineplexInfor } =
  movieSlice.actions;
export default movieSlice.reducer;