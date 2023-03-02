import axiosClient from "./requestAPI";

const theaterAPI = {
  getTheaterSchedule(params) {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap`;
    return axiosClient.get(url, { params });
  },
  getScheduleMovie(movieId) {
    const url = `QuanLyRap/LayThongTinLichChieuPhim`;
    return axiosClient.get(url, {
      params: {
        MaPhim: movieId,
      },
    });
  },
};

export default theaterAPI;
