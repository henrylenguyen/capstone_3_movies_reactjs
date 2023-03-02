import { Button } from "@mui/material";
import moment from "moment";
import React from "react";

function TheaterDetailItem({ theaterList, value, idx }) {
  console.log(theaterList.cumRapChieu);

  return (
    <div className="detail__theater-item">
      {value === idx && (
        <>
          {theaterList.cumRapChieu?.map((item) => (
            <div
              key={item.maCumRap}
              className="text-left text-blue-500 font-medium"
            >
              <div className="flex items-center gap-2">
                <img src={item.hinhAnh} className="w-14 rounded" />
                <h2 className="text-sm md:text-base">
                  {item.tenCumRap} - {item.diaChi}
                </h2>
              </div>
              <div className="flex gap-4 mt-4 flex-wrap">
                {item.lichChieuPhim?.map((schedule) => (
                  <Button
                    className="text-sm md:text-base"
                    key={schedule.maLichChieu}
                    variant="outlined"
                  >
                    {moment(`${schedule.ngayChieuGioChieu}`).format(
                      `DD/MM/YYYY - hh:mm`
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default TheaterDetailItem;
