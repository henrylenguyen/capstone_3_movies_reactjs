import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
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
export const { LayThongTinNguoiDung } = UserSlice.actions;
export default UserSlice.reducer;