import { useState } from "react";

import { Switch, FormControlLabel } from "@mui/material";
const Radio = ({ options, label, name }) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <div className="select-none radio">
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Switch
              checked={isChecked === index}
              onChange={() => setIsChecked(index)}
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
export default Radio;
