import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    LichChieuHeThongRap: [],
    ticketList: [],
    CumRapTheoHeThong: [],
    DanhSachPhim: [],
  },
  reducers: {
    LayThongTinLichChieuHeThongRap: (state, { payload }) => {
      return {
        ...state,
        LichChieuHeThongRap: payload,
      };
    },
    getSeatsByShowtimeCode: (state, { payload }) => {
      return {
        ...state,
        ticketList: payload,
      };
    },
    LayThongTinCumRapTheoHeThong: (state, { payload }) => {
      return {
        ...state,
        CumRapTheoHeThong: payload,
      };
    },
    LayDanhSachPhim: (state, { payload }) => {
      return {
        ...state,
        DanhSachPhim: payload,
      };
    },
  },
});
export const {
  LayThongTinLichChieuHeThongRap,
  getSeatsByShowtimeCode,
  LayThongTinCumRapTheoHeThong,
  LayDanhSachPhim,
} = movieSlice.actions;
export default movieSlice.reducer;
