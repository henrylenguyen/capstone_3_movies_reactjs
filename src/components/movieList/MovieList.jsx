import { CircularProgress } from "@mui/material";

import MovieItem from "components/movieItem/MovieItem";
import MoviePagination from "components/moviePagination/MoviePagination";
import SearchMovieList from "components/searchMovieList/SearchMovieList";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchMoviePagination } from "thunks/movieThunk";

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

  return (
    <section id="movieList" className="movie" style={{ overflow: "hidden" }}>
      <div className="movie__content container mx-auto py-20 md:py-12 px-3">
        <h2 className="text-center text-3xl uppercase my-4">Danh sách phim</h2>
        <SearchMovieList onChange={handleSearchMovie} />

        {isLoading && movieList.length < 1 && (
          <div className="flex items-center justify-center">
            <CircularProgress />
          </div>
        )}

        {!isLoading && movieList.items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-4 gap-y-6">
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

      <MoviePagination />
    </section>
  );
}

export default MovieList;
