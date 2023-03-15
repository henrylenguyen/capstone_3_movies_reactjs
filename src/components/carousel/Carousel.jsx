import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Box, Modal } from "@mui/material";
import "./carousel.scss";
import { useSelector } from "react-redux";

const movieBannerLink = [
  { link: "https://www.youtube.com/embed/uqJ9u7GSaYM" },
  { link: "https://www.youtube.com/embed/kBY2k3G6LsM" },
  { link: "https://www.youtube.com/embed/-BQPKD7eozY" },
];

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

function Carousel() {
  const bannerList = useSelector((state) => state.movie.bannerList);
  const [openModal, setOpenModal] = useState(false);
  const [bannerDetail, setBannerDetail] = useState({ link: "" });

  function handleOpenModal(link) {
    setOpenModal(true);
    setBannerDetail({ link });
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const mapBannerList = useMemo(() => {
    if (bannerList.length > 0)
      return bannerList.reduce((arr, value, idx) => {
        arr.push({ ...value, ...movieBannerLink[idx] });
        return arr;
      }, []);
  }, [bannerList]);

  return (
    <section className="hidden md:block carousel aspect-auto">
      <Swiper
        spaceBetween={0}
        loop
        slidesPerView={1}
        speed={500}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {mapBannerList?.map((banner, idx) => (
          <SwiperSlide key={banner.maBanner}>
            <div className="carousel-item">
              <img src={banner.hinhAnh} className="h-200" />
              <button
                className="play-btn text-blue-500 opacity-100 hover:opacity-80 "
                title={`Xem trailer phim`}
                onClick={() => handleOpenModal(banner.link)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-20 h-20"
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
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <iframe
            width={700}
            height={450}
            src={bannerDetail && bannerDetail.link}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </Box>
      </Modal>
    </section>
  );
}

export default Carousel;
