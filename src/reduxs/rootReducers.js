
import { combineReducers } from "@reduxjs/toolkit";
import MovieSlice from "./Slice/admin/MovieSlice";
import NavBarSlice from "./Slice/admin/NavBarSlice";
import TicketSlice from "./Slice/admin/TicketSlice";
import UserSlice from "./Slice/admin/UserSlice";


// combineReducer
const rootReducer = combineReducers({
  movieAdmin: MovieSlice,
  navbar: NavBarSlice,
  ticket: TicketSlice,
  user: UserSlice,
});
export default rootReducer;