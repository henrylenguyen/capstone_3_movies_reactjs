import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Skeleton,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./movieItem.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 450,
  border: "2px solid #000",
  boxShadow: 24,
};

function MovieItem(props) {
  const { onActive, idx, active } = props;
  const { hinhAnh, moTa, tenPhim, trailer } = props.movie;
  const [openModal, setOpenModal] = useState(false);
  const isLoading = useSelector((state) => state.movie.isLoading);

  function handleActiveHover(idx) {
    if (onActive) onActive(idx);
  }

  function handleRemoveActive() {
    if (onActive) onActive(null);
  }

  function handleCloseModal() {
    setOpenModal(false);
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

  return (
    <div
      className="col-span-1 h-160 md:h-150 shadow-none hover:shadow-md"
      style={{ overflow: "hidden" }}
      onMouseOver={() => handleActiveHover(idx)}
      onMouseOut={handleRemoveActive}
    >
      <Card className="w-full movie__item">
        <div className="movie__item-container-img">
          <CardMedia
            component="img"
            className="h-120"
            image={hinhAnh}
            alt={tenPhim}
          />
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
              >
                Mua vé
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Modal keepMounted onClose={handleCloseModal} open={openModal}>
        <Box sx={style}>
          <iframe
            width={700}
            height={450}
            src={trailer}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Box>
      </Modal>
    </div>
  );
}

export default MovieItem;
