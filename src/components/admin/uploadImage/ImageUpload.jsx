import React, { useState } from "react";
import Dropzone from "react-dropzone";
import AvatarEditor from "react-avatar-editor";
import axios from "axios";
import { useForm, useController } from "react-hook-form";
import * as yup from "yup";
import { Button, notification } from "antd";

const schema = yup.object().shape({
  avatar: yup
    .mixed()
    .test("fileType", "File must be of type jpg or png", (value) =>
      value ? ["image/jpeg", "image/png"].includes(value.type) : true
    )
    .required("Avatar is required"),
});

const UploadAvatar = () => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { control, handleSubmit, formState } = useForm({
    resolver: yup.resolver(schema),
  });

  const { field, fieldState } = useController({
    name: "avatar",
    control,
  });

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length) {
      setImage(acceptedFiles[0]);
    }
  };

  const handleSave = async () => {
    try {
      setUploading(true);
      const canvas = editor.getImageScaledToCanvas().toDataURL();
      const response = await axios.post("http://localhost:3000/image", {
        path: image.name.split(".").pop(),
      });
      const formData = new FormData();
      formData.append("image", canvas);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      await axios.put(
        `http://localhost:3000/image/${response.data.id}/image.${response.data.path}`,
        formData,
        config
      );
      setImage(null);
      setUploading(false);
      notification.success({
        message: "Upload Successful",
        description: "Your image has been uploaded successfully.",
      });
    } catch (error) {
      console.log(error);
      setUploading(false);
      notification.error({
        message: "Upload Failed",
        description:
          "Your image could not be uploaded. Please try again later.",
      });
    }
  };

  const handleCancel = () => {
    setImage(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSave)}>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {image ? (
                <AvatarEditor
                  ref={(ref) => setEditor(ref)}
                  image={image}
                  width={250}
                  height={250}
                  border={50}
                  color={[255, 255, 255, 0.6]}
                  borderRadius={125}
                  scale={1}
                />
              ) : (
                <div>Drag and drop an image, or click to select file</div>
              )}
            </div>
          )}
        </Dropzone>
        {image && (
          <div>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={formState.isSubmitting}>
              {uploading ? "Uploading..." : "Save"}
            </Button>
          </div>
        )}
        {fieldState.error && <div>{fieldState.error.message}</div>}
      </form>
    </div>
  );
};

export default UploadAvatar;
