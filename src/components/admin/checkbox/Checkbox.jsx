import { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
const CheckboxGroup = ({ options, label, name }) => {
  const [isChecked, setIsChecked] = useState([]);

  const handleCheckboxChange = (id) => {
    setIsChecked((prev) => {
      const checked = isChecked.includes(id);
      if (checked) {
        return isChecked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="checkbox select-none">
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Switch
              checked={isChecked.includes(index)}
              onChange={() => handleCheckboxChange(index)}
              name={name}
              color="secondary"
            />
          }
          label={option.label}
        />
      ))}
    </div>
  );
};
export default CheckboxGroup;
