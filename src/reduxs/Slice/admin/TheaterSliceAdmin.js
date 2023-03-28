import { createSlice } from "@reduxjs/toolkit";

const TheaterSliceAdmin = createSlice({
  name: "theaterAdmin",
  initialState: {
    ThongTinHeThongRap: [],
    CumRapTheoHeThong: [],
  },
  reducers: {
    LayThongTinHeThongRap: (state, { payload }) => {
      return {
        ...state,
        ThongTinHeThongRap: payload,
      };
    },
    LayThongTinCumRapTheoHeThong: (state, { payload }) => {
      return {
        ...state,
        CumRapTheoHeThong: payload,
      };
    },
  },
});
export const { LayThongTinHeThongRap, LayThongTinCumRapTheoHeThong } =
  TheaterSliceAdmin.actions;
export default TheaterSliceAdmin.reducer;
