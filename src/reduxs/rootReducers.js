
import { combineReducers } from "@reduxjs/toolkit";
import MovieSlice from "./Slice/admin/MovieSlice";
import NavBarSlice from "./Slice/admin/NavBarSlice";


// combineReducer
const rootReducer = combineReducers({
  movieAdmin: MovieSlice,
  navbar: NavBarSlice,
});
export default rootReducer;