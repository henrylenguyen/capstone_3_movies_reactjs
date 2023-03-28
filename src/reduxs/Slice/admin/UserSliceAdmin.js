import { createSlice } from "@reduxjs/toolkit";

const UserSliceAdmin = createSlice({
  name: "userAdmin",
  initialState: {
    danhSachNguoiDung: [],
    loginInfor: "",
    ThongTinTaiKhoan: "",
    ThongTinNguoiDung: ""
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
    layThongTinNguoiDung: (state, { payload }) => {
      return {
        ...state,
        ThongTinNguoiDung: payload,
      };
    },
    loginAdminInfor: (state, { payload }) => {
      return {
        ...state,
        loginInfor: payload,
      };
    },
  },
});
export const {
  layDanhSachNguoiDung,
  loginAdminInfor,
  layThongTinTaiKhoan,
  layThongTinNguoiDung,
} = UserSliceAdmin.actions;
export default UserSliceAdmin.reducer;
