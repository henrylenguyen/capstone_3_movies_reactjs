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
};

export default userAPI;
