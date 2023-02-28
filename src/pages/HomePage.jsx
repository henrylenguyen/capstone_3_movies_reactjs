import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { fetchMoviePagination } from "thunks/movieThunk";
import { fetchBannerList } from "thunks/movieThunk";
import { fetchTheaterData } from "thunks/theaterThunk";

function HomePage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchBannerList());
    dispatch(fetchTheaterData());
  }, []);

  useEffect(() => {
    dispatch(fetchMoviePagination(searchParams.get("page")));
  }, [searchParams.get("page")]);

  return (
    <div className="bg-slate-100">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default HomePage;
