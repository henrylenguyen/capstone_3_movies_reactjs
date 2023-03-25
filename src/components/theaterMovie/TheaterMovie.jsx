import { Button } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllBookedTicket } from "reduxs/Slice/TicketSlice";
import "./theaterMovie.scss";

function TheaterMovie({ itemMovie }) {
  const { hinhAnh, tenPhim, lstLichChieuTheoPhim, hot } = itemMovie;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleMoveToSeatPage(scheduleId) {
    if (scheduleId === null || scheduleId === undefined) return;
    navigate(`/seats/${scheduleId}`);
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    return () => {
      // reset state bookTicketList
      dispatch(removeAllBookedTicket());
    };
  }, []);

  return (
    <div className="theater__movie h-96 bg-white rounded overflow-hidden">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <img src={hinhAnh} className="w-full bg-cover h-96" />
        </div>
        <div className="col-span-9">
          <div className="flex gap-1 items-center">
            {hot && <span className="theater__movie-banner">HOT</span>}
            <h2 className="text-xl uppercase">{tenPhim}</h2>
          </div>
          <div className="my-4">
            <p className="capitalize mb-2 text-blue-500 font-medium ">
              Lịch chiếu phim:
            </p>
            <div className="grid grid-cols-5 gap-2">
              {lstLichChieuTheoPhim.map((item) => {
                return (
                  <div className="col-span-1" key={item.maLichChieu}>
                    <Button
                      variant="outlined"
                      onClick={() => handleMoveToSeatPage(item.maLichChieu)}
                    >
                      {moment(item.ngayChieuGioChieu).format("DD/MM - hh:mm")}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterMovie;
