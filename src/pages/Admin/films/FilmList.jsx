import { Avatar, Image } from "antd";
import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useEffect, useState } from "react";

const FilmList = ({ phim }) => {
  const arr = [];
  phim?.map(item=>{
    const { lstLichChieuTheoPhim, ...rest } = item;
    arr.push(rest);
  })
  const data = arr;
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
    {
      title: "Hình ảnh",
    },
    { title: "Hot" },
    { title: "Đang chiếu" },
    { title: "Sắp chiếu" },
  ];

  const columns = dataTitle.map((title) => {
    const removeTone = removeVietnameseTones(title.title);
    const newTitle = removeTone.replace(/\s+/g, "").toLowerCase();

    const dataIndexKeyItem = dataIndexKey.find(
      (item) => item.key.toLowerCase() === newTitle
      );
    if (newTitle === "hinhanh") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        render: (text) => <Image src={text} width="100px"></Image>,
      };
    }
    if (newTitle === "avatar") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        render: (text) => <Avatar src={text} size="large"></Avatar>,
      };
    }
    return {
      title: title.title,
      dataIndex: dataIndexKeyItem.dataIndex,
      key: dataIndexKeyItem.key,
      width: 250,
    };
  });

  return <CustomTable columns={columns} data={data}></CustomTable>;
};

export default FilmList;
