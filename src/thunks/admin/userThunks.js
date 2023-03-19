import userAPI from "API/admin/UserAPI";
import { LayThongTinNguoiDung } from "reduxs/Slice/admin/UserSliceAdmin";

export const fetchLayThongTinUser = (MaNhom) => async (dispatch) => {
  try {
    const res = await userAPI.layThongTinNguoiDung(MaNhom);
    dispatch(LayThongTinNguoiDung(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
