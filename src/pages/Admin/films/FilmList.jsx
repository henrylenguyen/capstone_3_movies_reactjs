
import ModalForm from "components/admin/modal/Modal";
import ModalComponent from "components/admin/modal/Modal";
import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import useLocalStorage from "hooks/useLocalStorage";
import React, { useState } from "react";
import getColumnConfig from "utils/admin/dataColumn";


const handleDelete = (item)=>{
  console.log(item)
}
const FilmList = ({ phim }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEdit = (item) => {
   setIsOpen(true);
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
      <ModalForm></ModalForm>
      {/* <CustomTable data={data} columns={columns}></CustomTable> */}
    </>
  );
  
};

export default FilmList;
