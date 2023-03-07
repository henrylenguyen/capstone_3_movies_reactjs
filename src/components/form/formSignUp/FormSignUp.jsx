import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { USER_GROUP } from "constants/constants";
import React from "react";
import { useForm } from "react-hook-form";
import { schemaSignUp } from "schemas";
import CheckboxField from "../form-controls/CheckboxField";
import InputField from "../form-controls/InputField";

function FormSignUp({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: `${USER_GROUP}`,
      hoTen: "",
      retypeMatKhau: "",
      hasAgree: false,
    },
    resolver: yupResolver(schemaSignUp),
  });

  function handleSubmit(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="mb-5">
        <InputField label="Tài khoản*" name="taiKhoan" form={form} />
      </div>

      <div className="mb-5">
        <InputField label="Email*" name="email" form={form} />
      </div>

      <div className="mb-5">
        <InputField label="Họ tên*" name="hoTen" form={form} />
      </div>

      <div className="mb-5">
        <InputField label="Số điện thoại*" name="soDt" form={form} />
      </div>

      <div className="mb-5">
        <InputField
          type="password"
          label="Mật khẩu*"
          name="matKhau"
          form={form}
        />
      </div>

      <div className="mb-5">
        <InputField
          type="password"
          label="Nhập lại mật khẩu*"
          name="retypeMatKhau"
          form={form}
        />
      </div>

      <div className="mb-4">
        <CheckboxField
          name="hasAgree"
          form={form}
          label={`Tôi đã đồng ý với Điều Khoản của MovieTheater`}
        />
      </div>

      <Button type="submit" className="w-full" variant="contained">
        Đăng ký
      </Button>
    </form>
  );
}

export default FormSignUp;
