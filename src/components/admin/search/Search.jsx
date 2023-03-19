import React from "react";
import toggleBar from "assets/images/Toggle_bar.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "reduxs/Slice/admin/NavBarSlice";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
const { isOpen } = useSelector((state) => state.navbar);
const dispatch = useDispatch();
  const handleOpenNav = ()=>{
    dispatch(toggleOpen(!isOpen));
  }
  return (
    <div className="bg-adminPrimary h-[80px] py-5 px-8 container mx-auto flex gap-x-10">
      <button onClick={handleOpenNav}>
        <img src={toggleBar} alt="toggleBar" />
      </button>
      <div className="relative w-full h-[80px]">
        <input
          type="text"
          className="w-full bg-adminSecondary px-10 py-2 rounded-3xl"
        />
        <SearchIcon fontSize="medium" className="absolute right-5 top-2 text-adminThirdary"></SearchIcon>
      </div>
    </div>
  );
};

export default Search;
