import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useController } from "react-hook-form";

const CKTextArea = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.defaultValue ||"",
  });

  return (
    <CKEditor
  
      editor={ClassicEditor}
      data={field.value}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            "height",
            "350px",
            editor.editing.view.document.getRoot()
          );
        });
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        field.onChange(data);
      }}
      {...props}
    />
  );
};

export default CKTextArea;
