import React, { useMemo, useRef, useState } from "react";
import bill from "assets/images/bill.png";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { removeAllBookedTicket } from "reduxs/Slice/TicketSlice";
import Swal from "sweetalert2";
import "animate.css";
import { ticketListBookingType } from "constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import ticketAPI from "API/ticketAPI";

function TotalAndPaid() {
  const dispatch = useDispatch();
  const bookedTicketList = useSelector(
    (state) => state.ticket.bookedTicketList
  );
  const params = useParams();
  const { scheduleId } = params;
  const timerId = useRef();
  const navigate = useNavigate();
  const [combo, setCombo] = useState({
    isChecked: false,
    price: 100000,
  });

  const totalMoney = useMemo(() => {
    return bookedTicketList.reduce((total, value) => {
      if (combo.isChecked) total = total + value.giaVe + combo.price;
      else total += value.giaVe;
      return total;
    }, 0);
  }, [bookedTicketList, combo]);

  function handleRemoveBookedTicket() {
    dispatch(removeAllBookedTicket());
  }

  function handleCheckUp() {
    if (bookedTicketList.length < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vui lòng chọn ghế trước khi thanh toán!",
      });
      return;
    }

    Swal.fire({
      title: "<p class='text-3xl capitalize'>Thanh toán</p>",
      icon: "info",
      html: `<p class="text-2xl" >Tổng số tiền của bạn là : ${totalMoney.toLocaleString()} đ</p>`,

      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,

      confirmButtonText: "Thanh toán",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          // map data
          const filterBookedTicketList = bookedTicketList.reduce(
            (result, bookTicket) => {
              let newBookTicket;

              for (let key of Object.keys(bookTicket)) {
                if (ticketListBookingType.includes(key))
                  newBookTicket = { ...newBookTicket, [key]: bookTicket[key] };
              }

              result.push(newBookTicket);
              return result;
            },
            []
          );

          const newValues = {
            maLichChieu: +scheduleId,
            danhSachVe: [...filterBookedTicketList],
          };

          await ticketAPI.bookTicket(newValues);

          Swal.fire({
            title: '<h2 class="capitalize text-3xl">Đặt vé thành công!</h2>',
            text: ' "Bạn đã đặt vé thành công"',
            icon: "success",
            html: `Tự động chuyền về trang chủ sau <b></b> giây`,
            timer: 2500,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerId.current = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 1000);
            },
            willClose: () => {
              clearInterval(timerId.current);
              // reset bookedTicketList data
              dispatch(removeAllBookedTicket());
              navigate("/");
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              // reset bookedTicketList data
              dispatch(removeAllBookedTicket());
              navigate("/");
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: "error",
            title: "<h2 class='capitalize text-2xl'>Chọn lại</h2>",
            text: "Bạn có thể chọn lại ghế nếu bạn muôn!",
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <div className="">
      {bookedTicketList.length < 1 && null}
      {bookedTicketList.length > 0 && (
        <>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() =>
                      setCombo((prevState) => ({
                        ...prevState,
                        isChecked: !prevState.isChecked,
                      }))
                    }
                    checked={combo.isChecked}
                  />
                }
                label="Thêm combo nước và bắp rang (100.000đ)"
              />
            </FormGroup>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={bill} className="w-28" />
              <p className="text-3xl">{totalMoney.toLocaleString()} đ</p>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                variant="outlined"
                className="text-2xl"
                onClick={handleRemoveBookedTicket}
              >
                Đặt lại
              </Button>
              <Button
                onClick={handleCheckUp}
                variant="contained"
                className="text-2xl"
              >
                Tiếp tục
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TotalAndPaid;
