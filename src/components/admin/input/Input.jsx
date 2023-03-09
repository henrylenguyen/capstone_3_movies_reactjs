import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, isUpdate,className, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className={`w-full py-3 px-5 border-b text-[18px] ${className} ${
        isUpdate ? "bg-gray-800" : "bg-transparent"
      }`}
      {...field}
      {...props}
    />
  );
};

export default Input;
