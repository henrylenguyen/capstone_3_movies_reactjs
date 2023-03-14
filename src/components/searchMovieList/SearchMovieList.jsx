import { TextField } from "@mui/material";
import React from "react";

function SearchMovieList({ onChange }) {
  return (
    <div className="block lg:hidden my-4">
      <TextField
        fullWidth
        label="Tìm kiếm phim"
        placeholder="Tên phim..."
        onChange={onChange}
      />
    </div>
  );
}

export default SearchMovieList;
