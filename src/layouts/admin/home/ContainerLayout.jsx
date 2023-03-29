import NavbarAdmin from "components/admin/navbar/NavbarAdmin";
import Search from "components/admin/search/Search";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import { ACCESS_TOKEN } from "constants/constants";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import bgError from "assets/images/error.png";

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
    <div className="w-full h-screen">
      <div className="xl:hidden relative h-full flex justify-center items-center">
        <img src={bgError} alt="background" className="object-cover h-full" />
        <h2 className="absolute inline-block bg-red-700 p-5 rounded-xl text-white text-[18px] font-bold uppercase text-center">
          Chúng tôi hiện chưa hỗ trợ trên thiết bị này!
        </h2>
      </div>
      <div className="hidden xl:block h-full overflow-y-auto">
        <div className="bg-adminSecondary h-auto text-white">
          <Search></Search>
          <div className="flex container mx-auto py-5 h-full overflow-hidden ">
            <NavbarAdmin></NavbarAdmin>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLayout;
