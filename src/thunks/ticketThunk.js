import ticketAPI from "API/ticketAPI";
import { getTicketData } from "reduxs/Slice/TicketSlice";

export function fetchTicketData(scheduleId) {
  return async function (dispatch) {
    try {
      const res = await ticketAPI.getTicketRoomData(scheduleId);

      dispatch(getTicketData(res.data.content));
    } catch (error) {
      console.log(error);
    }
  };
}
