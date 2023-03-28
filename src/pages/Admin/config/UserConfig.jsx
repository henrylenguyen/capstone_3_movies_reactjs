import Form from 'components/admin/form/Form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChinhSuaNguoiDung } from 'thunks/admin/userThunks';

import * as yup from "yup";


let option = [];

for (let i = 0; i < 10; i++) {
  option.push({ label: `GP0${i}`, value: `GP0${i}`, id: i });
}
const schema = yup
  .object()
  .shape({
    
  })
  .required();
const fields = [
  {
    label: "Tài khoản",
    name: "taiKhoan",
    type: "text",
    placeholder: "Tài khoản",
  },
  {
    label: "Mật khẩu",
    name: "matKhau",
    type: "password",
    placeholder: "Mật khẩu",
  },
  {
    label: "Họ và tên",
    name: "hoTen",
    type: "text",
    placeholder: "Họ và tên",
  },
  {
    label: "Số điện thoại",
    name: "soDT",
    type: "tel",
    placeholder: "Số điện thoại",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    label: "Loại khách hàng",
    name: "maLoaiNguoiDung",
    type: "select",
    options: [
      { label: "Khách hàng", value: "KhachHang" },
      { label: "Quản trị", value: "QuanTri" },
    ],
  },
  {
    label: "Mã nhóm",
    name: "maNhom",
    type: "select",
    options: option,
  },
];

const UserConfig = () => {
  const { ThongTinTaiKhoan } = useSelector((state) => state.userAdmin);
  const dispatch = useDispatch();
    const handleSubmitForm = (data) => {
     dispatch(fetchChinhSuaNguoiDung(data));
      
    };
  return (
    <div className="w-full">
      <Form
        schema={schema}
        fields={fields}
        handleSubmitForm={handleSubmitForm}
        title={"Thông tin tài khoản"}
        color="text-white"
        initialValues={ThongTinTaiKhoan}
      ></Form>
    </div>
  );
};

export default UserConfig;