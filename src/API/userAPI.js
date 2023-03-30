import { ACCESS_TOKEN } from "constants/constants";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import axiosClient from "./requestAPI";

const userAPI = {
  signIn(data) {
    const url = `/QuanLyNguoiDung/DangNhap`;
    return axiosClient.post(url, data);
  },
  getProfile() {
    const accessToken =
      localStorage.getItem(ACCESS_TOKEN) ??
      localStorage.getItem(ACCESS_TOKEN_ADMIN);

    const url = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(url, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  signUp(data) {
    const url = `/QuanLyNguoiDung/DangKy`;
    return axiosClient.post(url, data);
  },

  updateUser(data) {
    const accessToken =
      localStorage.getItem(ACCESS_TOKEN) ??
      localStorage.getItem(ACCESS_TOKEN_ADMIN);

    const url = "/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default userAPI;
