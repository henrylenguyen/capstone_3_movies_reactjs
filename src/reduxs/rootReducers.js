
import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";

// combineReducer
const rootReducer = combineReducers({
  movie: MoviesSlice
})
export default rootReducer;