import Form from 'components/admin/form/Form';
import React from 'react';
import { useSelector } from 'react-redux';
import * as yup from "yup";
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
];

const UserConfig = () => {
  const { ThongTinTaiKhoan } = useSelector((state) => state.userAdmin);
  console.log("ThongTinTaiKhoan:", ThongTinTaiKhoan);
  return (
    <div className='w-full'>
      <Form
        schema={schema}
        fields={fields}
        // handleSubmitForm={handleSubmitForm}
        title={"Thông tin tài khoản"}
        color="text-white"
      ></Form>
    </div>
  );
};

export default UserConfig;