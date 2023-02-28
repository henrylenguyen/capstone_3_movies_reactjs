import axiosClient from "./requestAPI";

const theaterAPI = {
  getTheaterSchedule(params) {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap`;
    return axiosClient.get(url, { params });
  },
};

export default theaterAPI;
