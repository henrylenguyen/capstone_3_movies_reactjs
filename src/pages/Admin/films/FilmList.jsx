import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useEffect, useState } from "react";
import getColumnConfig from "utils/admin/dataColumn";
import useModalForm from "HOCS/useModalForm";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { FetchLayThongTinPhim } from "thunks/admin/movieThunks";
import { XoaPhimAction } from "thunks/admin/movieThunks";
import useLocalStorage from "hooks/useLocalStorage";
import { fetchLayDanhSachPhim } from "thunks/admin/movieThunks";
import { fetchLayThongTinDanhSachUser } from "thunks/admin/userThunks";
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

const handleSubmitForm = (data) => {
  console.log(data);
};
const FilmList = ({ phim }) => {
  const { ThongTinPhim } = useSelector((state) => state.userAdmin);
  const [movieData, setMovieData] = useState(null);
  const dispatch = useDispatch();
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
const handleUpdate = ()=>{
   setMovieData(ThongTinPhim);
    setTimeout(() => {
      openModal();
    }, 1000);
 }
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
