import axiosClient from "./requestAPI";

const userAPI = {
  signIn(data) {
    const url = `/QuanLyNguoiDung/DangNhap`;
    return axiosClient.post(url, data);
  },
  getProfile() {
    const url = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(url);
  },
  signUp(data) {
    const url = `/QuanLyNguoiDung/DangKy`;
    return axiosClient.post(url, data);
  },

  updateUser(data) {
    const url = "/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return axiosClient.put(url, data);
  },
};

export default userAPI;
