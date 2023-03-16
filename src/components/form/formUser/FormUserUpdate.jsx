import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import InputField from "../form-controls/InputField";
import { schemaUpdateUser } from "schemas";

import { UPDATE_VARIABLE } from "constants/constants";
import { Button } from "@mui/material";

function FormUserUpdate({ onSubmitUpdate }) {
  const userLogin = useSelector((state) => state.user.userLogin);

  const form = useForm({
    defaultValues: {
      hoTen: "",
      soDt: "",
      matKhau: "",
      retypeMatKhau: "",
      maLoaiNguoiDung: "",
    },
    // update value again after re render page
    values: {
      hoTen: `${userLogin.hoTen}`,
      soDt: `${userLogin.soDT}`,
      maLoaiNguoiDung: `${userLogin.maLoaiNguoiDung}`,
    },
    resolver: yupResolver(schemaUpdateUser),
  });

  function handleSubmitUpdate(values) {
    if (userLogin) {
      const newValues = { ...userLogin, ...values };

      // // map values
      for (let key of Object.keys(newValues)) {
        if (!UPDATE_VARIABLE.includes(key)) {
          delete newValues[key];
        }
      }

      if (onSubmitUpdate) onSubmitUpdate(newValues);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmitUpdate, (errors) =>
        console.log(errors)
      )}
    >
      <div className="mb-4">
        <InputField name="hoTen" label="Họ tên*" form={form} />
      </div>
      <div className="mb-4">
        <InputField name="soDt" label="Điện thoại*" form={form} />
      </div>

      <div className="mb-4">
        <InputField
          type="password"
          name="matKhau"
          label="Mật khẩu mới*"
          form={form}
        />
      </div>

      <div className="mb-4">
        <InputField
          type="password"
          name="retypeMatKhau"
          label="Nhập lại mật khẩu*"
          form={form}
        />
      </div>

      <div className="flex justify-end">
        <Button variant="contained" type="submit">
          Cập nhật
        </Button>
      </div>
    </form>
  );
}

export default FormUserUpdate;
