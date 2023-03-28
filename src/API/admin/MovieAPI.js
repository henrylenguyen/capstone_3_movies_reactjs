import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import AdminRequest from "./requestAPIAdmin";

const MovieApi = {
  LayThongTinLichChieuHeThongRap: (maNhom) =>
    AdminRequest.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom,
      },
    }),

  LayDanhSachPhim: (maNhom) =>
    AdminRequest.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom,
      },
    }),
  ThemMoiPhim: (data) =>
    AdminRequest.post("/QuanLyPhim/ThemPhimUploadHinh", data),
  LayThongTinPhim: (maPhim) => {
    return AdminRequest.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim,
      },
    });
  },
  XoaPhim: (MaPhim) => {
    return AdminRequest.delete("/QuanLyPhim/XoaPhim", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_ADMIN)}`,
      },
      params: {
        MaPhim,
      },
    });
  },
};
export default MovieApi;
