import React from "react";
import toggleBar from "assets/images/Toggle_bar.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "reduxs/Slice/admin/NavBarSlice";

const Search = () => {
const { isOpen } = useSelector((state) => state.navbar);
const dispatch = useDispatch();
  const handleOpenNav = ()=>{
    dispatch(toggleOpen(!isOpen));
  }
  return (
    <div className=" bg-yellow-200 h-[80px] py-5 px-8 container mx-auto">
      <button onClick={handleOpenNav}>
        <img src={toggleBar} alt="toggleBar" />
      </button>
    </div>
  );
};

export default Search;
