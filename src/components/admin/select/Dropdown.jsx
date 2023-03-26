import React from "react";
import Select from "react-select";
import { useController } from "react-hook-form";

const Dropdown = ({ control, name, options, ...props }) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  const selectOptions = options.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  return (
    <Select
      options={selectOptions}
      value={selectOptions.find((option) => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      {...props}
      className={`${
        props.errors ? "border border-red-500" : "border border-gray-300"
      } focus:outline-none focus:border-blue-400  focus:ring-2 focus:ring-blue-400 block w-full rounded-md  mt-2 text-black`}
      
    />
  );
};

export default Dropdown;
