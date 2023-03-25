import NavbarAdmin from "components/admin/navbar/NavbarAdmin";
import Search from "components/admin/search/Search";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ContainerLayout = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem(ACCESS_TOKEN_ADMIN);
  console.log("token:", token);
  useEffect(() => {
    if (token !== null) navigate("/admin/home");
    else navigate("/admin/login");
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
