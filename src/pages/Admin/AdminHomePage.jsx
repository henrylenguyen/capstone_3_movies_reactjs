import ColumnChart from "layouts/admin/statistical/ColumnChart";
import PieChart from "layouts/admin/statistical/PieChart";
import Statistical from "layouts/admin/statistical/Statistical";
import React from "react";
import { useSelector } from "react-redux";
import ListPage from "./ListPage";

const AdminHomePage = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <div
      className={`${
        isOpen ? "flex-grow" : "flex-100"
      } transition-all ease-in-out duration-300 `}
    >
      <div className="grid grid-rows-5 grid-cols-4 gap-5">
        <div className="bg-adminPrimary col-span-4 rounded-xl">
          <Statistical></Statistical>
        </div>
        <div className="col-span-2 row-span-2 bg-adminPrimary py-10 rounded-xl">
          <PieChart></PieChart>
        </div>
        <div className="bg-adminPrimary py-10 px-3 col-span-2 row-span-2 rounded-xl">
          <ColumnChart></ColumnChart>
        </div>
        <div className="bg-adminPrimary col-span-4 row-span-2 ">
          <ListPage></ListPage>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
