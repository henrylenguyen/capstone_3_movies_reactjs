import { createSlice } from "@reduxjs/toolkit";

const UserSliceAdmin = createSlice({
  name: "userAdmin",
  initialState: {
    danhSachNguoiDung: [],
  },
  reducers: {
    LayThongTinNguoiDung: (state, { payload }) => {
      return {
        ...state,
        danhSachNguoiDung: payload,
      };
    },
  },
});
export const { LayThongTinNguoiDung } = UserSliceAdmin.actions;
export default UserSliceAdmin.reducer;