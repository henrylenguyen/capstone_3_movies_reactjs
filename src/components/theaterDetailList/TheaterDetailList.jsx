import { CircularProgress, Tab, Tabs } from "@mui/material";
import TheaterDetailItem from "components/theaterDetailItem/TheaterDetailItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTheaterListByMovieId } from "reduxs/Slice/TheaterSlice";
import "./theaterDetailList.scss";

function TheaterDetailList({ isLoading }) {
  const [idxValue, setIdxValue] = useState(0);

  const theaterListByMovieId = useSelector(
    (state) => state.theater.theaterListByMovieId
  );
  const dispatch = useDispatch();

  function handleChange(event, newValue) {
    setIdxValue(newValue);
  }

  useEffect(() => {
    return () => {
      dispatch(resetTheaterListByMovieId());
    };
  }, []);

  if (isLoading || !theaterListByMovieId)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  return (
    <section
      className="detail__theater-list py-12 text-center"
      id="theaterMovieList"
    >
      <h2 className="text-white uppercase text-2xl mb-4">
        Rạp hiện đang chiếu
      </h2>
      <div className="grid grid-cols-4 bg-white rounded">
        <div className="col-span-1 detail__theater-list-right h-52 overflow-y-scroll">
          <Tabs
            value={idxValue}
            centered
            orientation="vertical"
            sx={{ background: "#fff" }}
            onChange={handleChange}
          >
            {theaterListByMovieId.heThongRapChieu?.map((theater) => (
              <Tab
                key={theater.maHeThongRap}
                label={<img src={theater.logo} className="w-11" />}
              />
            ))}
          </Tabs>
        </div>
        <div className="col-span-3 p-4 detail__theater-list-right h-52 overflow-y-scroll">
          {theaterListByMovieId.heThongRapChieu?.map((theater, idx) => (
            <TheaterDetailItem
              key={theater.maHeThongRap}
              theaterList={theater}
              value={idxValue}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TheaterDetailList;
