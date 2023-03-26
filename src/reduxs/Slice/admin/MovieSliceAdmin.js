import { createSlice } from "@reduxjs/toolkit";

const movieSliceAdmin = createSlice({
  name: "moviesAdmin",
  initialState: {
    LichChieuHeThongRap: [],
    ticketList: [],
    CumRapTheoHeThong: [],
    DanhSachPhim: [],
    ThongTinPhim: "",
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
    LayThongTinPhim: (state,{payload})=>{
      return {
        ...state,
        ThongTinPhim: payload,
      };
    }
  },
});
export const {
  LayThongTinLichChieuHeThongRap,
  getSeatsByShowtimeCode,
  LayThongTinCumRapTheoHeThong,
  LayDanhSachPhim,
  LayThongTinPhim,
} = movieSliceAdmin.actions;
export default movieSliceAdmin.reducer;
