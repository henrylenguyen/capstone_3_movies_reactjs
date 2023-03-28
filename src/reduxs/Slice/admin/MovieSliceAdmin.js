import { createSlice } from "@reduxjs/toolkit";

const movieSliceAdmin = createSlice({
  name: "moviesAdmin",
  initialState: {
    LichChieuHeThongRap: [],
    ticketList: [],
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
  LayDanhSachPhim,
  LayThongTinPhim,
} = movieSliceAdmin.actions;
export default movieSliceAdmin.reducer;
