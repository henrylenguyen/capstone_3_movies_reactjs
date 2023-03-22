import MovieApi from "API/admin/MovieAPI";
import { LayThongTinCumRapTheoHeThong } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayThongTinLichChieuHeThongRap } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayDanhSachPhim } from "reduxs/Slice/admin/MovieSliceAdmin";
import { message } from "antd";
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
export const ThemPhimUploadHinh = (formData) => {
  return async (dispatch) => {
    try {
      const res = await MovieApi.ThemMoiPhim(formData);
       message.success("Thêm mới phim thành công!");
      console.log(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
};
