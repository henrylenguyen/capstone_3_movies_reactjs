import { CircularProgress } from "@mui/material";
import HistoryBookingItem from "components/historyBookingItem/HistoryBookingItem";
import React from "react";
import { useSelector } from "react-redux";
import "./historyBooking.scss";

function HistoryBookingList() {
  const userLogin = useSelector((state) => state.user.userLogin);

  return (
    <section className="historyBooking my-4 h-100 overflow-y-scroll overflow-x-hidden">
      {!userLogin && userLogin.thongTinDatVe?.length && (
        <div className="flex items-center justify-center h-full">
          <CircularProgress />
        </div>
      )}
      {userLogin && userLogin.thongTinDatVe?.length < 1 && (
        <div className="">
          <h2>Hiện tại bạn đã chưa đặt vé</h2>
        </div>
      )}

      {userLogin && !userLogin?.thongTinDatVe && (
        <div className="flex items-center justify-center h-full">
          <h2>Hiện tại bạn đã chưa đặt vé</h2>
        </div>
      )}

      {userLogin && userLogin.thongTinDatVe?.length > 0 && (
        <div className="historyBooking__content grid grid-cols-1 md:grid-cols-2 gap-6">
          {userLogin.thongTinDatVe.map((infoItem) => (
            <HistoryBookingItem key={infoItem.maVe} infoItem={infoItem} />
          ))}
        </div>
      )}
    </section>
  );
}

export default HistoryBookingList;
