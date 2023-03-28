import TicketAPI from "API/admin/ticketAPI";
import { message } from "antd";
export const fetchTaoLichChieu = (lich) => async (dispatch) => {
  try {
    const res = await TicketAPI.TaoLichChieu(lich);
    if (res.data.statusCode === 200) {
      message.success("Thêm mới lịch chiếu phim thành công!");
    }
  } catch (error) {
    message.error(
      `Thêm mới lịch chiếu phim thất bại, ${error.response.data.content}`
    );
  }
};
