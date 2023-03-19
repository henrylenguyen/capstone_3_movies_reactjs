import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../form-controls/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignIn } from "schemas";

function FormSignIn({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(schemaSignIn),
  });

  function handleSubmitForm(values) {
    if (onSubmit) onSubmit(values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <div className="mb-5">
        <InputField label="Tài Khoản*" name="taiKhoan" form={form} />
      </div>
      <div className="mb-5">
        <InputField
          type="password"
          label="Mật Khẩu*"
          name="matKhau"
          form={form}
        />
      </div>

      <Button type="submit" className="w-full" variant="contained">
        Đăng nhập
      </Button>
    </form>
  );
}

export default FormSignIn;
