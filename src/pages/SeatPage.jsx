import React, { useEffect, useState } from "react";
import Line from "assets/images/Line 1.png";
import "./styles/seatPage.scss";
import SeatList from "components/seatList/SeatList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTicketData } from "thunks/ticketThunk";
import { seatInfor } from "constants/constants";
import BookingInfo from "components/bookingInfo/BookingInfo";
import BookingTicketDetail from "components/bookingTicketDetail/BookingTicketDetail";
import TotalAndPaid from "components/totalAndPaid/TotalAndPaid";
import Swal from "sweetalert2";
import { ACCESS_TOKEN } from "constants/constants";
import ScrollBtn from "components/scrollBtn/ScrollBtn";
import { resetTicketData } from "reduxs/Slice/TicketSlice";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function SeatPage() {
  const userLogin = useSelector((state) => state.user.userLogin);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();

  const { scheduleId } = params;

  useEffect(() => {
    dispatch(fetchTicketData(+scheduleId));

    return () => {
      dispatch(resetTicketData());
    };
  }, []);

  useEffect(() => {
    if (!userLogin || !accessToken) {
      Swal.fire({
        title: "Bạn chưa đăng nhập tài khoản",
        text: " Vui lòng đăng nhập tài khoản",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Chuyển tới trang đăng nhập!",
        cancelButtonText: "Quay lại trang chủ!",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn");
        } else {
          navigate("/");
        }
      });
    }
  }, []);

  useEffect(() => {
    function handleShowScrollBtn() {
      setShowScrollBtn(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleShowScrollBtn);

    return () => {
      window.removeEventListener("scroll", handleShowScrollBtn);
    };
  }, []);

  return (
    <section className="seat__container bg-[#021224] w-full h-full text-white pb-5 md:pb-0 aspect-auto">
      <div className="seat__content xl:flex xl:justify-between mx-auto pt-[5rem] xl:pb-[5rem] gap-7 xl:flex-row sm:container md:p-5 ">
        <div className="xl:w-[60%] w-[100%] pb-10 lg:pb-0">
          <div className="flex flex-col items-center">
            <img
              src={Line}
              className="w-[40rem] md:w-[30rem] md:ml-[5rem] md:ml-0 px-2 md:px-0"
              alt=""
            />
            <h3 className="uppercase md:ml-[5rem] md:ml-0">Màn hình</h3>
          </div>
          <SeatList />

          <div className="seat__info md:flex justify-around xl:items-center p-[2rem] items-center">
            {seatInfor.map((item) => (
              <div key={item.id}>
                <span
                  className={`inline-block w-[30px]  ${
                    item.id === 1
                      ? "bg-[#655F64]"
                      : item.id === 2
                      ? "bg-[#FB01D4]"
                      : item.id === 3
                      ? "bg-[#0E16DF]"
                      : item.id === 4
                      ? "bg-[#DF0E0E]"
                      : `bg-[${item.color}]`
                  }  h-[15px] mr-5`}
                ></span>
                <span className="text-[1.2rem]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full rounded-[2rem] xl:w-[40%]  sm:w-[100%] bg-[#212F4F]  rounded-b-none p-[1.5rem] md:rounded-[2rem] mt-[6rem] aspect-auto hidden lg:block">
          <BookingInfo />
          <BookingTicketDetail />
          <TotalAndPaid />
        </div>
      </div>

      {showScrollBtn && <ScrollBtn />}
      <div className="seat-mobile-checkout w-full rounded-t-[2rem] w-[100%] bg-[#212F4F] block lg:hidden p-[0.4rem] text-white">
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            }
          >
            <BookingInfo />
          </AccordionSummary>
          <AccordionDetails>
            <BookingTicketDetail />
            <TotalAndPaid />
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}

export default SeatPage;
