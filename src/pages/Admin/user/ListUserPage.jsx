import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import useModalForm from "HOCS/useModalForm";
import React from "react";
import getColumnConfig from "utils/admin/dataColumn";

import * as yup from "yup";
const handleDelete = (item) => {
  console.log(item);
};
const handleSubmitForm = (data) => {
  console.log(data);
};
const schema = yup.object().shape({}).required();

const fields = [
  {
    label: "Họ tên",
    name: "hoTen",
    type: "text",
    placeholder: "Nhập Họ Tên",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Nhập Email",
  },
  {
    label: "Số điện thoại",
    name: "soDT",
    type: "tel",
    placeholder: "Nhập Số Điện Thoại",
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
];

export default function ListUserPage({ user }) {
  const { ModalForm, openModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Chỉnh sửa Người dùng",
  });
  const handleEdit = () => {
    openModal();
  };
  const arr = [];
  user?.map((item) => {
    const { maNhom, ...rest } = item;
    arr.push({ ...rest, tuyChinh: "hành động" });
  });
  const data = arr;
  // 1. Lấy ra tất cả các key của object
  const keys = data && Object.keys(data[0]);
  const dataIndexKey = keys?.map((item) => {
    return {
      dataIndex: item,
      key: item,
    };
  });
  const dataTitle = [
    { title: "Tài khoản" },
    { title: "Họ tên" },
    { title: "Email" },
    { title: "Số ĐT" },
    { title: "Mã loại người dùng" },
    { title: "Tùy chỉnh" },
  ];

  const columns = dataTitle.map((title) => {
    const removeTone = removeVietnameseTones(title.title);
    const newTitle = removeTone.replace(/\s+/g, "").toLowerCase();
    const dataIndexKeyItem = dataIndexKey.find(
      (item) => item.key.toLowerCase() === newTitle
    );

    return getColumnConfig(
      title,
      dataIndexKeyItem,
      newTitle,
      handleEdit,
      handleDelete
    );
  });

  return (
    <>
      <ModalForm></ModalForm>
      <CustomTable columns={columns} data={data}></CustomTable>
    </>
  );
}
