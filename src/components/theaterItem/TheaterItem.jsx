import { Box, Tab, Tabs } from "@mui/material";
import TheaterMovie from "components/theaterMovie/TheaterMovie";
import TheaterPanel from "components/theaterPanel/TheaterPanel";
import React, { useState } from "react";
import "./theaterItem.scss";

function TheaterItem(props) {
  const { value, idx, theaterList } = props;
  const [valueTheater, setValueTheater] = useState(0);

  function handleChangeValueTheater(event, newValue) {
    setValueTheater(newValue);
  }

  return (
    <div className="theater__item shadow-md">
      <div
        role="tabpanel"
        id={`simple-tabpanel-${idx}`}
        aria-labelledby={`simple-tab-${idx}`}
        hidden={value !== idx}
      >
        {value === idx && (
          <div className="theater__item-container bg-white rounded">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-2 h-120 theater__item-movie overflow-y-scroll">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={valueTheater}
                  onChange={handleChangeValueTheater}
                >
                  {theaterList.map((theater) => (
                    <Tab
                      key={theater.maCumRap}
                      label={<TheaterPanel theater={theater} />}
                    />
                  ))}
                </Tabs>
              </div>
              <div className="col-span-6 h-120 theater__item-movie overflow-y-scroll">
                {theaterList.map((item, valueIdx) => (
                  <Box key={item.maCumRap}>
                    {item.danhSachPhim?.map((itemMovie) => (
                      <Box key={itemMovie.maPhim} className="mb-4">
                        {valueTheater === valueIdx && (
                          <TheaterMovie itemMovie={itemMovie} />
                        )}
                      </Box>
                    ))}
                  </Box>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TheaterItem;

// <Box key={itemMovie.maCumRap}>
//   {valueTheater === valueIdx && (
//     <TheaterMovie itemMovie={itemMovie} />
//   )}
// </Box>
