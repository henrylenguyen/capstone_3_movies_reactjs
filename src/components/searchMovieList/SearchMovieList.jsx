import { TextField } from "@mui/material";
import React from "react";

function SearchMovieList({ onChange }) {
  return (
    <div className="block my-4 rounded-md">
      <TextField
        fullWidth
        label="Tìm kiếm phim"
        placeholder="Tên phim..."
        onChange={onChange}
        sx={{ background: "#fff" }}
        variant="filled"
        className="rounded"
      />
    </div>
  );
}

export default SearchMovieList;
