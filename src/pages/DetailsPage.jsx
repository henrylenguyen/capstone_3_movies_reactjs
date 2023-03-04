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
    <section className="detail py-32">
      <div className="detail__content container mx-auto">
        <DetailMovie isLoading={isLoading} />
        <TheaterDetailList isLoading={isLoading} />
      </div>

      {showScrollBtn && <ScrollBtn />}
    </section>
  );
};

export default DetailsPage;
