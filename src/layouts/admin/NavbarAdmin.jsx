import ControlledAccordions from "components/accordion/Accordion";
import React from "react";
import { useSelector } from "react-redux";

const NavbarAdmin = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <div
      className={`flex flex-col gap-y-5 transition-all ease-in-out duration-300 ${
        isOpen ? " w-[300px] mr-5" : "0px"
      }`}
    >
      <div className="user-admin">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="navbar">
        <ControlledAccordions></ControlledAccordions>
      </div>
    </div>
  );
};

export default NavbarAdmin;
