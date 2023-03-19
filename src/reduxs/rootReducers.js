import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";
import TheaterSlice from "./Slice/TheaterSlice";
import UserSlice from "./Slice/UserSlice";
import TicketSlice from "./Slice/TicketSlice";

// combineReducer
const rootReducer = combineReducers({
  movie: MoviesSlice,
  theater: TheaterSlice,
  user: UserSlice,
  ticket: TicketSlice,
});
export default rootReducer;
