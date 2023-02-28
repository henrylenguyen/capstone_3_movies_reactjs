import React from "react";
import "./theaterPanel.scss";

function TheaterPanel({ theater }) {
  return (
    <div className="theater__panel w-full">
      <div className="grid grid-cols-4 gap-3 ">
        <div className="col-span-1">
          <img src={theater.hinhAnh} className="w-full" />
        </div>
        <div className="col-span-3">
          <h2 className="mb-2">{theater.tenCumRap}</h2>
          <p>{theater.diaChi}</p>
        </div>
      </div>
    </div>
  );
}

export default TheaterPanel;
