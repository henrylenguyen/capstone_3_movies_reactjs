import userAPI from "API/userAPI";
import FormSignUp from "components/form/formSignUp/FormSignUp";
import SnackbarComponent from "components/snackbar/Snackbar";
import { ACCESS_TOKEN } from "constants/constants";
import { SIGNUP_VARIABLE } from "constants/constants";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetRegister } from "reduxs/Slice/UserSlice";
import { register } from "reduxs/Slice/UserSlice";
import Swal from "sweetalert2";
import styles from "./styles/signUp.module.scss";

const SignUpPage = () => {
  const hasSignUp = useSelector((state) => state.user.hasSignUp);
  const userLogin = useSelector((state) => state.user.userLogin);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const dispatch = useDispatch();
  const timeoutId = useRef();
  const navigate = useNavigate();
  const [hasRegister, setHasRegister] = useState(false);
  const timerInterval = useRef();

  async function handleSubmitForm(values) {
    try {
      const newValues = { ...values };

      // map data
      for (let key of Object.keys(newValues)) {
        if (!SIGNUP_VARIABLE.includes(key)) {
          delete newValues[key];
        }
      }

      await userAPI.signUp(newValues);
      setHasRegister(true);
      // console.log(newValues);
      dispatch(register());
    } catch (error) {
      console.log(error);
      const { status, data } = error.response;
      if (status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${data.content}`,
        });
      }
    }
  }

  function handleCloseSnackbar() {
    dispatch(resetRegister());
  }

  // Prevent after user login that can access to auth page

  useEffect(() => {
    if (accessToken || userLogin) {
      Swal.fire({
        title: "Bạn đã đăng nhập!",
        html: "Sẽ quay trở lại trang chủ sau <b></b> giây",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval.current = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 1000);
        },
        willClose: () => {
          clearInterval(timerInterval.current);
          navigate("/");
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Đã quay lại trang chủ");
        }
      });
    }
  }, []);

  useEffect(() => {
    if (hasSignUp || hasRegister) {
      timeoutId.current = setTimeout(() => {
        dispatch(resetRegister());
        setHasRegister(false);
        navigate("/signIn");
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  return (
    <>
      <section className={`${styles.signUp} py-24`}>
        <div className={`signUp__content container mx-auto`}>
          <div className="signUp__container flex items-center justify-center">
            <div className="signUp__box bg-white p-4 rounded w-128">
              <div className="signUp__header flex flex-col items-center py-4 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500 font-medium"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <h2 className="text-xl capitalize mt-2 font-medium">Đăng ký</h2>
              </div>
              <div className="signIn__body px-4">
                <FormSignUp onSubmit={handleSubmitForm} />
              </div>

              <Link
                to="/signIn"
                className="mt-4 block text-right text-blue-500 font-medium"
              >
                Bạn đã có tài khoản ? Đăng nhập ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SnackbarComponent
        booleanState={hasSignUp}
        type="success"
        message="Đăng ký thành công!"
        onClose={handleCloseSnackbar}
        time={3000}
      />
    </>
  );
};

export default SignUpPage;
