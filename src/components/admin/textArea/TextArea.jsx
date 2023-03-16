import React from "react";
import { useController } from "react-hook-form";

const TextArea = ({ control,...props }) => {
    const { field } = useController({
      control,
      name: props.name,
      defaultValue: "",
    });
  return (
    <textarea
      {...field}
      {...props}
      className={`${
        props.errors ? "border border-red-500" : "border border-gray-300"
      } focus:outline-none focus:border-blue-400  focus:ring-2 focus:ring-blue-400 block w-full rounded-md  py-2 px-3 mt-2 text-black`}
    />
  );
};

export default TextArea;
