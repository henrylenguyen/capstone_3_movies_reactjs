import CustomTable from "components/admin/search/CustomTable";
import React from "react";

const data = [
  {
    key: "1",
    taikhoan: "Thail",
    hoten: "Lê nguyễn phương thái",
    ngaysinh: "1990-01-01",
    email: "abs@gmail.com",
    SDT: "0789130321",
    diachi: "Jav",
    quyen: "Người dùng",
    ngaytao: "20/02/2022",
    ngaychinhsua: "20/02/2022",
  }
];

const columns = [
  { title: "Tài Khoản", dataIndex: "taikhoan", key: "taikhoan" ,width: 150},
  {
    title: "Họ Và Tên",
    dataIndex: "hoten",
    key: "hoten",
    sorter: (a, b) => a.hoten.length - b.hoten.length,
    sortDirections: ["descend", "ascend"],
  },
  { title: "Tuổi", dataIndex: "ngaysinh", key: "ngaysinh" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Số Điện Thoại", dataIndex: "SDT", key: "SDT", width: 200 },
  { title: "Quyền", dataIndex: "quyen", key: "quyen" },
  {
    title: "Ngày Tạo",
    dataIndex: "ngaytao",
    key: "ngaytao",
    sorter: (a, b) => a.ngaytao.length - b.ngaytao.length,
    sortDirections: ["descend", "ascend"],
    width: 150,
  },
  {
    title: "Ngày Chỉnh Sửa",
    dataIndex: "ngaytao",
    key: "ngaytao",
    width: 200,
    sorter: (a, b) => a.ngaytao.length - b.ngaytao.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Ðịa Chỉ",
    dataIndex: "diachi",
    key: "diachi",
    sorter: (a, b) => a.diachi.length - b.diachi.length,
    sortDirections: ["descend", "ascend"],
  },
];
export default function ListUserPage() {
  return <CustomTable columns={columns} data={data}></CustomTable>;
}
