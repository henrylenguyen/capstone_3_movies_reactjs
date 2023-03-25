import AdminRequest  from "./requestAPIAdmin";

const userAPI = {
  layThongTinNguoiDung: (MaNhom) => 
    AdminRequest.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        MaNhom,
      },
    }),
    dangNhap: (data) => AdminRequest.post("/QuanLyNguoiDung/DangNhap", data)
  };

export default userAPI;