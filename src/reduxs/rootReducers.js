import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";
import TheaterSlice from "./Slice/TheaterSlice";
import UserSlice from "./Slice/UserSlice";

// combineReducer
const rootReducer = combineReducers({
  movie: MoviesSlice,
  theater: TheaterSlice,
  user: UserSlice,
});
export default rootReducer;
