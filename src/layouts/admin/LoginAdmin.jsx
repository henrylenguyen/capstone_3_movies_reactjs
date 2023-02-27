import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/input/Input";
import Modal from "components/modal/Modal";
// schema validation
const schema = yup
  .object({
    taiKhoan: yup.string().required("Tài khoản không được bỏ trống"),
    matKhau: yup.string().required("Mật khẩu không được bỏ trống"),
  })
  .required();

const LoginAdmin = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful, },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmitHandle = (values) => {
    if (!isValid) return;
    // để hiển thị loading trên nút
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (values.taiKhoan === "admin" && values.matKhau === "admin@123") {
          <Modal title="Đăng nhập thành công"></Modal>
        }
      }, 500);
    });
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-[30px] font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmitHandle)} className="w-[400px] py-5">
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
  );
};

export default LoginAdmin;
