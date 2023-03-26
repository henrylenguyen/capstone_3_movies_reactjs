import { createSlice } from "@reduxjs/toolkit";

const UserSliceAdmin = createSlice({
  name: "userAdmin",
  initialState: {
    danhSachNguoiDung: [],
    loginInfor: "",
    ThongTinTaiKhoan: "",
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
  },
});
export const {
  layDanhSachNguoiDung,
  loginAdminInfor,
  layThongTinTaiKhoan,
} = UserSliceAdmin.actions;
export default UserSliceAdmin.reducer;
