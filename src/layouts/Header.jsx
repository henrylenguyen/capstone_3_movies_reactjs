import { Button, Menu, MenuItem, MenuList } from "@mui/material";

import clsx from "clsx";
import { ACCESS_TOKEN } from "constants/constants";
import { USER_TYPE } from "constants/constants";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "reduxs/Slice/UserSlice";
import "./styles/header.scss";

const navigateList = [
  { id: 1, name: "Danh sách phim", idPath: "#movieList" },
  { id: 2, name: "Cụm rạp", idPath: "#theaterList" },
  { id: 3, name: "Ứng dụng", idPath: "#application" },
];

function Header() {
  const [showNav, setShowNav] = useState(false);
  const userLogin = useSelector((state) => state.user.userLogin);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  function handleToggleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  function handleShowNavbar() {
    setShowNav((prevState) => !prevState);
  }

  function handleCloseNavbar() {
    setShowNav(false);
  }

  function handleLogout() {
    dispatch(logoutUser());
    localStorage.removeItem(ACCESS_TOKEN);
  }

  return (
    <header className="header fixed">
      <section className={`header__container container mx-auto`}>
        <div className="header__content flex items-center md:justify-around justify-between">
          <div className="header__logo-container flex items-center justify-between">
            <div className="header__mobile-bar ">
              <Button sx={{ color: "#000" }} onClick={handleShowNavbar}>
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </Button>
            </div>

            <div className="header__logo">
              <Link to="/" className="flex items-center gap-1 h-full">
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
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                  />
                </svg>
                <h2 className="text-base  md:text-xl ">MovieTheater</h2>
              </Link>
            </div>
          </div>
          <div className="header__navbar flex items-center gap-6">
            <div className="header_mobile-auth"></div>

            {navigateList.map((navigate) => (
              <a
                className="header__navbar-link font-medium text-base"
                href={navigate.idPath}
                key={navigate.id}
                variant="a"
              >
                {navigate.name}
              </a>
            ))}
          </div>
          <div className="header__user flex items-center gap-6">
            {!userLogin && (
              <>
                <div className="header__user-auth">
                  <Link
                    to="/signIn"
                    className="font-medium text-sm md:text-base"
                  >
                    Đăng Nhập
                  </Link>
                </div>
                <div className="header__user-auth">
                  <Link
                    to="/signUp"
                    className="font-medium text-sm md:text-base"
                  >
                    Đăng Ký
                  </Link>
                </div>
              </>
            )}
            {userLogin && (
              <div className="header__user-login">
                <Button onClick={handleToggleClick}>{userLogin.hoTen}</Button>
                <div
                  className={clsx(`header__user-login-menu bg-white rounded`, {
                    open: openMenu,
                  })}
                >
                  <MenuList className="w-full overflow-hidden">
                    {userLogin.maLoaiNguoiDung === USER_TYPE.manager && (
                      <MenuItem>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mr-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Trang quản lý
                      </MenuItem>
                    )}
                    <MenuItem onClick={handleLogout}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      Đăng xuất
                    </MenuItem>
                  </MenuList>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div
        className={clsx("header__modal-mobile", {
          open: showNav,
        })}
      >
        <div
          className="header__modal-mobile-overlay"
          onClick={handleCloseNavbar}
        ></div>
        <div className="header__modal-mobile-menu">
          <div className="header__mobile-auth mb-4 p-4 border-b-2">
            <div className="header__user-auth">
              <Link to="/signIn" className="font-medium text-sm md:text-base">
                Đăng Nhập
              </Link>
            </div>
            <div className="header__user-auth">
              <Link to="/signUp" className="font-medium text-sm md:text-base">
                Đăng Ký
              </Link>
            </div>
          </div>

          <div className="px-4">
            {navigateList.map((navigate) => (
              <a
                className="header__navbar-link block my-3 font-medium text-base"
                href={navigate.idPath}
                key={navigate.id}
                variant="a"
              >
                {navigate.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
