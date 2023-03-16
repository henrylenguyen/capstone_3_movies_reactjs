import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import ModalForm from "components/admin/modal/Modal";
import ModalComponent from "components/admin/modal/Modal";
import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useState } from "react";
import getColumnConfig from "utils/admin/dataColumn";
import useModalForm from "hooks/useModalForm";

const schema = yup.object().shape({
  tenPhim: yup.string().required(),
  moTa: yup.string().min("Mô tả ít nhất 10 ký tự").required("Mô tả là bắt buộc"),
});

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
    name: "TrangThai",
    label: "Trạng thái",
    type: "radio",
    options: [
      { label: "Đang chiếu", value: "dangChieu", id: 1 },
      { label: "Sắp chiếu", value: "sapChieu", id: 2 },
    ],
  },
  {
    label: "",
    name: "hot",
    type: "checkbox",
    options: [{ label: "Đang hot", value: "hot", id: 1 }],
  },
];

const handleDelete = (item) => {
  console.log(item);
};
 const handleSubmitForm = (data) => {
   console.log(data);
 };
const FilmList = ({ phim }) => {
  console.log("phim:", phim);
  const { ModalForm, openModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Chỉnh sửa Phim"
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
      handleDelete
    );
  });
  
  return (
    <>
      <ModalForm />
      <CustomTable data={data} columns={columns}></CustomTable>
    </>
  );
};

export default FilmList;
