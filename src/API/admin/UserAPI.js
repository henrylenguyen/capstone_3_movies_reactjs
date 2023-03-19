import AdminRequest  from "./requestAPIAdmin";

const userAPI = {
  layThongTinNguoiDung: (MaNhom) => 
    AdminRequest.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        MaNhom,
      },
    })
  };

export default userAPI;