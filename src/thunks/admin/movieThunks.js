import { message } from "antd";
import MovieApi from "API/admin/MovieAPI";
import { LayThongTinCumRapTheoHeThong } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayThongTinLichChieuHeThongRap } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayDanhSachPhim } from "reduxs/Slice/admin/MovieSliceAdmin";

export const fetchLichChieuHeThongRap = (maNhom) => async (dispatch) => {
  try {
    const res = await MovieApi.LayThongTinLichChieuHeThongRap(maNhom);
    dispatch(LayThongTinLichChieuHeThongRap(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const fetchThongTinCumRapTheoHeThong =
  (maHeThongRap) => async (dispatch) => {
    try {
      const res = await MovieApi.LayThongTinCumRapTheoHeThong(maHeThongRap);
      dispatch(LayThongTinCumRapTheoHeThong(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
export const fetchLayDanhSachPhim = (maNhom) => async (dispatch) => {
  try {
    const res = await MovieApi.LayDanhSachPhim(maNhom);
    dispatch(LayDanhSachPhim(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const ThemPhimUploadHinh = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const res = await MovieApi.ThemMoiPhim(formData);
      console.log(res);
      if (res.data.statusCode === 200) {
        message.success("Thêm mới phim thành công!");
        navigate("/admin/danh-sach-phim");
      }
    } catch (error) {
      message.error("Thêm mới phim thất bại!");
      console.log(error);
    }
  };
};
