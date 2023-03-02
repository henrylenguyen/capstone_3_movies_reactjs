import axiosClient from "./requestAPI";

const movieAPI = {
  getBannerList(params) {
    const url = `/QuanLyPhim/LayDanhSachBanner`;
    return axiosClient.get(url, { params });
  },
  getMoviePagination(params) {
    const url = `/QuanLyPhim/LayDanhSachPhimPhanTrang`;
    return axiosClient.get(url, { params });
  },

  getMovieInfo(movieId) {
    const url = `/QuanLyPhim/LayThongTinPhim`;
    return axiosClient.get(url, {
      params: {
        MaPhim: movieId,
      },
    });
  },
};

export default movieAPI;
