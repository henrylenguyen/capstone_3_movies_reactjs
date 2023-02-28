import { Button } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import "./theaterMovie.scss";

function TheaterMovie({ itemMovie }) {
  const { hinhAnh, tenPhim, lstLichChieuTheoPhim, hot } = itemMovie;

  return (
    <div className="theater__movie bg-white">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <img src={hinhAnh} className="w-full" />
        </div>
        <div className="col-span-8">
          <div className="flex gap-1 items-center">
            {hot && <span className="theater__movie-banner">HOT</span>}
            <h2 className="text-xl uppercase">{tenPhim}</h2>
          </div>
          <div className="my-4">
            <p className="capitalize mb-2">Lịch chiếu phim</p>
            <div className="grid grid-cols-5 gap-2">
              {lstLichChieuTheoPhim.map((item) => (
                <div className="col-span-1" key={item.maLichChieu}>
                  <Button variant="outlined">
                    {moment(item.ngayChieuGioChieu).format("DD/MM - hh:mm")}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterMovie;
