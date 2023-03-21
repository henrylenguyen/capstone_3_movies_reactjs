import React, { useCallback, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { message, Modal } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const ImageUpload = ({ name, control, errors }) => {
  const {
    field: { value, onChange },
    fieldState: { invalid },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const [preview, setPreview] = useState(
    value[0] ? URL.createObjectURL(value[0]) : null
  );
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreview = useCallback(() => {
    setPreviewVisible(true);
  }, []);
  useEffect(() => {
    if (value[0]) {
      setPreview(URL.createObjectURL(value[0]));
    }
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (!file) {
        return;
      }

      if (
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/jpg"
      ) {
        message.error("Chỉ có ảnh PNG, JPEG and JPG mới được phép tải lên.");
        return;
      }

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      onChange([newFile]);
      setPreview(newFile.preview);
      message.success("Tải ảnh lên thành công!");
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/png, image/jpeg, image/jpg",
  });

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div
        {...getRootProps()}
        className="border-2 border-gray-300 border-dashed rounded-lg p-5"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Kéo và thả ảnh tại đây, hoặc click để chọn ảnh</p>
        )}
      </div>
      {preview && (
        <div className="flex flex-col mt-5">
          <div className="w-full h-[300px] relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5">
              <Tooltip title="Xóa">
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
                  onClick={() => {
                    onChange([]);
                    setPreview(null);
                  }}
                >
                  <DeleteOutlined />
                </button>
              </Tooltip>
              <Tooltip title="Xem ảnh">
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
                  onClick={handlePreview}
                >
                  <EyeOutlined />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
      {invalid && errors[name] && (
        <p className="text-red-500 text-sm italic">{errors[name].message}</p>
      )}
      <Modal
        open={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="Preview" style={{ width: "100%" }} src={preview} />
      </Modal>
    </div>
  );
};

export default ImageUpload;