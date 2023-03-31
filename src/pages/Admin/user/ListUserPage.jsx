import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import useModalForm from "HOCS/useModalForm";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLayThongTinDanhSachUser } from "thunks/admin/userThunks";
import { fetchLayThongTinNguoiDung } from "thunks/admin/userThunks";
import { fetchChinhSuaNguoiDung } from "thunks/admin/userThunks";
import { XoaNguoiDungAction } from "thunks/admin/userThunks";
import getColumnConfig from "utils/admin/dataColumn";

import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    taiKhoan: yup.string().required("Tài khoản là bắt buộc"),
    matKhau: yup.string().required("Mật khẩu là bắt buộc"),
    hoTen: yup
      .string()
      .required("Họ tên là bắt buộc")
      .matches(
        /^[a-zA-ZêÊĐĂăâÂẠẤấẮắẦầẨẩẬậạẹẸơƠờỜởỞợÍíỊịÚụúÙùủỦỤƯưỨứỪừỬửỰựỢặẶẰằẲẳÊêỂểỀềỆệễỄẾếđàáäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        { message: "Họ và tên không được chứa số và ký tự đặc biệt" }
      ),
    email: yup
      .string()
      .required("Email là bắt buộc")
      .email("Email phải có định dạng example@abc.com"),
    soDT: yup
      .string()
      .required("Số điện thoại là bắt buộc")
      .matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, {
        message: "Số điện thoại không đúng định dạng",
      }),
    maLoaiNguoiDung: yup.string().required("Mã loại người dùng là bắt buộc"),
    maNhom: yup.string().required("Mã nhóm là bắt buộc"),
  })
  .required();
let option = [];

for (let i = 0; i < 10; i++) {
  option.push({ label: `GP0${i}`, value: `GP0${i}`, id: i });
}
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
  {
    label: "Mã nhóm",
    name: "maNhom",
    type: "select",
    options: option,
  },
];

export default function ListUserPage({ user }) {
  const { ThongTinNguoiDung } = useSelector((state) => state.userAdmin);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  //------------------------- NÚT CHỈNH SỬA-------------------
  const handleSubmitForm = async (data) => {
    const Nhom = localStorage.getItem("Nhom").replace(/"/g, "");
    await dispatch(fetchChinhSuaNguoiDung(data)).then(() => {
      dispatch(fetchLayThongTinDanhSachUser(Nhom));
      closeModal();
    });
  };
  const { ModalForm, openModal, closeModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Chỉnh sửa Người dùng",
    initialValues: userData,
  });
  const handleEdit = (id) => {
    dispatch(fetchLayThongTinNguoiDung(id.taiKhoan));
  };

  const handleUpdate = () => {
    setUserData(ThongTinNguoiDung);
    setTimeout(() => {
      openModal();
    }, 2000);
  };
  const handleDelete = (id) => {
    const Nhom = localStorage.getItem("Nhom").replace(/"/g, "");
    dispatch(XoaNguoiDungAction(id.taiKhoan)).then(() => {
      dispatch(fetchLayThongTinDanhSachUser(Nhom));
    });
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
      handleDelete,
      handleUpdate
    );
  });

  return (
    <>
      <ModalForm></ModalForm>
      <CustomTable columns={columns} data={data} Key={"hoTen"}></CustomTable>
    </>
  );
}
