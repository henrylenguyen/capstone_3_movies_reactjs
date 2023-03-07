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
};

export default userAPI;
