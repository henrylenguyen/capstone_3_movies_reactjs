import { CircularProgress } from "@mui/material";

import MovieItem from "components/movieItem/MovieItem";
import MoviePagination from "components/moviePagination/MoviePagination";
import SearchMovieList from "components/searchMovieList/SearchMovieList";
import { CHANGE_PAGE_TYPE } from "constants/constants";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMoviePagination } from "thunks/movieThunk";
import "./movieList.scss";

function MovieList() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState();
  const timeoutId = useRef(null);
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movie.movieList);
  const isLoading = useSelector((state) => state.movie.isLoading);

  function handleSetActive(idx) {
    setActiveIdx(idx);
  }

  function createDebounceSearch(value, timeout) {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        setSearchValue(value);
      }, timeout);
    };
  }

  function handleSearchMovie(e) {
    const { value } = e.target;
    const debounceSearch = createDebounceSearch(value, 500);

    setSearchParams({ page: 1 });
    debounceSearch();
  }

  useEffect(() => {
    dispatch(fetchMoviePagination(+searchParams.get("page"), searchValue));
  }, [searchValue]);

  function handleChangePage(type) {
    if (type === CHANGE_PAGE_TYPE.NEXT_PAGE) {
      if (+searchParams.get("page") < movieList.totalPages) {
        setSearchParams({ page: +searchParams.get("page") + 1 });
        return;
      }
      setSearchParams({ page: 1 });
      return;
    } else {
      if (+searchParams.get("page") >= 2) {
        setSearchParams({ page: +searchParams.get("page") - 1 });

        return;
      }
      setSearchParams({ page: movieList.totalPages });
      return;
    }
  }

  useEffect(() => {
    dispatch(fetchMoviePagination(+searchParams.get("page")));
  }, [searchParams.get("page")]);

  return (
    <section
      id="movieList"
      className="movie aspect-auto bg-black relative"
      style={{ overflow: "hidden" }}
    >
      <div className="movie__content container mx-auto py-20 md:py-12 px-3">
        <h2 className="text-white uppercase text-4xl text-center">
          Danh sách phim
        </h2>

        <SearchMovieList onChange={handleSearchMovie} />

        {isLoading && movieList.length < 1 && (
          <div className="flex items-center justify-center">
            <CircularProgress />
          </div>
        )}

        {!isLoading && movieList.items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:h-[75rem] md:grid-cols-3 gap-x-4 gap-y-6">
            {movieList.items?.map((movie, idx) => (
              <MovieItem
                key={movie.maPhim}
                movie={movie}
                idx={idx}
                active={activeIdx === idx}
                onActive={handleSetActive}
              />
            ))}
          </div>
        )}
        {/* Show loading when movieList hasn't call api yet */}
        {!isLoading && movieList.items.length < 1 && (
          <div className="flex items-center gap-4 bg-blue-500 p-2 text-white rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h2 className="text-[1.06rem] font-medium">
              Không có bộ phim nào trùng từ khóa của bạn
            </h2>
          </div>
        )}
      </div>

      <button
        className="movie__button movie__button-next text-white absolute hidden lg:block"
        onClick={() => handleChangePage(CHANGE_PAGE_TYPE.NEXT_PAGE)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <button
        className="movie__button movie__button-prev text-white absolute hidden lg:block"
        onClick={() => handleChangePage(CHANGE_PAGE_TYPE.PREV_PAGE)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <MoviePagination />
    </section>
  );
}

export default MovieList;
