import theaterAPI from "../API/theaterAPI";
import { getTheaterList } from "reduxs/Slice/TheaterSlice";
import { doneLoading } from "reduxs/Slice/TheaterSlice";
import { getTheaterListByMovieId } from "reduxs/Slice/TheaterSlice";

export function fetchTheaterData() {
  return async function (dispatch) {
    try {
      const res = await theaterAPI.getTheaterSchedule({ maNhom: "GP07" });

      dispatch(doneLoading());
      dispatch(getTheaterList(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchTheaterListByMovie(movieId) {
  return async function (dispatch) {
    try {
      const res = await theaterAPI.getScheduleMovie(movieId);

      dispatch(getTheaterListByMovieId(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}
