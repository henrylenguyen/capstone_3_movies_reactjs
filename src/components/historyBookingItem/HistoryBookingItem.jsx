import moment from "moment";
import React from "react";
import "./historyBookingItem.scss";

function HistoryBookingItem({ infoItem }) {
  const { giaVe, hinhAnh, ngayDat, tenPhim, thoiLuongPhim, danhSachGhe } =
    infoItem;

  return (
    <div className="historyBooking__item col-span-1">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <img src={hinhAnh} className="w-full" />
        </div>
        <div className="col-span-1">
          <h2 className="historyBooking__title uppercase font-medium">
            {tenPhim}
          </h2>
          <p className="mb-1">
            Ngày đặt : {moment(`${ngayDat}`).format(`DD-MM-YYYY | hh:mm`)}
          </p>
          <p className="mb-1">Thời lượng: {thoiLuongPhim} phút</p>
          <p className="mb-1">Giá vé: {`${giaVe.toLocaleString()}đ`}</p>

          <p className="text-blue-500 font-medium">
            {danhSachGhe[0].tenHeThongRap}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HistoryBookingItem;
