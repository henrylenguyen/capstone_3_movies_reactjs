import AdminRequest from "./requestAPIAdmin";

const TicketAPI = {
  TaoLichChieu: (data) => AdminRequest.post("/QuanLyDatVe/TaoLichChieu", data),
};
export default TicketAPI;
