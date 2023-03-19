import { createSlice } from "@reduxjs/toolkit";

const TicketSliceAdmin = createSlice({
  name: "ticketAdmin",
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
export const { getCinemaTicketList } = TicketSliceAdmin.actions;
export default TicketSliceAdmin.reducer;