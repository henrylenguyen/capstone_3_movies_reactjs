import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CottageIcon from "@mui/icons-material/Cottage";
import { NavLink, useNavigate } from "react-router-dom";
import { navList } from "routes/admin/Slug";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ControlledAccordions from "../accordion/Accordion";
import Swal from "sweetalert2";
import MyButton from "../button/MyButton";
import { message } from "antd";
import { ACCESS_TOKEN_ADMIN } from "constants/admin/constants";
import { ACCESS_TOKEN } from "constants/constants";
import { fetchLayThongTinTaiKhoan } from "thunks/admin/userThunks";
const NavbarAdmin = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ThongTinTaiKhoan } = useSelector((state) => state.userAdmin);
  const { hoTen } = ThongTinTaiKhoan;
  useEffect(() => {
    dispatch(fetchLayThongTinTaiKhoan());
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN_ADMIN);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem("isQuanTri");
   let timerInterval;
   Swal.fire({
     title: "Đang đăng xuất",
     html: "Bạn sẽ được chuyển về trang đăng nhập sau <b></b> giây.",
     timer: 1500,
     timerProgressBar: true,
     didOpen: () => {
       Swal.showLoading();
       const b = Swal.getHtmlContainer().querySelector("b");
       timerInterval = setInterval(() => {
         b.textContent = Swal.getTimerLeft();
       }, 100);
     },
     willClose: () => {
       clearInterval(timerInterval);
         navigate("/admin/login");
     },
   }).then((result) => {
     /* Read more about handling dismissals below */
     if (result.dismiss === Swal.DismissReason.timer) {
      message.info("Đã đăng xuất khỏi hệ thống")
     }
   });
  };

  return (
    <div
      className={`flex flex-col gap-y-5 transition-all ease-in-out duration-300 flex-shrink-0 ${
        isOpen ? " w-[350px] mr-5" : "navbarTransition absolute"
      }`}
    >
      <div className="user-admin">
        <ControlledAccordions
          avatar={true}
          src=""
          alt="avatar"
          title={hoTen}
          sx={{ bgcolor: "#2B2B4B", color: "#fff", p: 2 }}
        >
          <NavLink
            to={"/admin/thong-tin-tai-khoan"}
            className={({ isActive }) =>
              isActive
                ? "bg-adminSecondary text-white w-full p-2 block"
                : "p-4 text-adminThirdary w-full"
            }
          >
            <AccountCircleIcon
              fontSize="large"
              sx={{ marginRight: "10px" }}
            ></AccountCircleIcon>
            Thông tin tài khoản
          </NavLink>
          <div className="text-adminThirdary p-5 text-left">
            <MyButton
              title="Đăng xuất khỏi hệ thống"
              text="Bạn sẽ đăng xuất hệ thống và không còn truy cập hệ thống được nữa"
              icon="warning"
              confirmButtonText="Yes"
              cancelButtonText="No"
              children1={() => {
                handleLogout();
              }}
              children2={() => {}}
            >
              {" "}
              <LogoutIcon
                fontSize="large"
                sx={{ marginRight: "10px" }}
              ></LogoutIcon>
              Đăng xuất
            </MyButton>
          </div>
        </ControlledAccordions>
      </div>
      <div className="navbar p-4 bg-adminPrimary">
        <div className="w-full flex items-center pt-4 ">
          <NavLink
            to={"/admin/home"}
            className={({ isActive }) =>
              isActive
                ? "bg-adminSecondary text-white w-full p-2 block"
                : "p-4 text-adminThirdary w-full"
            }
          >
            <CottageIcon
              fontSize="large"
              sx={{ marginRight: "10px" }}
            ></CottageIcon>
            Trang chủ
          </NavLink>
        </div>
        {navList?.map((item) => (
          <ControlledAccordions
            avatar={false}
            title={item.title}
            icon={<item.icon fontSize="large" />}
            sx={{ bgcolor: "#2B2B4B", color: "#fff" }}
            key={item.id}
          >
            {item.children?.map((itemChild) => (
              <NavLink
                key={itemChild.child_id}
                to={itemChild.to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-adminSecondary text-white p-4"
                    : "p-4 text-adminThirdary"
                }
              >
                {itemChild.title_child}
              </NavLink>
            ))}
          </ControlledAccordions>
        ))}
      </div>
    </div>
  );
};

export default NavbarAdmin;
