import Form from "components/admin/form/Form";
import React, { useState } from "react";
import * as yup from "yup";
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
    // hinhAnh:yup.,
  })
  .required();
  let gr=[];
  
  for(let i = 0;i<10;i++){
    gr.push({ label: `GP0${i}`, value: `GP${i}`, id: i });
  }

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
  { label: "Ngày khởi chiếu", name: "ngayKhoiChieu", type: "datetime" },
  {
    name: "maNhom",
    label: "Mã nhóm",
    type: "select",
    options: [
      { label: "GP00", value: "GP00", id: 1 },
      { label: "Sắp chiếu", value: false, id: 2 },
    ],
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
const handleSubmitForm = (data) => {
  let formData = new FormData();
  console.log(data);
  for (let key in data) {
    console.log("key:", key);
    if (key !== "hinhAnh") {
      formData.append(key, data[key]);
    } else {
      formData.append(key, data.hinhAnh[0], data.hinhAnh[0].name);
    }
  }
  console.log(formData.get("hinhAnh"));
};
const AddNewFilm = () => {
  return (
    <div className="p-10 bg-adminPrimary w-full">
      <Form
        schema={schema}
        fields={fields}
        // closeModal={closeModal}
        handleSubmitForm={handleSubmitForm}
        // title={title}
        color="text-white"
      />
    </div>
  );
};

export default AddNewFilm;