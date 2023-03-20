import React, { useCallback, useEffect, useState, useRef } from "react";
import { useController } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { message, Modal, Button } from "antd";
import AvatarEditor from "react-avatar-editor";

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
  const [editorVisible, setEditorVisible] = useState(false);
  const [editorImage, setEditorImage] = useState(null);
  const [editorScale, setEditorScale] = useState(1);
  const editorRef = useRef();

  const handlePreview = useCallback(() => {
    setPreviewVisible(true);
  }, []);

  const handleEdit = useCallback(() => {
    setEditorImage(preview);
    setEditorVisible(true);
  }, [preview]);

  const handleEditorCancel = useCallback(() => {
    setEditorVisible(false);
  }, []);

  const handleEditorSave = useCallback(() => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      const blob = canvas.toDataURL();
      const file = dataURLtoFile(blob, "image.png");
      onChange([file]);
      setPreview(URL.createObjectURL(file));
      setEditorVisible(false);
    }
  }, [onChange]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) {
      return;
    }

    if (
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg"
    ) {
      message.error("Only PNG, JPEG and JPG image files are allowed.");
      return;
    }

    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    onChange([newFile]);
    setPreview(newFile.preview);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/png, image/jpeg, image/jpg",
  });

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
    <div className="flex flex-col">
      <div
        {...getRootProps()}
        className="border-2 border-gray-300 border-dashed rounded-lg p-5"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop a file here, or click to select a file</p>
        )}
      </div>
      {preview && (
        <div className="flex flex-col mt-5">
          <img
            src={preview}
            alt="Preview"
            className="w-[100px] h-auto"
            onClick={handlePreview}
          />
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => {
              onChange([]);
              setPreview(null);
            }}
          >
            Remove
          </button>
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