import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    ticketCinemaList: [],
  },
  reducers: {
    getCinemaTicketList: (state, { payload }) => {
      return {
        ...state,
      };
    },
  },
});
export const { getCinemaTicketList } = ticketSlice.actions;
export default ticketSlice.reducer;