import MovieItem from "components/movieItem/MovieItem";
import MoviePagination from "components/moviePagination/MoviePagination";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function MovieList() {
  const [activeIdx, setActiveIdx] = useState(null);

  const movieList = useSelector((state) => state.movie.movieList);
  const isLoading = useSelector((state) => state.movie.isLoading);

  function handleSetActive(idx) {
    setActiveIdx(idx);
  }

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section id="movieList" className="movie" style={{ overflow: "hidden" }}>
      <div className="movie__content container mx-auto py-20 md:py-12 px-3">
        <h2 className="text-4xl uppercase text-center mb-4">Danh sách phim</h2>

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
      </div>

      <MoviePagination />
    </section>
  );
}

export default MovieList;
