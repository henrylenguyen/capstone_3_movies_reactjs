import movieAPI from "API/movieAPI";
import { getMovieBanner } from "reduxs/Slice/MoviesSlice";
import { MOVIE_GROUP } from "constants/constants";
import { TOTAL_MOVIE_PER_PAGE } from "constants/constants";
import { getMoviePagination, loadingDone } from "reduxs/Slice/MoviesSlice";
import { setSelectedMovie } from "reduxs/Slice/MoviesSlice";

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

export function fetchMoviePagination(page, searchName) {
  return async function (dispatch) {
    try {
      let params = {
        maNhom: MOVIE_GROUP,
        soTrang: page ?? 1,
        soPhanTuTrenTrang: TOTAL_MOVIE_PER_PAGE,
      };

      if (searchName) params = { ...params, tenPhim: searchName };

      const res = await movieAPI.getMoviePagination(params);

      dispatch(loadingDone());

      dispatch(getMoviePagination(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMovieDetail(movieId) {
  return async function (dispatch) {
    try {
      const res = await movieAPI.getMovieInfo(movieId);

      dispatch(setSelectedMovie(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}
