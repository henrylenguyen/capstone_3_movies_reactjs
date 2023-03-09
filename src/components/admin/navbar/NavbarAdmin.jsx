
import React from "react";
import { useSelector } from "react-redux";
import CottageIcon from "@mui/icons-material/Cottage";
import { NavLink } from "react-router-dom";
import { navList } from "routes/admin/Slug";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ControlledAccordions from "../accordion/Accordion";
const NavbarAdmin = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  return (
    <div
      className={`flex flex-col gap-y-5 transition-all ease-in-out duration-300 flex-shrink-0 ${
        isOpen ? " w-[350px] mr-5" : "navbarTransition absolute"
      }`}
    >
      <div className="user-admin">
        <ControlledAccordions
          avatar={true}
          src="https://avatars.githubusercontent.com/u/114068860?s=400&u=7b5754ce23d6edad81b3b988932a84c17da3e56b&v=4"
          alt="avatar"
          title="Lê Nguyễn Phương Thái"
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
            <AccountCircleIcon fontSize="large" sx={{ marginRight: "10px" }}></AccountCircleIcon>
            Thông tin tài khoản
          </NavLink>
          <button className="text-adminThirdary p-4 text-left">
            <LogoutIcon fontSize="large" sx={{ marginRight: "10px" }}></LogoutIcon>
            Đăng xuất
          </button>
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
