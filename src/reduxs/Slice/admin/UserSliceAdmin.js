import { createSlice } from "@reduxjs/toolkit";

const UserSliceAdmin = createSlice({
  name: "userAdmin",
  initialState: {
    danhSachNguoiDung: [],
    loginInfor: "",

  },
  reducers: {
    LayThongTinNguoiDung: (state, { payload }) => {
      return {
        ...state,
        danhSachNguoiDung: payload,
      };
    },
    loginAdminInfor: (state,{payload})=>{
      return {
        ...state,
        loginInfor: payload,
      };
    },
  },
});
export const { LayThongTinNguoiDung, loginAdminInfor } = UserSliceAdmin.actions;
export default UserSliceAdmin.reducer;