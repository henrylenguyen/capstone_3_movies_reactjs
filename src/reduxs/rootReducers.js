import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";
import TheaterSlice from "./Slice/TheaterSlice";
import UserSlice from "./Slice/UserSlice";
import TicketSlice from "./Slice/TicketSlice";
import movieSliceAdmin from "./Slice/admin/movieSliceAdmin";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import TicketSliceAdmin from "./Slice/admin/TicketSliceAdmin";
import UserSliceAdmin from "./Slice/admin/UserSliceAdmin";

// combineReducer
const rootReducer = combineReducers({
  // user
  movie: MoviesSlice,
  theater: TheaterSlice,
  user: UserSlice,
  ticket: TicketSlice,
  //admin
  movieAdmin: movieSliceAdmin,
  navbar: NavBarSlice,
  TicketAdmin: TicketSliceAdmin,
  user: UserSliceAdmin,
});
export default rootReducer;
