import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    ticketData: null,
    bookedTicketList: [],
  },
  reducers: {
    getTicketData(state, action) {
      state.ticketData = action.payload;
    },
    setBookedTicketList(state, action) {
      state.bookedTicketList = [...state.bookedTicketList, action.payload];
    },
    removeBookedTicket(state, action) {
      state.bookedTicketList.splice(action.payload, 1);
    },
    removeAllBookedTicket(state) {
      state.bookedTicketList.splice(0);
    },
    resetTicketData(state) {
      state.ticketData = null;
      state.bookedTicketList = [];
    },
  },
});

const { actions, reducer } = ticketSlice;
export const {
  getTicketData,
  setBookedTicketList,
  removeBookedTicket,
  removeAllBookedTicket,
  resetTicketData,
} = actions;
export default reducer;
