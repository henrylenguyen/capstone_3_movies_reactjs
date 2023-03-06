import { Button } from "@mui/material";
import React from "react";
import phone from "assets/images/phone.png";
import slider1 from "assets/images/banner-slider-1.c4d5fe9e.jpg";
import slider2 from "assets/images/banner-slider-2.454924ec.jpg";
import slider3 from "assets/images/banner-slider-3.33a486d1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import "./application.scss";

const applicationCarousel = [
  {
    id: 1,
    link: slider1,
  },

  {
    id: 2,
    link: slider2,
  },

  {
    id: 3,
    link: slider3,
  },
];

function Application() {
  return (
    <section className="application py-20" id="application">
      <div className="application__content container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="col-span-1 text-center lg:text-left text-white ">
            <h2 className=" capitalize text-3xl font-medium leading-10">
              Ứng dụng tiện lợi dành
            </h2>
            <h2 className=" capitalize text-3xl font-medium leading-10">
              cho người yêu phim ảnh
            </h2>

            <p className="text-base my-6">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn
            </p>

            <Button variant="contained" className="uppercase h-16 text-xl">
              App miễn phí - Tải về ngay
            </Button>

            <p className="my-6">
              MovieTheater hiện có trên hai phiên bản <a href="#">IOS</a> &{" "}
              <a href="#">Android</a>
            </p>
          </div>
          <div className="col-span-1">
            <div className="application__container">
              <div
                style={{ backgroundImage: `url(${phone})` }}
                className="application__container-img"
              >
                <div className="application__image">
                  <Swiper
                    spaceBetween={0}
                    loop
                    slidesPerView={1}
                    speed={500}
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                  >
                    {applicationCarousel.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img src={item.link} className="w-full" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
