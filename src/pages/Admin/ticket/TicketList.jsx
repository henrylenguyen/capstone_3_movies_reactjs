import { Avatar, Image } from "antd";
import CustomTable from "components/admin/table/CustomTable";

import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useEffect } from "react";

const TicketList = ({phim}) => {
 console.log("props:", phim);
 const data = [
  {
    maLichChieu: 44239,
    tenCumRap: "CGV - Aeon Tân Phú",
    tenRap: "Rạp 5",
    diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
    tenPhim: "Lat mat 48h1234",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg",
    ngayChieu: "01/09/2021",
    gioChieu: "07:09",
  },
  {
    maLichChieu: 44239,
    tenCumRap: "CGV - Aeon Tân Phú",
    tenRap: "Rạp 5",
    diaChi: "30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú",
    tenPhim: "Lat mat 48h1234",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg",
    ngayChieu: "01/09/2021",
    gioChieu: "07:09",
  },
];
  const keys = data && Object.keys(data[0]);

  const dataIndexKey = keys?.map((item) => {
    return {
      dataIndex: item,
      key: item,
    };
  });
  console.log("dataIndexKey:", dataIndexKey);
  // 3. Tạo ra mảng title chứa các đối tượng title khác nhau, do mình nhập
  const dataTitle = [
    { title: "Mã lịch chiếu" },
    { title: "Tên phim" },
    {
      title: "Hình ảnh",
    },
    { title: "Tên cụm rạp" },
    { title: "Tên rạp" },
    { title: "Địa chỉ" },
    { title: "Ngày chiếu" },
    { title: "Giờ chiếu" },
  ];
  console.log("dataTitle:", dataTitle);

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

export default TicketList;
