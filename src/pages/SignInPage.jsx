import FormSignIn from "components/form/formSignIn/FormSignIn";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchSignIn } from "thunks/userThunk";
import styles from "./styles/signIn.module.scss";
import Swal from "sweetalert2";
import { ACCESS_TOKEN } from "constants/constants";
import SnackbarComponent from "components/snackbar/Snackbar";
import { login } from "reduxs/Slice/UserSlice";
import { resetLogin } from "reduxs/Slice/UserSlice";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const userLogin = useSelector((state) => state.user.userLogin);
  const hasLogin = useSelector((state) => state.user.hasLogin);
  const timerInterval = useRef();
  const timeoutId = useRef();
  async function handleSubmit(values) {
    try {
      await dispatch(fetchSignIn(values));
      dispatch(login());
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sai mật khẩu hoặc tài khoản!",
        footer: `
            <p>Nếu chưa có tài khoản, vui lòng đăng ký tài khoản!</p>
        `,
      });
    }
  }

  function handleCloseSnackbar() {
    dispatch(resetLogin());
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
    if (userLogin || accessToken) {
      timeoutId.current = setTimeout(() => {
        dispatch(resetLogin());

        navigate("/");
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  return (
    <>
      <section className={`${styles.signIn} py-24`}>
        <div className={`styles.signIn__content container mx-auto`}>
          <div className="signIn__container flex items-center justify-center">
            <div className="signIn__box bg-white p-4 rounded w-128">
              <div className="signIn__header flex flex-col items-center py-4 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-xl capitalize mt-2 font-medium">
                  Đăng nhập
                </h2>
              </div>
              <div className="signIn__body px-4 ">
                <FormSignIn onSubmit={handleSubmit} />
              </div>

              <Link
                to="/signUp"
                className="mt-4 block text-right text-blue-500 font-medium"
              >
                Bạn chưa có tài khoản ? Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SnackbarComponent
        type="success"
        message="Đăng nhập thành công"
        booleanState={hasLogin}
        time={2000}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default SignInPage;
