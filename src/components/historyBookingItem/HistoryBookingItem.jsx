import moment from "moment";
import React from "react";
import "./historyBookingItem.scss";

function HistoryBookingItem({ infoItem }) {
  const { giaVe, hinhAnh, ngayDat, tenPhim, thoiLuongPhim, danhSachGhe } =
    infoItem;

  return (
    <div className="historyBooking__item col-span-1">
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        <div className="col-span-1">
          <img src={hinhAnh} className="w-full h-80" />
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
            {danhSachGhe[0].tenHeThongRap}
          </p>
          <div className="my-2">
            <p>{danhSachGhe[0].tenCumRap}</p>
            <p>
              {danhSachGhe.length < 2
                ? "Ghế đã đặt: "
                : "Danh sách ghế đã đặt:"}
            </p>
            <div className="historyBooking__item-chair grid grid-cols-4 gap-2 h-28 p-1 overflow-x-hidden overflow-y-scroll">
              {danhSachGhe.map((item, idx) => (
                <div
                  key={idx}
                  className="col-span-1 w-full h-8 flex justify-center items-center bg-blue-500 rounded text-white"
                >
                  {item.tenGhe}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryBookingItem;
