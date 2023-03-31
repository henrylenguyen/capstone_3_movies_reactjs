import { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useController } from "react-hook-form";

const Radio = ({ control, options, defaultValue, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue,
  });

  const [isChecked, setIsChecked] = useState();

  useEffect(() => {
    const selectedIndex = options.findIndex(
      (option) => option.value === field.value
    );
    setIsChecked(selectedIndex);
  }, [field.value, options]);

  const handleSwitchChange = (index) => {
    setIsChecked(index);
    const selectedValue = options[index].value;
    field.onChange(selectedValue);
  };

  return (
    <>
      {options &&
        options.map((option, index) => (
          <FormControlLabel
            key={index}
            {...props}
            control={
              <Switch
                checked={isChecked === index}
                onChange={() => handleSwitchChange(index)}
                color="secondary"
              />
            }
            label={option.label}
          />
        ))}
    </>
  );
};

export default Radio;
