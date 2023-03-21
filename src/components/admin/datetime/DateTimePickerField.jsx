import { useState } from "react";
import { useFormContext, useController } from "react-hook-form";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import * as yup from "yup";

const DateTimePicker = ({ name, label, defaultValue, ...rest }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, defaultValue });

  const [selectedDate, setSelectedDate] = useState(defaultValue ?? null);

  const handleChangeDate = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  const validate = async (value) => {
    const schema = yup.object().shape({
      [name]: yup.date().required("Bạn cần chọn ngày giờ"),
    });

    try {
      await schema.validate({ [name]: value });
      return true;
    } catch (err) {
      return err.errors[0];
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label={label}
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
        value={selectedDate}
        onChange={handleChangeDate}
        inputFormat="dd/MM/yyyy"
        maxDate={new Date().setMonth(new Date().getMonth() + 1)}
        {...rest}
      />
      <TimePicker
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            label="Thời gian"
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
        value={selectedDate}
        onChange={handleChangeDate}
        inputFormat="HH:mm"
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
