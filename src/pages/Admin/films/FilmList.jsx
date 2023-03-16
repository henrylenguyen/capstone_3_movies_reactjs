import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useState } from "react";
import getColumnConfig from "utils/admin/dataColumn";
import useModalForm from "hooks/useModalForm";

const schema = yup
  .object()
  .shape({
    tenPhim: yup
      .string()
      .required("Tên phim là bắt buộc")
      .min(5, "Tên phim ít nhất 5 ký tự"),
    moTa: yup
      .string()
      .required("Mô tả là bắt buộc")
      .min(10, "Mô tả ít nhất 10 ký tự"),
    dangChieu: yup.boolean().required("Bạn phải chọn ít nhất một giá trị"),
    trailer: yup
      .string()
      .required("Vui lòng nhập đường dẫn youtube")
      .matches(
        /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/gm,
        "Vui lòng nhập đường dẫn Youtube hợp lệ"
      ),
    biDanh: yup
      .string()
      .required("Bí danh là bắt buộc")
      .matches(/^[a-zA-Z0-9._-]{3,}$/gm, "Vui lòng nhập bí danh hợp lệ"),
    hot: yup.boolean(),
  })
  .required();

const fields = [
  {
    label: "Tên phim",
    name: "tenPhim",
    type: "text",
    placeholder: "Nhập tên phim",
  },
  {
    label: "Bí danh",
    name: "biDanh",
    type: "text",
    placeholder: "Nhập bí danh",
  },
  {
    label: "Mô tả",
    name: "moTa",
    type: "textarea",
    placeholder: "Nhập mô tả",
  },
  {
    label: "Trailer",
    name: "trailer",
    type: "text",
    placeholder: "Nhập url trailer youtube",
  },
  {
    label: "Hình ảnh",
    name: "hinhAnh",
    type: "file",
  },

  {
    name: "dangChieu",
    label: "Trạng thái",
    type: "radio",
    options: [
      { label: "Đang chiếu", value: true, id: 1 },
      { label: "Sắp chiếu", value: false, id: 2 },
    ],
  },
  {
    label: "",
    name: "hot",
    type: "checkbox",
    options: [{ label: "Đang hot", value: false, id: 1 }],
  },
];

const handleDelete = (item) => {
  console.log(item);
};
const handleSubmitForm = (data) => {
  console.log(data);
};
const FilmList = ({ phim }) => {
  const { ModalForm, openModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Chỉnh sửa Phim",
  });

  const handleEdit = () => {
    openModal();
  };
  const arr = [];
  phim?.map((item) => {
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
    { title: "Mã phim" },
    { title: "Tên phim" },
    { title: "Hình ảnh" },
    { title: "Mô tả" },
    { title: "Đánh giá" },
    { title: "Bí danh" },
    { title: "Trailer" },
    { title: "Hot" },
    { title: "Đang chiếu" },
    { title: "Sắp chiếu" },
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
      handleDelete,
    );
  });
  console.log("columns:", columns);

  return (
    <>
      <ModalForm />
      <CustomTable data={data} columns={columns}></CustomTable>
    </>
  );
};

export default FilmList;
