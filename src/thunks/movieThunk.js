import movieAPI from "../API/movieAPI";
import { getMovieBanner } from "reduxs/Slice/MoviesSlice";
import { MOVIE_GROUP } from "constants/constants";
import { TOTAL_MOVIE_PER_PAGE } from "constants/constants";
import { getMoviePagination, loadingDone } from "reduxs/Slice/MoviesSlice";

export function fetchBannerList() {
  return async function (dispatch) {
    try {
      const res = await movieAPI.getBannerList();

      dispatch(getMovieBanner(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMoviePagination(page) {
  return async function (dispatch) {
    try {
      const res = await movieAPI.getMoviePagination({
        maNhom: MOVIE_GROUP,
        soTrang: page ?? 1,
        soPhanTuTrenTrang: TOTAL_MOVIE_PER_PAGE,
      });

      dispatch(loadingDone());

      dispatch(getMoviePagination(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}
