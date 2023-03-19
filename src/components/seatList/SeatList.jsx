import { CircularProgress } from "@mui/material";
import RowSeat from "components/rowSeat/RowSeat";
import React from "react";
import { useSelector } from "react-redux";

function SeatList() {
  const seatList = useSelector((state) => state.ticket.ticketData);

  if (!seatList)
    return (
      <div className="flex items-center justify-center my-20 aspect-square">
        <CircularProgress />
      </div>
    );

  return (
    <div className="md:p-[2rem] p-[1rem]">
      <div className="grid grid-cols-12 md:gap-4 gap-3">
        {seatList &&
          seatList.danhSachGhe?.map((seatItem, idx) => (
            <div className="col-span-1" key={seatItem.maGhe}>
              <RowSeat seatItem={seatItem} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SeatList;
