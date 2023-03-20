import { combineReducers } from "@reduxjs/toolkit";
import MoviesSlice from "./Slice/MoviesSlice";
import TheaterSlice from "./Slice/TheaterSlice";
import UserSlice from "./Slice/UserSlice";
import TicketSlice from "./Slice/TicketSlice";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import TicketSliceAdmin from "./Slice/admin/TicketSliceAdmin";
import UserSliceAdmin from "./Slice/admin/UserSliceAdmin";
import MovieSliceAdmin from "./Slice/admin/MovieSliceAdmin";

// combineReducer
const rootReducer = combineReducers({
  // user
  movie: MoviesSlice,
  theater: TheaterSlice,
  user: UserSlice,
  ticket: TicketSlice,
  //admin
  movieAdmin: MovieSliceAdmin,
  navbar: NavBarSlice,
  TicketAdmin: TicketSliceAdmin,
  userAdmin: UserSliceAdmin,
});
export default rootReducer;
