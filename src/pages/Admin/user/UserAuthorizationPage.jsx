import CustomTable from 'components/admin/search/CustomTable';
import React from 'react';

const columns = [
  { title: "Tên", dataIndex: "name", key: "name" },
  { title: "Tuổi", dataIndex: "age", key: "age" },
  {
    title: "Ðịa chỉ",
    dataIndex: "address",
    key: "address",
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];
const data = [
  { key: "1", name: "Nguyễn Văn A", age: "20", address: "Hà Nội" },
  { key: "2", name: "Trần Thị B", age: "25", address: "Hải Phòng" },
  { key: "3", name: "Lê Văn C", age: "30", address: "Ðà Nẵng" },
  { key: "4", name: "Lê Văn C", age: "30", address: "Hà Giang" },
];
const UserAuthorizationPage = () => {
  return <CustomTable columns={columns} data={data}></CustomTable>;
};

export default UserAuthorizationPage;