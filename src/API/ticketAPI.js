import { ACCESS_TOKEN } from "constants/constants";
import axiosClient from "./requestAPI";

const ticketAPI = {
  getTicketRoomData(scheduleId) {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe`;
    return axiosClient.get(url, {
      params: {
        MaLichChieu: scheduleId,
      },
    });
  },
  bookTicket(data) {
    const url = `/QuanLyDatVe/DatVe`;
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};

export default ticketAPI;
