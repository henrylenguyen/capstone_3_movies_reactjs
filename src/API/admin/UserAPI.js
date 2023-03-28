import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import AdminRequest from "./requestAPIAdmin";

const userAPI = {
  layDanhSachNguoiDung: (MaNhom) =>
    AdminRequest.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        MaNhom,
      },
    }),
  dangNhap: (data) => AdminRequest.post("/QuanLyNguoiDung/DangNhap", data),
  XoaNguoiDung: (TaiKhoan) => {
    return AdminRequest.delete("/QuanLyNguoiDung/XoaNguoiDung", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
      },
      params: {
        TaiKhoan,
      },
    });
  },
  layThongTinTaiKhoan: (data) => {
    return AdminRequest.post("/QuanLyNguoiDung/ThongTinTaiKhoan", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
      },
    });
  },
  layThongTinNguoiDung: (data) => {
    return AdminRequest.post(
      `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${data}`,data
    );
  },
  capNhatThongTinNguoiDung: (data) => {
    return AdminRequest.post(
      `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data  
    );
  },
};

export default userAPI;
