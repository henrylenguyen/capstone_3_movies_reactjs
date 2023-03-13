import { CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function MoviePagination() {
  const [params, setParams] = useSearchParams();
  const movieList = useSelector((state) => state.movie.movieList);
  const isLoading = useSelector((state) => state.movie.isLoading);

  function handleChangeParams(event, page) {
    setParams({ page });
  }

  return (
    <section className="movie-tabs flex justify-center my-10">
      {!isLoading && movieList.items?.length > 0 && (
        <Pagination
          count={movieList.totalPages}
          shape="rounded"
          color="primary"
          onChange={handleChangeParams}
          page={+params.get("page")}
        />
      )}
    </section>
  );
}

export default MoviePagination;
