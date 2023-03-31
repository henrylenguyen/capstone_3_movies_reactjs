import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useEffect, useState } from "react";
import getColumnConfig from "utils/admin/dataColumn";
import useModalForm from "HOCS/useModalForm";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { FetchLayThongTinPhim } from "thunks/admin/movieThunks";
import { XoaPhimAction } from "thunks/admin/movieThunks";

import { fetchLayDanhSachPhim } from "thunks/admin/movieThunks";
import { CapNhatPhimUploadHinh } from "thunks/admin/movieThunks";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { option } from "constants/admin/optionsGroup";

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
    hinhAnh: yup.array().min(1, "Hình ảnh không được bỏ trống"),
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
    label: "Ngày khởi chiếu",
    name: "ngayKhoiChieu",
    type: "datetime",
  },
  {
    label: "Đánh giá",
    name: "danhGia",
    type: "select",
    options: [
      { label: "0", value: 0, id: 1 },
      { label: "1", value: 1, id: 2 },
      { label: "2", value: 2, id: 3 },
      { label: "3", value: 3, id: 4 },
      { label: "4", value: 4, id: 5 },
      { label: "5", value: 5, id: 6 },
      { label: "6", value: 6, id: 7 },
      { label: "7", value: 7, id: 8 },
      { label: "8", value: 8, id: 9 },
      { label: "9", value: 9, id: 10 },
      { label: "10", value: 10, id: 11 },
    ],
  },
  {
    label: "Mã nhóm",
    name: "maNhom",
    type: "select",
    options: option,
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

const FilmList = ({ phim }) => {
  const { ThongTinPhim } = useSelector((state) => state.movieAdmin);
  console.log("ThongTinPhim:", ThongTinPhim);
  const [movieData, setMovieData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = (data) => {
    console.log("data:", data);
    if(data.dangChieu===true){
      data.sapChieu = false;
    }
    else{
      data.sapChieu = true;

    }
    let formData = new FormData();
    
    for (let key in data) {
      console.log("key:", key);
      if (key === "ngayKhoiChieu") {
        formData.append(key, moment(data[key]).format("DD/MM/YYYY HH:mm:ss"));
      } else if (key === "hinhAnh") {
        formData.append("File", data.hinhAnh[0], data.hinhAnh[0].name);
      } else {
        formData.append(key, data[key]);
      }
    }
    // Gửi dữ liệu về backend
    dispatch(CapNhatPhimUploadHinh(formData, navigate));
  };
  const { ModalForm, openModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Chỉnh sửa Phim",
    initialValues: movieData,
  });

  const handleDelete = (id) => {
    const Nhom = localStorage.getItem("Nhom").replace(/"/g, "");
    dispatch(XoaPhimAction(id.maPhim)).then(() => {
      dispatch(fetchLayDanhSachPhim(Nhom));
    });
  };
  const handleEdit = (id) => {
    dispatch(FetchLayThongTinPhim(id.maPhim));
  };
  const handleUpdate = () => {
    setMovieData(ThongTinPhim);
    setTimeout(() => {
      openModal();
    }, 1000);
  };
  const arr = [];

  phim?.map((item) => {
    const { maNhom, ...rest } = item;
    arr.push({ ...rest, tuyChinh: "hành động" });
  });
  const data = arr;
  if (!data || data.length === 0) {
    return null;
  }
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
    { title: "Ngày khởi chiếu" },
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
      handleUpdate
    );
  });

  return (
    <>
      <ModalForm />
      <CustomTable data={data} columns={columns} Key={"maPhim"}></CustomTable>
    </>
  );
};

export default FilmList;
