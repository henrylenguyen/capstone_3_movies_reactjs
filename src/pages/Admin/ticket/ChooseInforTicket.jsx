import ChooseGroup from "components/admin/chooseGroup/ChooseGroup";
import useLocalStorage from "hooks/useLocalStorage";
import TicketList from "pages/Admin/ticket/TicketList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { fetchLichChieuHeThongRap } from "thunks/admin/movieThunks";
import { fetchThongTinCumRapTheoHeThong } from "thunks/admin/theaterThunks";

const ChooseInforTicket = () => {
  const [list, setList] = useState([]);
  const [dsphim, setDsphim] = useState([]);
  const dispatch = useDispatch();
  const { LichChieuHeThongRap, CumRapTheoHeThong } = useSelector(
    (state) => state.movieAdmin
  );
  const [searchParam, setUseSearchParam] = useSearchParams();
  // useLocalStorage
  const [name, setName] = useLocalStorage("maNhom", {
    maNhom: "",
    cumRap: "",
    danhsachphim: [],
  });
  useEffect(() => {
    const isEmpty = Object.values(name).every((x) => x === "");
    if (!isEmpty) {
      dispatch(fetchLichChieuHeThongRap(name.maNhom));
    }
  }, []);
  const handleClickGroup = (item) => {
    dispatch(fetchLichChieuHeThongRap(item.maNhom));
    setName({ ...name, maNhom: item.maNhom });
  };
  const handleClickCinema = (item) => {
    setName({ ...name, cumRap: item.maHeThongRap });
    dispatch(fetchThongTinCumRapTheoHeThong(item.maHeThongRap));
    setList(item.lstCumRap);
  };

  const handleClickCinemaName = (item) => {
    const cumRap = list?.filter(
      (cumRap) => cumRap.maCumRap === item.maCumRap
    )[0];
    const danhSachPhim = cumRap?.danhSachPhim ?? [];
    setDsphim(danhSachPhim);
    setUseSearchParam({ rap: item.maCumRap });
    setName({ ...name, danhsachphim: danhSachPhim });
  };

  return (
    <>
      {searchParam.get("rap") === null || name === null ? (
        <div className="group w-full grid grid-cols-2 flex-grow gap-10">
          <ChooseGroup onClick={handleClickGroup}></ChooseGroup>
          <div className="bg-adminPrimary p-10 rounded-2xl">
            <h2 className="text-center text-[30px] mb-5"> chọn Rạp</h2>
            {LichChieuHeThongRap.length === 0 ? (
              <h3 className="text-center">
                Bạn hoàn thành việc chọn nhóm rồi mới chọn rạp được nha
              </h3>
            ) : (
              ""
            )}
            <div className="grid grid-cols-2 gap-5">
              {LichChieuHeThongRap.length > 0
                ? LichChieuHeThongRap.map((item, index) => (
                    <button
                      key={index}
                      className=" h-[4rem] md:h-[6rem] text-[16px]  relative border border-[#0868FD] text-white rounded-2xl"
                      onClick={() => handleClickCinema(item)}
                    >
                      {item.maHeThongRap}
                    </button>
                  ))
                : ""}
            </div>
          </div>
          <div className="bg-adminPrimary p-10 rounded-2xl col-span-2">
            <h2 className="text-center text-[30px] mb-5">chọn tên rạp</h2>
            {CumRapTheoHeThong.length === 0 ? (
              <h3 className="text-center">
                Bạn hoàn thành việc chọn cụm rạp rồi mới chọn rạp được nha
              </h3>
            ) : (
              ""
            )}
            <div className="grid grid-cols-3 gap-5 ">
              {CumRapTheoHeThong.length > 0
                ? CumRapTheoHeThong.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className=" h-[4rem] md:h-[6rem] text-[16px] p-5  relative border border-[#0868FD] text-white rounded-2xl"
                        onClick={() => handleClickCinemaName(item)}
                      >
                        {item.tenCumRap}
                      </button>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <TicketList phim={dsphim}></TicketList>
      )}
    </>
  );
};

export default ChooseInforTicket;
