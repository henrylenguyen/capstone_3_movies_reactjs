import NavbarAdmin from "components/admin/navbar/NavbarAdmin";
import Search from "components/admin/search/Search";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import { ACCESS_TOKEN } from "constants/constants";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ContainerLayout = () => {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.user);
  const { loginInfor } = useSelector((state) => state.userAdmin);
  const params = window.location.pathname;
  const token = localStorage.getItem(ACCESS_TOKEN_ADMIN);
  const tokenUser = localStorage.getItem(ACCESS_TOKEN);
  useEffect(() => {
    let isQuanTri = localStorage.getItem("isQuanTri") || false;
    if (
      userLogin?.maLoaiNguoiDung === "QuanTri" ||
      loginInfor?.maLoaiNguoiDung === "QuanTri"
    ) {
      isQuanTri = true;
      localStorage.setItem("isQuanTri", true);
    } 
    if (token || tokenUser) {
      if (isQuanTri && params === "/admin") navigate("/admin/home");
    } else {
      if (!isQuanTri) navigate("/admin/login");
    }
  }, []);

  return (
    <div className="bg-adminSecondary h-auto text-white">
      <Search></Search>
      <div className="flex container mx-auto py-5 h-full overflow-hidden ">
        <NavbarAdmin></NavbarAdmin>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ContainerLayout;
