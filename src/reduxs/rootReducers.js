
import { combineReducers } from "@reduxjs/toolkit";
import MovieSlice from "./Slice/admin/MovieSlice";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import TicketSlice from "./Slice/admin/TicketSlice";


// combineReducer
const rootReducer = combineReducers({
  movieAdmin: MovieSlice,
  navbar: NavBarSlice,
  ticket: TicketSlice,
});
export default rootReducer;