import { message } from "antd";
import userAPI from "API/admin/UserAPI";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import { statusCode } from "constants/admin/constants";
import { layThongTinTaiKhoan } from "reduxs/Slice/admin/UserSliceAdmin";
import { layDanhSachNguoiDung } from "reduxs/Slice/admin/UserSliceAdmin";

export const fetchLayThongTinDanhSachUser = (MaNhom) => async (dispatch) => {
  try {
    const res = await userAPI.layDanhSachNguoiDung(MaNhom);
    dispatch(layDanhSachNguoiDung(res.data.content));
  } catch (error) {
    console.log(error);
  }
};


export const fetchLayThongTinTaiKhoan = () => async (dispatch) => {
  try {
    const res = await userAPI.layThongTinTaiKhoan();
    if (res.data.statusCode === statusCode.OK){
      dispatch(layThongTinTaiKhoan(res.data.content));
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchDangNhap = (data, toast, navigate) => async (dispatch) => {
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
export const XoaNguoiDungAction = (TaiKhoan) => {
  return async (dispatch) => {
    try {
      const res = await userAPI.XoaNguoiDung(TaiKhoan);
      if (res.data.statusCode === 200) {
        message.success("Xóa người dùng thành công");
      }
    } catch (error) {
      message.error(`Xóa người dùng thất bại, ${error.response.data.content}`);
    }
  };
};
