import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";
import TheaterSlice from "./Slice/TheaterSlice";

// combineReducer
const rootReducer = combineReducers({
  movie: MoviesSlice,
  theater: TheaterSlice,
});
export default rootReducer;
