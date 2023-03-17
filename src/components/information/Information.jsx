import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Information() {
  const [openId, setOpenId] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClick(id) {
    setOpenId(id);
    setOpen((prevState) => !prevState);
  }

  return (
    <section className="information bg-white">
      <div className="information__content container mx-auto ">
        <div className="information__container py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 md:px-2">
            <div className="col-span-1">
              <h2 className="text-xl text-center md:text-left lg:text-3xl text-blue-500 font-medium">
                Bạn hỏi, MovieTheater trả lời
              </h2>
            </div>
            <div className="col-span-1 md:col-span-2">
              <List>
                <ListItemButton onClick={() => handleClick(1)}>
                  <ListItemText primary="Cách mua vé xem phim trên MovieTheater" />

                  {open && openId === 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </ListItemButton>
                <Collapse in={openId === 1 && open}>
                  <List component="div">
                    <ListItem sx={{ display: "block" }}>
                      <h2 className="text-xl mb-4">
                        Để đặt vé trên MovieTheater, các bạn cần làm theo các
                        bước sau đây:
                      </h2>
                      <ul className="block">
                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 1: </span>Chọn
                            rạp mà bạn cần muốn đến.
                          </p>
                        </li>
                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 2: </span>Chọn
                            phim mà bạn muốn xem
                          </p>
                        </li>

                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 3: </span>
                            Chọn cụm rạp mà bạn muốn đến
                          </p>
                        </li>

                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 4: </span>
                            Chọn phim, suất chiếu
                          </p>
                        </li>

                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 5: </span>
                            Chọn ghế ngồi
                          </p>
                        </li>

                        <li className="mb-2">
                          <p>
                            <span className="font-medium">Bước 6: </span>
                            Kiểm tra lại thông tin đặt vé, xác nhận và thanh
                            toán
                          </p>
                        </li>
                      </ul>
                      <p>
                        Sau khi giao dịch thành công , vé bạn mua sẽ được lưu
                        tại{" "}
                        <Link
                          className="text-blue-500 font-medium"
                          to="/user-info"
                          onClick={() =>
                            (document.documentElement.scrollTop = 0)
                          }
                        >
                          Lịch sử mua vé
                        </Link>{" "}
                        ở trang cá nhân
                      </p>
                    </ListItem>
                  </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(2)}>
                  <ListItemText primary="Cách nhận vé xem phim tại rạp" />

                  {open && openId === 2 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </ListItemButton>
                <Collapse in={openId === 2 && open}>
                  <List component="div">
                    <ListItem sx={{ display: "block" }}>
                      <h2 className="text-xl mb-4">
                        Bạn có thể nhận vé xem phim tại rạp bằng một trong 2
                        cách sau:
                      </h2>
                      <ul className="block">
                        <li className="mb-2">
                          <p>
                            Cung cấp mã lấy vé tại quầy mua vé online tại rạp
                            BHD Star.
                          </p>
                        </li>
                        <li className="mb-2">
                          <p>
                            Đọc cho nhân viên số điện thoại dùng để đăng ký khi
                            mua vé và nhận vé.
                          </p>
                        </li>
                      </ul>
                    </ListItem>
                  </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(3)}>
                  <ListItemText primary="Tôi muốn hủy/thay đổi suất chiếu khi đã đặt mua" />

                  {open && openId === 3 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </ListItemButton>
                <Collapse in={openId === 3 && open}>
                  <List component="div">
                    <ListItem sx={{ display: "block" }}>
                      <p>
                        Hiện tại MovieTheater chưa hỗ trợ hủy hoặc thay đổi
                        thông tin vé đã thanh toán. Bạn vui lòng liên hệ trực
                        tiếp Tổng đài của rạp phim để biết thêm chi tiết.
                      </p>
                    </ListItem>
                  </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(4)}>
                  <ListItemText primary="Có thể mua vé xem phim những rạp nào ?" />

                  {open && openId === 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </ListItemButton>
                <Collapse in={openId === 4 && open}>
                  <List component="div">
                    <ListItem sx={{ display: "block" }}>
                      <p>
                        Hiện tại bạn có thể đặt vé tại rạp phim cũng như xem
                        lịch chiếu phim các rạp sau: CGV Cinemas, Lotte Cinema,
                        Galaxy Cinema, BHD Star, Mega GS, Cinestar
                      </p>
                    </ListItem>
                  </List>
                </Collapse>

                <ListItemButton onClick={() => handleClick(5)}>
                  <ListItemText primary="Tôi cần trợ giúp khác" />

                  {open && openId === 5 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </ListItemButton>
                <Collapse in={openId === 5 && open}>
                  <List component="div">
                    <p>
                      Vui lòng liên hệ bộ phận Chăm Sóc Khách Hàng của
                      MovieTheater qua Hotline 1900 545 xxx hoặc gửi hỗ trợ tại
                      mục Trợ Giúp trong VÍ CỦA TÔI tại trên ứng dụng nếu bạn
                      cần thêm thông tin
                    </p>
                  </List>
                </Collapse>
              </List>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
