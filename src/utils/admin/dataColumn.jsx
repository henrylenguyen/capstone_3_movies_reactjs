import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Avatar, Button, Image, Tooltip } from "antd";
import Active from "components/admin/span/Active";
import InActive from "components/admin/span/InActive";
import Pending from "components/admin/span/Pending";
const getColumnConfig = (
  title,
  dataIndexKeyItem,
  newTitle,
  handleEdit,
  handleDelete,
) => {
  const columnConfig = {
    title: title.title,
    dataIndex: dataIndexKeyItem.dataIndex,
    key: dataIndexKeyItem.key,
    width: 250,
    align: "center",
  };

  if (newTitle === "hinhanh") {
    columnConfig.render = (text) => <Image src={text} width="100px"></Image>;
  } else if (newTitle === "danhgia") {
    columnConfig.width = 150;
    columnConfig.sorter = (a, b) => a.danhGia - b.danhGia;
    columnConfig.align = "center";
  } else if (newTitle === "hot" || newTitle === "sapchieu") {
    columnConfig.width = 150;
    columnConfig.render = (text) => (text ? <Active /> : <InActive />);
  } else if (newTitle === "dangchieu") {
    columnConfig.width = 150;
    columnConfig.align = "center";
    columnConfig.render = (text) => (text ? <Pending /> : <InActive />);
  } else if (newTitle === "tuychinh") {
    columnConfig.width = 250;
    columnConfig.align = "center";
    columnConfig.render = (text, record) => (
      <span>
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record)}
        >
          Delete
        </Button>
      </span>
    );
  } else if (newTitle === "trailer") {
    columnConfig.width = 150;
    columnConfig.render = (text, record) => (
      <iframe
        width="360"
        height="200"
        src={record.trailer}
        title={record.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  } else if (newTitle === "maphim") {
    columnConfig.width = 150;
    columnConfig.sorter = (a, b) => a.maPhim - b.maPhim;
    columnConfig.align = "center";
  } else if (newTitle === "avatar") {
    columnConfig.width = 150;
    columnConfig.render = (text) => <Avatar src={text} size="large"></Avatar>;
  }

  return columnConfig;
};
export default getColumnConfig;
