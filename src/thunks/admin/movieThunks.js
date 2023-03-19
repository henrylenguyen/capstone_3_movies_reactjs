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
