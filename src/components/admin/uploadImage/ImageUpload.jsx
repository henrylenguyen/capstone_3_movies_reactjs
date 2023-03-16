import React from "react";
import { useController } from "react-hook-form";
import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";

const ImageUpload = ({ name, control, errors, crop = true, aspect = 1 }) => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    onChange(selectedFile);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Only image files are allowed!");
    }
    return isImage;
  };

  return (
    <div className="flex flex-col">
      <label className="block font-medium text-gray-700" htmlFor={name}>
        Upload Image
      </label>
      {crop ? (
        <ImgCrop aspect={aspect}>
          <Upload
            name={name}
            id={name}
            listType="picture-card"
            showUploadList={false}
            onChange={(info) => {
              if (info.file.status === "done") {
                onChange(info.file.originFileObj);
              }
            }}
            beforeUpload={beforeUpload}
            className={`${
              errors[name] ? "border border-red-500" : "border border-gray-300"
            } focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 block w-full rounded-md py-2 px-3 mt-2 text-black`}
          >
            {value ? (
              <img
                src={URL.createObjectURL(value)}
                alt="avatar"
                style={{ width: "100%" }}
              />
            ) : (
              <div>
                <div>+</div>
                <div>Upload</div>
              </div>
            )}
          </Upload>
        </ImgCrop>
      ) : (
        <input
          type="file"
          id={name}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          ref={ref}
          className={`${
            errors[name] ? "border border-red-500" : "border border-gray-300"
          } focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 block w-full rounded-md py-2 px-3 mt-2 text-black`}
        />
      )}
      {errors[name] && (
        <span className="text-red-500 text-sm italic">
          {errors[name].message}
        </span>
      )}
      {value && !value.type.match("image") && (
        <span className="text-red-500 text-sm italic">
          Invalid file format. Only images are allowed.
        </span>
      )}
    </div>
  );
};

export default ImageUpload;
