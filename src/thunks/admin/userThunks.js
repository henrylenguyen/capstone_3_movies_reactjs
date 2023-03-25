import userAPI from "API/admin/UserAPI";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import { statusCode } from "constants/admin/constants";
import { loginAdminInfor } from "reduxs/Slice/admin/UserSliceAdmin";
import { LayThongTinNguoiDung } from "reduxs/Slice/admin/UserSliceAdmin";

export const fetchLayThongTinUser = (MaNhom) => async (dispatch) => {
  try {
    const res = await userAPI.layThongTinNguoiDung(MaNhom);
    dispatch(LayThongTinNguoiDung(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const fetchDangNhap = (data, toast,navigate) => async (dispatch) => {
  try {
    const res = await userAPI.dangNhap(data);
    if (
      res.data.statusCode === statusCode.OK &&
      res.data.content.maLoaiNguoiDung === "QuanTri"
    ) {
      dispatch(loginAdminInfor(res.data.content));
      toast.success("Đăng nhập thành công!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // save localStorage
      localStorage.setItem(ACCESS_TOKEN_ADMIN, res.data.content.accessToken);
      setTimeout(() => {
        navigate("/admin/home");
      }, 2000);
    } else {
      toast.error("Đăng nhập thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
