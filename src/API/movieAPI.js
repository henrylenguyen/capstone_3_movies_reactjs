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
};

export default movieAPI;
