import MovieApi from "API/admin/MovieAPI";
import { getCineplexInfor } from "reduxs/Slice/admin/MovieSlice";
import { getMoviesShowtimeInfor } from "reduxs/Slice/admin/MovieSlice";

export const fetchDataMovie = (maNhom) => async (dispatch) => {
  try {
    const res = await MovieApi.getMoviesShowtimeInfor(maNhom);
    dispatch(getMoviesShowtimeInfor(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const fetchComplex = (maHeThongRap) => async (dispatch) => {
  try {
    const res = await MovieApi.getCineplexInfor(maHeThongRap);
    dispatch(getCineplexInfor(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
