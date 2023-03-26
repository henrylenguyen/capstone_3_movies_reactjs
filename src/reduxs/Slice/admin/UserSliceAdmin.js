import { createSlice } from "@reduxjs/toolkit";

const UserSliceAdmin = createSlice({
  name: "userAdmin",
  initialState: {
    danhSachNguoiDung: [],
    loginInfor: "",
    ThongTinTaiKhoan: "",
    hasLogOut: false,
  },
  reducers: {
    layDanhSachNguoiDung: (state, { payload }) => {
      return {
        ...state,
        danhSachNguoiDung: payload,
      };
    },
    layThongTinTaiKhoan: (state, { payload }) => {
      return {
        ...state,
        ThongTinTaiKhoan: payload,
      };
    },
    loginAdminInfor: (state, { payload }) => {
      return {
        ...state,
        loginInfor: payload,
      };
    },
    DangXuatTaiKhoan: (state,{payload})=>{
      return {
        ...state,
        hasLogOut: payload,
      };
    }
  },
});
export const {
  layDanhSachNguoiDung,
  loginAdminInfor,
  layThongTinTaiKhoan,
  DangXuatTaiKhoan,
} = UserSliceAdmin.actions;
export default UserSliceAdmin.reducer;
