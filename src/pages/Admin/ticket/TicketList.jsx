import { Avatar, Image } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Active from "components/admin/span/Active";
import CustomTable from "components/admin/table/CustomTable";
import removeVietnameseTones from "config/admin/convertVietnamese";
import React, { useEffect, useState } from "react";
import InActive from "components/admin/span/InActive";
import Pending from "components/admin/span/Pending";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const TicketList = ({ phim }) => {
  const arr = [];
  const ListPhim = [];
  const [index, setIndex] = useState("");
  
  const [search, setSearch] = useSearchParams();
  const chitietve = search.get("chitietvedadat");
  
  const dispatch = useDispatch();

  // Do phim là vòng lặp nên chỉ sử dụng mảng để push vào
  phim?.map((item) => {
    const { lstLichChieuTheoPhim, ...rest } = item;
    arr.push({ ...rest, tuychinh: "Xem chi tiết" });
    ListPhim.push(lstLichChieuTheoPhim);
  });
  let dataLichChieu;
  ListPhim?.map((item, vitri) => {
    if (vitri === index) {
      dataLichChieu = item;
    }
  });
  console.log("dataLichChieu:", dataLichChieu);

  const data = arr;
  const keys = data && Object.keys(data[0]);
  // -------------------------------Lấy key của data-------------------------------------
  const dataIndexKey = keys?.map((item) => {
    return {
      dataIndex: item,
      key: item,
    };
  });
  // ------------------------------Title của cột trong table----------------------------
  const dataTitle = [
    { title: "Mã phim" },
    { title: "Tên phim" },
    {
      title: "Hình ảnh",
    },
    { title: "Hot" },
    { title: "Đang chiếu" },
    { title: "Sắp chiếu" },
    { title: "Tùy chỉnh" },
  ];
  //----------------------- Xử lý sự kiện click tại ô cột "Tuỳ chỉnh"-----------------
  const handleCellClick = (record, rowIndex) => {
    setIndex(rowIndex);
    const rap = search.get("rap");
    setSearch({ rap, chitietvedadat: record.maPhim });
    
  };
  // ---------------------- Dữ liệu trong table--------------------------------------
  const columns = dataTitle.map((title) => {
    const removeTone = removeVietnameseTones(title.title);
    const newTitle = removeTone.replace(/\s+/g, "").toLowerCase();

    const dataIndexKeyItem = dataIndexKey.find(
      (item) => item.key.toLowerCase() === newTitle
    );
    if (newTitle === "hot" || newTitle === "sapchieu") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        width: 150,
        render: (text) => (text ? <Active /> : <InActive />),
      };
    }
    if (newTitle === "dangchieu") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        width: 150,
        align: "center",

        render: (text) => (text ? <Pending /> : <InActive />),
      };
    }
    if (newTitle === "hinhanh") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        align: "center",

        render: (text) => <Image src={text} width="100px"></Image>,
      };
    }
    if (newTitle === "tuychinh") {
      return {
        title: title.title,
        dataIndex: dataIndexKeyItem.dataIndex,
        key: dataIndexKeyItem.key,
        align: "center",
        onCell: (record, rowIndex) => ({
          onClick: () => handleCellClick(record, rowIndex),
        }),
      };
    }
    return {
      title: title.title,
      dataIndex: dataIndexKeyItem.dataIndex,
      key: dataIndexKeyItem.key,
      width: 250,
      align: "center",
    };
  });
  return <CustomTable columns={columns} data={data}></CustomTable>;
};

export default TicketList;
