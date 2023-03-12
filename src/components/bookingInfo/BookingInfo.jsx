import React from "react";
import Ticket from "assets/images/ticket.png";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

function BookingInfo() {
  const ticketData = useSelector((state) => state.ticket.ticketData);

  if (!ticketData)
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  const { tenCumRap, diaChi, tenPhim, ngayChieu, gioChieu } =
    ticketData.thongTinPhim;

  return (
    <div className="seat__booking">
      <div className="flex gap-20 items-center mb-4">
        <img src={Ticket} className="w-8 md:w-10" />
        <h2 className="text-xl md:text-3xl font-medium capitalize">
          Thông tin đặt vé
        </h2>
      </div>

      <div className="seat__booking-info text-sm md:text-base">
        <div className="flex justify-between  border-b-2 py-4">
          <h2 className="capitalize ">Cụm rạp:</h2>
          <p>{tenCumRap}</p>
        </div>

        <div className="flex justify-between border-b-2 py-4">
          <h2 className="capitalize ">Địa chỉ:</h2>
          <p className="text-base">{diaChi}</p>
        </div>

        <div className="flex justify-between border-b-2 py-4">
          <h2 className="capitalize ">Tên phim:</h2>
          <p className="text-base">{tenPhim}</p>
        </div>

        <div className="flex justify-between border-b-2 py-4">
          <h2 className="capitalize ">Ngày chiếu:</h2>
          <p className="text-base">{ngayChieu}</p>
        </div>

        <div className="flex justify-between border-b-2 py-4">
          <h2 className="capitalize ">Giờ chiếu:</h2>
          <p className="text-base">{gioChieu}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingInfo;
