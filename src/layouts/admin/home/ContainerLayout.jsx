import NavbarAdmin from "components/admin/navbar/NavbarAdmin";
import Search from "components/admin/search/Search";
import React from "react";
import { Outlet } from "react-router-dom";

const ContainerLayout = () => {
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
