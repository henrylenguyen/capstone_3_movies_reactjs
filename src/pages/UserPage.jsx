import { FormControlLabel, Switch } from "@mui/material";
import userAPI from "API/userAPI";
import FormUser from "components/form/formUser/FormUser";
import HistoryBookingList from "components/historyBookingList/HistoryBookingList";

import SnackbarComponent from "components/snackbar/Snackbar";
import { ACCESS_TOKEN } from "constants/constants";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserLogin } from "reduxs/Slice/UserSlice";
import Swal from "sweetalert2";

import "./styles/userInfo.scss";

function UserPage() {
  const userLogin = useSelector((state) => state.user.userLogin);
  const [switchChange, setSwitchChange] = useState(false);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const [hasUpdate, setHasUpdate] = useState(false);

  const timeoutId = useRef();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleSubmitUpdate(values) {
    try {
      await userAPI.updateUser(values);
      setHasUpdate(true);
      dispatch(updateUserLogin(values));
      setSwitchChange(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeSwitch() {
    setSwitchChange((prevState) => !prevState);
  }

  function handleCloseSnackbar() {
    setHasUpdate(false);
  }

  // close snackbar
  useEffect(() => {
    if (userLogin) {
      timeoutId.current = setTimeout(() => {
        setHasUpdate(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  // check if user hasn't login , then will return them to login
  // only user has login can access to user page

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

  return (
    <section className="userInfo py-24">
      <div className="userInfo__content container mx-auto">
        {userLogin && (
          <div className="userInfo__container flex justify-center">
            <div className="userInfo__box w-96 lg:w-[60rem] md:w-160 bg-white p-4 rounded">
              <h2 className="text-xl uppercase border-b-2 pb-2 mb-4">
                Thông tin người dùng
              </h2>

              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={switchChange}
                      onChange={handleChangeSwitch}
                    />
                  }
                  label={`${
                    switchChange ? "Cập nhật thông tin" : "Xem thông tin"
                  }`}
                />
                <FormUser
                  switchChange={switchChange}
                  onSubmitUpdate={handleSubmitUpdate}
                />
              </div>
              <div className="py-4 border-t-2">
                <h2 className="uppercase text-xl">Lịch sử đặt vé</h2>
                <HistoryBookingList />
              </div>
            </div>
          </div>
        )}
        {!userLogin && <div></div>}
      </div>

      <SnackbarComponent
        booleanState={hasUpdate}
        type="success"
        message="Đã cập nhật thông tin"
        onClose={handleCloseSnackbar}
        time={3000}
      />
    </section>
  );
}

export default UserPage;
