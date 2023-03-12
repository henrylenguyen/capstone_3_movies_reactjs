import AdminRequest from "./requestAPIAdmin";

const MovieApi = {
  getMoviesShowtimeInfor: (maNhom) =>
    AdminRequest.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom,
      },
    }),
  getCineplexInfor: (maHeThongRap) =>
    AdminRequest.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap,
      },
    }),
};
export default MovieApi;