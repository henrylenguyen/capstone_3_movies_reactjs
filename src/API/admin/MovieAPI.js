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
  ThemMoiPhim: (data) =>
    AdminRequest.post("/QuanLyPhim/ThemPhimUploadHinh", 
      data,
    ),
  LayThongTinPhim: () => {
    return AdminRequest.get("/QuanLyPhim/LayThongTinPhim");
  },
};
export default MovieApi;
