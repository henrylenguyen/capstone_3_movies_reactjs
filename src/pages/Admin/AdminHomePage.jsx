import Container from "layouts/admin/Container";
import NavbarAdmin from "layouts/admin/NavbarAdmin";
import Search from "layouts/admin/Search";
import React from "react";

const AdminHomePage = () => {
  return (
    <div className="bg-adminPrimary h-[1000px]">
      <Search></Search>
      <div className="flex container mx-auto py-5 h-[calc(1000px_-_80px)] overflow-hidden ">
        <NavbarAdmin></NavbarAdmin>
        <Container></Container>
      </div>
    </div>
  );
};

export default AdminHomePage;
