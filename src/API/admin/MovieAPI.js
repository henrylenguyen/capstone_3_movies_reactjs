import AdminRequest from "./requestAPIAdmin";

const MovieApi = {
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
  LayDanhSachPhim: (maNhom) =>
    AdminRequest.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom,
      },
    }),
  ThemMoiPhim: (frm) =>
    AdminRequest.post("/QuanLyPhim/ThemPhimUploadHinh", {
      frm,
    }),
};
export default MovieApi;
