import React, { useEffect, useState } from "react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useController } from "react-hook-form";
import * as yup from "yup";

const ImageUpload = ({ control, register, name, errors, setImageUrl }) => {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { field } = useController({
    control,
    name,
    rules: {
      required: "Ảnh là bắt buộc",
      validate: {
        validateFileType: (value) => {
          const fileType = value && value[0] && value[0].type;
          return (
            fileType === "image/png" ||
            fileType === "image/jpeg" ||
            fileType === "image/jpg"
          );
        },
        validateFileSize: (value) => {
          const fileSize = value && value[0] && value[0].size;
          return fileSize <= 1048576;
        },
      },
    },
    defaultValue: "",
  });
  useEffect(() => {
    register(name, field);
  }, [register, name, field]);

  const handlePreview = (file) => {
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleCancelPreview = () => setPreviewVisible(false);

  const handleChange = ({ file, fileList }) => {
    if (file.status === "error") {
      message.error("Định dạng tệp không hợp lệ!");
      return;
    }
    setFileList(fileList);
    if (fileList.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0].originFileObj);
      reader.onload = () => setImageUrl(reader.result);
    } else {
      setImageUrl("");
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Tải lên</div>
    </div>
  );

  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        beforeUpload={() => false}
        onPreview={handlePreview}
        onChange={handleChange}
        accept=".png,.jpg,.jpeg"
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewVisible}
        title="Xem trước ảnh"
        onCancel={handleCancelPreview}
        footer={null}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
      {errors[name] && (
        <span className="text-red-500 text-sm italic">
          {errors[name].message}
        </span>
      )}
      {field.value && fileList.length === 0 && (
        <span className="text-red-500 text-sm italic">Ảnh là bắt buộc</span>
      )}
      {fileList.length > 0 && (
        <span className="text-green-500 text-sm italic">
          Tải lên thành công {fileList.length} tệp...
        </span>
      )}
    </div>
  );
};
export default ImageUpload;
