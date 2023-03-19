import { Button } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

function TheaterDetailItem({ theaterList, value, idx }) {
  const navigate = useNavigate();
  function handleMoveToSeatPage(scheduleId) {
    if (scheduleId === undefined || scheduleId === null) return;
    navigate(`/seats/${scheduleId}`);
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="detail__theater-item">
      {value === idx && (
        <>
          {theaterList.cumRapChieu?.map((item) => (
            <div
              key={item.maCumRap}
              className="text-left text-blue-500 font-medium mb-4"
            >
              <div className="flex items-center gap-2">
                <img src={item.hinhAnh} className="w-14 rounded" />
                <div>
                  <h2 className="text-sm md:text-base">{item.tenCumRap}</h2>
                  <p>{item.diaChi}</p>
                </div>
              </div>
              <h2 className="my-4 capitalize">Lịch chiếu:</h2>
              <div className="flex gap-4 mt-4 flex-wrap">
                {item.lichChieuPhim?.map((schedule) => (
                  <Button
                    className="text-sm md:text-base"
                    key={schedule.maLichChieu}
                    variant="outlined"
                    onClick={() => handleMoveToSeatPage(schedule.maLichChieu)}
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
