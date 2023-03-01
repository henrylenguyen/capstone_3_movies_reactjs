import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/input/Input";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

// schema validation
const schema = yup
  .object({
    taiKhoan: yup.string().required("Tài khoản không được bỏ trống"),
    matKhau: yup.string().required("Mật khẩu không được bỏ trống"),
  })
  .required();

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandle = (values) => {
    console.log("values:", values);
    if (!isValid) return;
    // để hiển thị loading trên nút
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (values.taiKhoan === "admin" && values.matKhau === "admin@123") {
          toast.success("Đăng nhập thành công!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setIsLogin(true);
        }
        else{
          toast.error("Đăng nhập thất bại!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }, 1000);
    });
  };
  setTimeout(()=>{
    if(isLogin){
      return navigate("/")
    }
  },2000)
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <h2 className="text-[30px] font-bold">Login</h2>
        <form
          onSubmit={handleSubmit(onSubmitHandle)}
          className="w-[400px] py-5"
        >
          <div className="flex flex-col gap-y-5">
            <label htmlFor="taiKhoan" className="cursor-pointer">
              Tài khoản:
            </label>
            <Input
              control={control}
              name="taiKhoan"
              id="taiKhoan"
              type="text"
              placeholder="Nhập vào tài khoản của bạn"
              isUpdate={false}
              className="bg-white text-black rounded-xl"
            ></Input>
            <span className="text-red-300 italic text-[13px] md:text-[18px]">
              {errors?.taiKhoan?.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-5 my-5">
            <label htmlFor="taiKhoan" className="cursor-pointer">
              Mật khẩu:
            </label>
            <Input
              control={control}
              name="matKhau"
              id="matKhau"
              type="password"
              placeholder="1234..."
              isUpdate={false}
              className="bg-white text-black rounded-xl"
            ></Input>
            <span className="text-red-300 italic text-[13px] md:text-[18px]">
              {errors?.matKhau?.message}
            </span>
          </div>
          <button
            type="submit"
            className={`w-full md:p-3 text-[13px] md:text-[18px]  font-bold rounded-xl  cursor-pointer bg-[rgba(189,_12,_71,_1)]
          ${isSubmitting ? "opacity-50" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-[20px] h-[20px] rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
            ) : (
              "Đăng nhập"
            )}
          </button>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default LoginAdmin;
