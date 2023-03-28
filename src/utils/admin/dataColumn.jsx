import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, Popconfirm, Tooltip } from "antd";
import MyButton from "components/admin/button/MyButton";
import Active from "components/admin/span/Active";
import InActive from "components/admin/span/InActive";
import Pending from "components/admin/span/Pending";
import DOMPurify from "dompurify";
const getColumnConfig = (
  title,
  dataIndexKeyItem,
  newTitle,
  handleEdit,
  handleDelete,
  handleUpdate,
) => {
  const columnConfig = {
    title: title.title,
    dataIndex: dataIndexKeyItem.dataIndex,
    key: dataIndexKeyItem.key,
    width: 250,
    align: "center",
  };

  if (newTitle === "hinhanh") {
    columnConfig.render = (text, record) => (
      <Image
        src={text}
        width="100px"
        alt={record}
       
      ></Image>
    );
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
      <div className="flex justify-center items-center gap-5">
        <Popconfirm
          title="Bạn có chắc sẽ chinh sửa thông tin này không?"
          onConfirm={() => handleUpdate(record)}
          okText="Có"
          cancelText="Không"
        >
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
        </Popconfirm>
        <MyButton
          title="Xác nhận xóa"
          text="Bạn sẽ không thể hoàn tác khi đã xóa"
          icon="warning"
          confirmButtonText="Yes"
          cancelButtonText="No"
          children1={() => {
            handleDelete(record);
          }}
          children2={() => {}}
          className="text-red-500 hover:text-red-400 flex gap-1 items-center"
        >
          <DeleteOutlined />
          Delete
        </MyButton>
      </div>
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
  else if (newTitle === "mota") {

    columnConfig.render = (text) => {
      const sanitizedText = DOMPurify.sanitize(text);
      const plainText = new DOMParser().parseFromString(
        sanitizedText,
        "text/html"
      ).documentElement.textContent;
      return plainText;
    }
  }

  return columnConfig;
};
export default getColumnConfig;
