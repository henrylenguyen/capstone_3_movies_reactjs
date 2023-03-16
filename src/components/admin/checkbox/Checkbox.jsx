import { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useController } from "react-hook-form";

const CheckboxGroup = ({ options, control, name, ...props }) => {
  const { field } = useController({
    control,
    name,
  });

  const [isChecked, setIsChecked] = useState(() => {
    return options.reduce((acc, option, index) => {
      if (option.value) {
        acc.push(index);
      }
      return acc;
    }, []);
  });

  const handleCheckboxChange = (index) => {
    setIsChecked((prev) => {
      const checked = prev.includes(index);
      if (checked) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="-mt-5">
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Switch
              checked={isChecked.includes(index)}
              onChange={() => {
                handleCheckboxChange(index);
                field.onChange(isChecked.includes(index) ? false : true);
              }}
              color="secondary"
              name={name}
              value={option.value}
            />
          }
          label={option.label}
          {...props}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
