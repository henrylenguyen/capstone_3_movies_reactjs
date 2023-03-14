import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
} from "@mui/material";
import { Box } from "@mui/system";
import ModalContent from "components/modal/ModalContent";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./movieItem.scss";

function MovieItem(props) {
  const { onActive, idx, active } = props;
  const { hinhAnh, moTa, tenPhim, trailer, maPhim, hot } = props.movie;
  const [openModal, setOpenModal] = useState(false);
  const isLoading = useSelector((state) => state.movie.isLoading);
  const navigate = useNavigate();

  function handleActiveHover(idx) {
    if (onActive) onActive(idx);
  }

  function handleRemoveActive() {
    if (onActive) onActive(null);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleChangePage() {
    navigate(`/detail/${maPhim}?movie=${tenPhim}`);
    document.documentElement.scrollTop = 0;
  }

  if (isLoading)
    return (
      <Card className="w-full movie__item">
        <div className="movie__item-container-img">
          <Skeleton variant="rectangular" width={330} height={460} />
        </div>
        <CardContent className="h-full">
          <Box variant="div">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Box>
        </CardContent>
      </Card>
    );

  function handleClick(e) {
    const { target } = e;
    if (target.tagName === "button" || target.tagName === "svg") return;
    else {
      navigate(`/detail/${maPhim}?movie=${tenPhim}`);
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <div
      className="col-span-1 h-72 md:h-150 shadow-none hover:shadow-md"
      style={{ overflow: "hidden" }}
      onMouseOver={() => handleActiveHover(idx)}
      onMouseOut={handleRemoveActive}
    >
      <Card
        className="w-full movie__item hidden md:block"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      >
        <div className="movie__item-container-img">
          <CardMedia
            component="img"
            className="h-120"
            image={hinhAnh}
            alt={tenPhim}
          />
          {hot && <Chip className="movie__item-chip hot-label" label="HOT" />}
          <button
            className="movie__item-play-btn text-white hover:text-slate-200 hidden md:block"
            onClick={() => setOpenModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </button>
        </div>
        <CardContent className="h-full">
          <div>
            {!active && (
              <React.Fragment>
                <h2 className="movie__item-title text-xl uppercase font-medium">
                  {tenPhim}
                </h2>
                <p className="movie__item-des text-sm my-2 md:my-0">{moTa}</p>
              </React.Fragment>
            )}

            {active && (
              <Button
                className="hidden md:block w-full h-24 text-3xl"
                variant="contained"
                onClick={handleChangePage}
              >
                Mua vé
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="movie__item-mobile grid grid-cols-4 gap-x-2 gap-y-4">
        <div className="col-span-2">
          <div className="movie__item-mobile-container relative overflow-hidden rounded-md">
            {hot && (
              <Chip
                className="absolute top-[0.4rem] left-[0.4rem] movie__item-chip hot-label"
                label="HOT"
              />
            )}
            <img src={hinhAnh} alt={"movie_picture"} className="w-full h-72" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="movie__item-mobile-container ">
            <h2 className="movie__item-mobile-title text-xl font-medium capitalize">
              {tenPhim}
            </h2>
            <p className="movie__item-mobile-des mt-2 mb-4">{moTa}</p>
            <Button
              variant="contained"
              onClick={() => handleChangePage(maPhim, tenPhim)}
            >
              Mua vé
            </Button>
          </div>
        </div>
      </div>

      <ModalContent
        onClose={handleCloseModal}
        openModal={openModal}
        src={trailer}
        height={450}
      />
    </div>
  );
}

export default MovieItem;
