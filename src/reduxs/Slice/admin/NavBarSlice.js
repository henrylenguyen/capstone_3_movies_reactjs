import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "navBar",
  initialState: {
    isOpen: true,
  },
  reducers:{
    toggleOpen: (state,{payload}) => {
      return{
        ...state,
        isOpen: payload
      }
    }
  }
})
export const {toggleOpen} = NavBarSlice.actions;
export default NavBarSlice.reducer;