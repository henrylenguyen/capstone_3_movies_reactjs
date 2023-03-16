import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBookedTicket } from "reduxs/Slice/TicketSlice";
import "./bookingTicketDetail.scss";

function BookingTicketDetail() {
  const dispatch = useDispatch();
  const bookedTicketList = useSelector(
    (state) => state.ticket.bookedTicketList
  );

  function handleRemoveBookedTicket(idx) {
    if (idx === null || idx === undefined) return;
    dispatch(removeBookedTicket(idx));
  }

  return (
    <div className="seat__info-booking mt-6 mb-4 aspect-auto">
      {bookedTicketList.length < 1 && (
        <div className="mt-6 mb-4 text-center">
          <h2>Bạn chưa chọn ghế! Vui lòng chọn ghế</h2>
        </div>
      )}

      {bookedTicketList.length > 0 && (
        <>
          <h2 className="text-2xl uppercase mb-4">Danh sách ghế đã đặt</h2>
          <div className="seat__info-booking-container h-40 p-2 overflow-y-scroll overflow-x-hidden">
            <div className=" grid w-full grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 ">
              {bookedTicketList.length > 0 &&
                bookedTicketList.map((bookedTicketItem, idx) => (
                  <button
                    key={idx}
                    className={clsx(
                      `col-span-1 border rounded-lg relative  border-2`,
                      {
                        ["border-blue-500"]:
                          bookedTicketList[idx].loaiGhe === "Thuong",
                        ["border-red-500"]:
                          bookedTicketList[idx].loaiGhe === "Vip",
                      }
                    )}
                  >
                    <span
                      className="absolute right-[-0.5rem] top-[-0.5rem]"
                      onClick={() => handleRemoveBookedTicket(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 md:w-5 md:h-5 text-blue-100 font-bold"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <div className="flex flex-col h-full w-full ">
                      <span className="text-[#999]">
                        Ghế {bookedTicketItem.tenGhe}
                      </span>
                      <span className="font-semibold">{`${bookedTicketItem.giaVe.toLocaleString()} đ`}</span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookingTicketDetail;
