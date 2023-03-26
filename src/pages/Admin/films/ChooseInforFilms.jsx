import ChooseGroup from "components/admin/chooseGroup/ChooseGroup";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useSearchParams } from "react-router-dom";
import { fetchLayDanhSachPhim } from "thunks/admin/movieThunks";
import FilmList from "./FilmList";

const ChooseInforFilms = () => {
  const dispatch = useDispatch();
  const { DanhSachPhim } = useSelector((state) => state.movieAdmin);
  const [searchParam, setUseSearchParam] = useSearchParams();
  // useLocalStorage
  const [localStorage,setLocalStorage] = useLocalStorage("danhsachphim","");
  const [localNhom, setLocalNhom] = useLocalStorage("Nhom", "");
  
  const handleClickGroup = (item) => {
    dispatch(fetchLayDanhSachPhim(item.maNhom));
    setLocalNhom(item.maNhom);
  };
  useEffect(() => {
    if(DanhSachPhim.length>0){
    setLocalStorage({ danhsachphim: DanhSachPhim });
      setUseSearchParam({ Nhom: localNhom });
    }
  }, [DanhSachPhim, localStorage.danhsachphim]);
  
 
    return (
      <>
        {searchParam.get("Nhom") === null ? (
          <div className="group w-full flex-grow gap-10">
            <ChooseGroup onClick={handleClickGroup}></ChooseGroup>
          </div>
        ) : (
          <FilmList phim={localStorage.danhsachphim}></FilmList>
        )}
      </>
    );
};

export default ChooseInforFilms;
