import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker, TimePicker } from "@mui/x-data-pickers";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { vi } from "date-fns/locale";
const DateTimePicker = ({ control, name, errors }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <div>
            <DatePicker
              label="Ngày"
              value={value}
              minDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
              onChange={onChange}
              onBlur={onBlur}
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <input
                  {...params}
                  className={`${
                    errors ? "border-red-500" : "border-gray-300"
                  } border focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 block w-full rounded-md py-2 px-3 mt-2 text-black`}
                />
              )}
            />
            {errors && (
              <span className="text-red-500 text-sm italic">
                {errors.message}
              </span>
            )}
            <TimePicker
              label="Thời gian"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              renderInput={(params) => (
                <input
                  {...params}
                  className={`${
                    errors ? "border-red-500" : "border-gray-300"
                  } border focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 block w-full rounded-md py-2 px-3 mt-2 text-black`}
                />
              )}
            />
          </div>
        )}
        rules={{ required: true }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
