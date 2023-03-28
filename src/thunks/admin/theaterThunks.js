import { message } from "antd";
import TheaterAPI from "API/admin/theaterAPIAdmin";
import { LayThongTinCumRapTheoHeThong } from "reduxs/Slice/admin/TheaterSliceAdmin";
import { LayThongTinHeThongRap } from "reduxs/Slice/admin/TheaterSliceAdmin";
export const fetchLayThongTinHeThongRap = (maHeThongRap) => async (dispatch) => {
  try {
    const res = await TheaterAPI.LayThongTinHeThongRap(maHeThongRap);
    dispatch(LayThongTinHeThongRap(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const fetchThongTinCumRapTheoHeThong =
  (maHeThongRap) => async (dispatch) => {
    try {
      const res = await TheaterAPI.LayThongTinCumRapTheoHeThong(maHeThongRap);
      dispatch(LayThongTinCumRapTheoHeThong(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };