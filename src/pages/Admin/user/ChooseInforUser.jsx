import ChooseGroup from "components/admin/chooseGroup/ChooseGroup";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchLayThongTinUser } from "thunks/admin/userThunks";
import ListUserPage from "./ListUserPage";

const ChooseInforUser = () => {
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector((state) => state.user);
  const [searchParam, setUseSearchParam] = useSearchParams();
  const [Nhom, setNhom] = useState("");
  // useLocalStorage
  const [localStorage, setLocalStorage] = useLocalStorage(
    "danhsachnguoidung",
    ""
  );

  const handleClickGroup = (item) => {
    dispatch(fetchLayThongTinUser(item.maNhom));
    setNhom(item.maNhom);
  };
  useEffect(() => {
    if (danhSachNguoiDung.length > 0) {
      setLocalStorage({ danhsachnguoidung: danhSachNguoiDung });
      setUseSearchParam({ Nhom: Nhom });
    }
  }, [danhSachNguoiDung, localStorage.danhsachnguoidung]);

  return (
    <>
      {searchParam.get("Nhom") === null ? (
        <div className="group w-full flex-grow gap-10">
          <ChooseGroup onClick={handleClickGroup}></ChooseGroup>
        </div>
      ) : (
        <ListUserPage user={localStorage.danhsachnguoidung}></ListUserPage>
      )}
    </>
  );
};

export default ChooseInforUser;
