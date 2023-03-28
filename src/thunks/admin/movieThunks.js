import { message } from "antd";
import MovieApi from "API/admin/MovieAPI";
import { LayThongTinPhim } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayThongTinLichChieuHeThongRap } from "reduxs/Slice/admin/MovieSliceAdmin";
import { LayDanhSachPhim } from "reduxs/Slice/admin/MovieSliceAdmin";

export const fetchLichChieuHeThongRap = (maNhom) => async (dispatch) => {
  try {
    const res = await MovieApi.LayThongTinLichChieuHeThongRap(maNhom);
    dispatch(LayThongTinLichChieuHeThongRap(res.data.content));
  } catch (error) {
    console.log(error);
  }
};

export const fetchLayDanhSachPhim = (maNhom) => async (dispatch) => {
  try {
    const res = await MovieApi.LayDanhSachPhim(maNhom);
    dispatch(LayDanhSachPhim(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
export const ThemPhimUploadHinh = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const res = await MovieApi.ThemMoiPhim(formData);
      if (res.data.statusCode === 200) {
        message.success("Thêm mới phim thành công!");
        navigate("/admin/danh-sach-phim");
      }
    } catch (error) {
      message.error(`Thêm mới phim thất bại, ${error.response.data.content}`);
      
    }
  };
};
export const FetchLayThongTinPhim = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await MovieApi.LayThongTinPhim(maPhim);
      
      dispatch(LayThongTinPhim(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
export const XoaPhimAction = (MaPhim) => {
  console.log(MaPhim);
  return async (dispatch) => {
    try {
      const res = await MovieApi.XoaPhim(MaPhim);
      if (res.data.statusCode === 200) {
        message.success("Xóa phim thành công");
       
      }
    } catch (error) {
      message.success("Xóa phim thất bại");
    }
  };
};
