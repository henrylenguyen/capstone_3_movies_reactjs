import { CircularProgress, Tab, Tabs } from "@mui/material";

import TheaterItem from "components/theaterItem/TheaterItem";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function TheaterList() {
  const [idxValue, setIdxValue] = useState(0);

  const theaterList = useSelector((state) => state.theater.theaterList);
  const isLoading = useSelector((state) => state.theater.isLoading);

  function handleChangeTab(event, newValue) {
    setIdxValue(newValue);
  }

  return (
    <section className="theater mb-16 hidden lg:block" id="theaterList">
      <div className="theater__content container mx-auto">
        <h2 className="text-center text-4xl uppercase mb-4">Cụm rạp</h2>

        {isLoading && (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
        {!isLoading && (
          <>
            <div className="theater__main ">
              <Tabs value={idxValue} onChange={handleChangeTab} centered>
                {theaterList.map((theater) => (
                  <Tab
                    key={theater.maHeThongRap}
                    label={<img src={theater.logo} className="w-14" />}
                  />
                ))}
              </Tabs>
            </div>
            <div className="theater__list h-120">
              {theaterList.map((theater, idx) => (
                <TheaterItem
                  key={theater.maHeThongRap}
                  theaterList={theater.lstCumRap}
                  idx={idx}
                  value={idxValue}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TheaterList;
