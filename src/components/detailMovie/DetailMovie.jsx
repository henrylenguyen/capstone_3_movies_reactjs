import { Box, Button, CircularProgress, Rating, Skeleton } from "@mui/material";
import ModalContent from "components/modal/ModalContent";
import { RATING_LABEL } from "constants/constants";
import moment from "moment";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import "./detailMovie.scss";

function DetailMovie({ isLoading }) {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  const [openModal, setOpenModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);

  const timer = useRef();

  const { tenPhim, trailer, hinhAnh, hot, danhGia, moTa, ngayKhoiChieu } =
    selectedMovie;

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevState) => (prevState += 10));
      setScore((prevState) => (prevState += 1));
    }, 100);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useLayoutEffect(() => {
    if (progress >= danhGia * 10) {
      clearInterval(timer.current);
      setProgress(danhGia * 10);
    }

    if (score >= danhGia) {
      clearInterval(timer.current);
      setScore(score);
    }
  }, [progress]);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  // Skeleton
  if (isLoading || Object.keys(selectedMovie).length < 1) {
    return (
      <section className="detail__movie px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="detail__item">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  <div className="detail__item-movie">
                    <Skeleton
                      sx={{ bgcolor: "gray" }}
                      variant="rectangular"
                      width={"100%"}
                      height={"400px"}
                    />
                  </div>
                </div>
                <div className="col-span-1 text-white flex flex-col justify-center">
                  <Skeleton sx={{ bgcolor: "gray" }} />
                  <div>
                    <Skeleton sx={{ bgcolor: "gray" }} width="20%" />
                    <Skeleton sx={{ bgcolor: "gray" }} />
                  </div>
                  <p className="my-4">
                    <Skeleton sx={{ bgcolor: "gray" }} width="20%" />{" "}
                    <Skeleton sx={{ bgcolor: "gray" }} />
                  </p>

                  <Skeleton sx={{ bgcolor: "gray" }} width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detail__movie px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <div className="detail__item">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <div className="detail__item-movie">
                  <img src={hinhAnh} className="rounded" />
                  <button onClick={handleOpenModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14 text-gray-200 hover:text-white"
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
              </div>
              <div className="col-span-1 text-white flex flex-col justify-center">
                <p>
                  Khởi chiếu: {moment(`${ngayKhoiChieu}`).format("DD/MM/YYYY")}
                </p>
                <div>
                  {hot && <div className="detail__hot">HOT</div>}
                  <h2 className="text-2xl detail__title font-medium uppercase mt-2">
                    {tenPhim}
                  </h2>
                </div>
                <p className="my-4">
                  Mô tả : <span className="detail__description">{moTa}</span>
                </p>

                <Button
                  variant="contained"
                  onClick={() => console.log("click")}
                >
                  <a href="#theaterMovieList">Mua vé</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="detail__item h-full">
            <div
              className="flex flex-col items-center justify-center"
              style={{
                height: "100%",
              }}
            >
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  color="success"
                  size={120}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h2 className="text-white text-4xl">{`${score}`}</h2>
                </Box>
              </Box>
              <Box className="flex items-center gap-6">
                <Rating
                  className="my-4"
                  precision={0.5}
                  value={danhGia / 2}
                  readOnly
                />
                <Box className="ml-2 text-white uppercase text-xl">
                  {RATING_LABEL[danhGia / 2]}
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <ModalContent
        height={450}
        onClose={handleCloseModal}
        openModal={openModal}
        src={trailer}
      />
    </section>
  );
}

export default DetailMovie;
