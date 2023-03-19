import React from "react";
import clsx from "clsx";

import { useDispatch, useSelector } from "react-redux";
import { setBookedTicketList } from "reduxs/Slice/TicketSlice";
import { removeBookedTicket } from "reduxs/Slice/TicketSlice";

function RowSeat({ seatItem }) {
  // console.log(seatItem);
  const dispatch = useDispatch();
  const bookedTicketList = useSelector(
    (state) => state.ticket.bookedTicketList
  );

  function handleSelectTicket() {
    if (!seatItem) return;
    const idxBookTicket = bookedTicketList.findIndex(
      (item) => item.maGhe === seatItem.maGhe
    );
    if (idxBookTicket < 0) dispatch(setBookedTicketList(seatItem));
    else dispatch(removeBookedTicket(idxBookTicket));
  }

  return (
    <button
      disabled={seatItem.daDat}
      className={clsx(
        `text-[0.6rem] md:text-[1.1rem] lg:text-[1.4rem] w-full p-1`,
        {
          ["bg-[#DF0E0E]"]: seatItem.loaiGhe === "Vip" && !seatItem.daDat,
          ["bg-[#0E16DF]"]: seatItem.loaiGhe === "Thuong" && !seatItem.daDat,
          ["bg-[#655F64] cursor-not-allowed"]: seatItem.daDat,
          ["bg-[#FB01D4]"]: bookedTicketList.some(
            (item) => item.maGhe === seatItem.maGhe
          ),
        }
      )}
      title={`${seatItem.daDat ? "Ghế đã được đặt" : ""}`}
      onClick={handleSelectTicket}
    >
      {seatItem.stt}
    </button>
  );
}

export default RowSeat;
