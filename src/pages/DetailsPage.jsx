import DetailMovie from "components/detailMovie/DetailMovie";
import ScrollBtn from "components/scrollBtn/ScrollBtn";
import TheaterDetailList from "components/theaterDetailList/TheaterDetailList";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "thunks/movieThunk";
import { fetchTheaterListByMovie } from "thunks/theaterThunk";
import "./styles/detailPage.scss";

const DetailsPage = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = params;

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchTheaterListByMovie(movieId));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    function handleShowScrollBtn() {
      setShowScrollBtn(window.scrollY >= 500);
    }

    window.addEventListener("scroll", handleShowScrollBtn);

    return () => {
      window.removeEventListener("scroll", handleShowScrollBtn);
    };
  }, []);

  return (
    <section className="detail pt-32 pb-4">
      <div className="detail__content container mx-auto">
        <DetailMovie isLoading={isLoading} />

        <div className="detail__info my-6">
          <h2 className="text-red uppercase mb-4 text-red-500 font-medium text-2xl underline">
            Lưu ý:
          </h2>
          <div className="detail__info-item flex gap-6 items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-green-400 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>
              Ban Quản Lý Rạp có quyền từ chối không cho Quý Khách vào rạp nếu
              vi phạm.
            </p>
          </div>
          <div className="detail__info-item flex gap-6 items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-green-400 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>
              Sau 22 giờ rạp phim sẽ không được phép phục vụ khách dưới 13 tuổi
            </p>
          </div>
          <div className="detail__info-item flex gap-6 items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-green-400 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Vui lòng chọn đúng rạp phim và suất chiếu</p>
          </div>
          <div className="detail__info-item flex gap-6 items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-green-400 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Không đổi trả hay hoàn tiên sau khi thanh toán</p>
          </div>
        </div>

        <TheaterDetailList isLoading={isLoading} />
      </div>

      {showScrollBtn && <ScrollBtn />}
    </section>
  );
};

export default DetailsPage;
