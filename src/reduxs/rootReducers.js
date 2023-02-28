
import { combineReducers } from "@reduxjs/toolkit";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import MoviesSlice from "./Slice/MoviesSlice";

// combineReducer
const rootReducer = combineReducers({
  movie: MoviesSlice,
  navbar: NavBarSlice,
});
export default rootReducer;