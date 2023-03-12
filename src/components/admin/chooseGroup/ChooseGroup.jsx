import useLocalStorage from "hooks/useLocalStorage";
import FilmList from "pages/Admin/films/FilmList";
import TicketList from "pages/Admin/ticket/TicketList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchComplex } from "thunks/admin/movieThunks";
import { fetchDataMovie } from "thunks/admin/movieThunks";
const group = [
  {
    id: 1,
    title: "Nhóm GP00",
    maNhom: "GP00",
  },
  {
    id: 2,
    title: "Nhóm GP01",
    maNhom: "GP01",
  },
  {
    id: 3,
    title: "Nhóm GP02",
    maNhom: "GP02",
  },
  {
    id: 4,
    title: "Nhóm GP03",
    maNhom: "GP03",
  },
  {
    id: 5,
    title: "Nhóm GP04",
    maNhom: "GP04",
  },
  {
    id: 6,
    title: "Nhóm GP05",
    maNhom: "GP05",
  },
  {
    id: 7,
    title: "Nhóm GP06",
    maNhom: "GP06",
  },
  {
    id: 8,
    title: "Nhóm GP07",
    maNhom: "GP07",
  },
  {
    id: 9,
    title: "Nhóm GP08",
    maNhom: "GP08",
  },
  {
    id: 10,
    title: "Nhóm GP09",
    maNhom: "GP09",
  },
];

const ChooseGroup = () => {
  const [list, setList] = useState([]);
  const [dsphim,setDsphim] = useState([]);
  const dispatch = useDispatch();
  const { movieList, cineplex } = useSelector((state) => state.movieAdmin);
  const [searchParam, setUseSearchParam] = useSearchParams();
  // useLocalStorage
  const [name, setName] = useLocalStorage("maNhom", { maNhom: "", cumRap: "",danhsachphim: [] });
  useEffect(() => {
    const isEmpty = Object.values(name).every((x) => x === "");
    if (!isEmpty) {
      dispatch(fetchDataMovie(name));
    }
  }, []);
  const handleClickGroup = (item) => {
    dispatch(fetchDataMovie(item.maNhom));
    setName({ ...name, maNhom: item.maNhom });
  };
  const handleClickCinema = (item) => {
    setName({ ...name, cumRap: item.maHeThongRap });
    dispatch(fetchComplex(item.maHeThongRap));
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
          <div className="bg-adminPrimary p-10 rounded-2xl">
            <h2 className="text-center text-[30px] mb-5">
              chọn nhóm cần hiển thị
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {group?.map((item) => (
                <button
                  key={item.id}
                  className=" h-[4rem] md:h-[6rem] text-[16px]  relative border border-[#0868FD] text-white rounded-2xl"
                  onClick={() => handleClickGroup(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-adminPrimary p-10 rounded-2xl">
            <h2 className="text-center text-[30px] mb-5"> chọn Rạp</h2>
            {movieList.length === 0 ? (
              <h3 className="text-center">
                Bạn hoàn thành việc chọn nhóm rồi mới chọn rạp được nha
              </h3>
            ) : (
              ""
            )}
            <div className="grid grid-cols-2 gap-5">
              {movieList.length > 0
                ? movieList.map((item, index) => (
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
            {cineplex.length === 0 ? (
              <h3 className="text-center">
                Bạn hoàn thành việc chọn cụm rạp rồi mới chọn rạp được nha
              </h3>
            ) : (
              ""
            )}
            <div className="grid grid-cols-3 gap-5 ">
              {cineplex.length > 0
                ? cineplex.map((item, index) => {
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
        <FilmList phim={dsphim}></FilmList>
      )}
    </>
  );
};

export default ChooseGroup;
