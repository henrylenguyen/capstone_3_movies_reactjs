import DetailMovie from "components/detailMovie/DetailMovie";
import TheaterDetailList from "components/theaterDetailList/TheaterDetailList";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "thunks/movieThunk";
import { fetchTheaterListByMovie } from "thunks/theaterThunk";
import "./styles/detailPage.scss";

const DetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = params;

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchTheaterListByMovie(movieId));
    setIsLoading(false);
  }, []);

  return (
    <section className="detail py-32">
      <div className="detail__content container mx-auto">
        <DetailMovie isLoading={isLoading} />
        <TheaterDetailList isLoading={isLoading} />
      </div>
    </section>
  );
};

export default DetailsPage;
