import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller } from "react-hook-form";
import { Checkbox, FormGroup, FormHelperText } from "@mui/material";

function CheckboxField(props) {
  const { label, name, form } = props;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={value} name={name} />}
            label={label}
            onChange={onChange}
          />
          <FormHelperText error={invalid}>
            {formState.errors[name]?.message}
          </FormHelperText>
        </FormGroup>
      )}
    />
  );
}

export default CheckboxField;
