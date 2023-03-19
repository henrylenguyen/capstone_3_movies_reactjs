import React from "react";
import Select from "react-select";
import { useController } from "react-hook-form";

const Dropdown = ({ control, name, options }) => {
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
    />
  );
};

export default Dropdown;
