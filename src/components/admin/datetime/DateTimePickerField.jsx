import React, { useState } from "react";
import { useController } from "react-hook-form";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { vi } from "date-fns/locale";
const DatePickerField = ({ value, onChange, onBlur, errors, name }) => {
  return (
    <DatePicker
      className="w-full"
      value={value}
      minDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
      onChange={onChange}
      onBlur={onBlur}
      format="dd/MM/yyyy"
      renderInput={(params) => (
        <input
          {...params}
          readOnly
          
        />
      )}
    />
  );
};
const TimePickerField = ({ value, onChange, onBlur, errors, name }) => {
  const [open, setOpen] = useState(false);

  const handleTimeChange = (newTime) => {
    onChange(newTime);
  };

  const handleTimeBlur = () => {
    setOpen(false);
    onBlur();
  };

  return (
    <div>
      <input
        type="text"
        placeholder={new Date().toLocaleTimeString("en-US", { hour12: true })}
        value={value ? value.toLocaleTimeString() : ""}
        onClick={() => setOpen(true)}
        readOnly
        className={`${
          errors && errors[name] ? "border-red-500" : "border-gray-300"
        } border focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 block w-full rounded-md py-2 px-3 mt-2 text-black`}
      />

      {open && (
        <StaticTimePicker
          value={value}
          onChange={handleTimeChange}
          onBlur={handleTimeBlur}
          minutesStep={15}
          onClose={() => setOpen(false)}
        />
      )}

      {errors && errors[name] && (
        <span className="text-red-500 text-sm italic">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

const DateTimePickerField = ({ control, name, errors, type }) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: null,
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
      <div className="w-full">
        {type === "date" ? (
          <DatePickerField
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            errors={errors}
            name={name}
          />
        ) : (
          <TimePickerField
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            errors={errors}
            name={name}
          />
        )}
      </div>
    </LocalizationProvider>
  );
};

export default DateTimePickerField;
