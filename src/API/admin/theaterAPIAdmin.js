import AdminRequest from "./requestAPIAdmin";

const TheaterAPI = {
  LayThongTinLichChieuHeThongRap: (maNhom) =>
    AdminRequest.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom,
      },
    }),
  LayThongTinCumRapTheoHeThong: (maHeThongRap) =>
    AdminRequest.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap,
      },
    }),
  LayThongTinHeThongRap: (maHeThongRap) =>
    AdminRequest.get("/QuanLyRap/LayThongTinHeThongRap", {
      params: {
        maHeThongRap,
      },
    }),
};
export default TheaterAPI;
