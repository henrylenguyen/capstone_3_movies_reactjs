import Application from "components/application/Application";
import Carousel from "components/carousel/Carousel";
import Information from "components/information/Information";
import MovieList from "components/movieList/MovieList";
import ScrollBtn from "components/scrollBtn/ScrollBtn";
import TheaterList from "components/theaterList/TheaterList";

import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

const BookingPage = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    function handleShowScrollBtn() {
      setShowScroll(window.scrollY > 1200);
    }

    window.addEventListener("scroll", handleShowScrollBtn);

    return () => {
      window.removeEventListener("scroll", handleShowScrollBtn);
    };
  }, []);

  useEffect(() => {
    function setDefaultParams() {
      if (!searchParams.get("page")) setSearchParams({ page: 1 });
    }

    setDefaultParams();
  }, [searchParams]);

  return (
    <div>
      <Carousel />
      <MovieList />
      <TheaterList />
      <Information />
      <Application />

      {showScroll && <ScrollBtn />}
    </div>
  );
};

export default BookingPage;
