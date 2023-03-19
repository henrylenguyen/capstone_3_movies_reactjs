import SnackbarComponent from "components/snackbar/Snackbar";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { resetLogout } from "reduxs/Slice/UserSlice";
import { fetchMoviePagination } from "thunks/movieThunk";
import { fetchBannerList } from "thunks/movieThunk";
import { fetchTheaterData } from "thunks/theaterThunk";

function HomePage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const timerRef = useRef();

  const hasLogout = useSelector((state) => state.user.hasLogout);

  useEffect(() => {
    dispatch(fetchBannerList());
    dispatch(fetchTheaterData());
  }, []);

  function handleResetLogout() {
    dispatch(resetLogout());
  }

  useEffect(() => {
    dispatch(fetchMoviePagination(+searchParams.get("page")));
  }, [searchParams.get("page")]);

  useEffect(() => {
    if (hasLogout) {
      timerRef.current = setTimeout(() => {
        dispatch(resetLogout());
      }, 5000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [hasLogout]);

  return (
    <div className="bg-slate-100">
      <Header />

      <Outlet />

      <Footer />

      <SnackbarComponent
        type="success"
        message="Đăng xuất thành công"
        booleanState={hasLogout}
        onClose={handleResetLogout}
        time={5000}
      />
    </div>
  );
}

export default HomePage;
