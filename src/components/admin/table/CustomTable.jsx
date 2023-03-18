import { Select, Button, Input, Space, Table, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
const { Option } = Select;

const CustomTable = ({ columns, data, ...props }) => {

  const [searchText, setSearchText] = useState("");
   const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  useEffect(() => {
    if (filteredData.length > 0) {
      setLoading(false);
    }
  }, [filteredData]);
  
  // --------------------------- TÌM KIẾM------------------------
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setLoading(true);
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);  
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  // --------------------------- NÚT RESET-----------------------
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  // --------------------------- DROPDOWN Ô TÌM KIẾM--------------------------
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  return (
    <div className="usertable bg-adminPrimary p-5 flex-grow rounded-lg select-none overflow-auto">
      <Spin spinning={loading} size="large">
        <Table
          // key={}
          dataSource={filteredData}
          scroll={{ x: "max-content", y: 500 }}
          align="center"
          columns={columns.map((col) => {
            if (
              col.key.toLowerCase() === "hinhanh" ||
              col.key.toLowerCase() === "avatar" ||
              col.key.toLowerCase() === "hot" ||
              col.key.toLowerCase() === "dangchieu" ||
              col.key.toLowerCase() === "sapchieu" ||
              col.key.toLowerCase() === "mota" ||
              col.key.toLowerCase() === "bidanh" ||
              col.key.toLowerCase() === "tuychinh" ||
              col.key.toLowerCase() === "maloainguoidung"||
              col.key.toLowerCase() === "trailer"
            ) {
              return {
                ...col,
              };
            }
            return {
              ...col,
              ...getColumnSearchProps(col.dataIndex),
            };
          })}
        />
      </Spin>
    </div>
  );
};
export default CustomTable;
