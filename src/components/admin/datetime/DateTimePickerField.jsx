import { useState } from "react";
import { useController } from "react-hook-form";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import viLocale from "date-fns/locale/vi";


const DateTimePickerField = ({ control, name, label, defaultValue }) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue || null);

  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
    defaultValue: selectedDate,
    rules: { required: true },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={viLocale}>
      <DateTimePicker
        inputRef={ref}
        renderInput={(props) => (
          <TextField
            {...props}
            fullWidth
            label={label}
            error={invalid}
            helperText={error?.message}
          />
        )}
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onChange(date);
        }}
        format="dd/MM/yyyy HH:mm"
        cancelLabel="Hủy"
        ampm={false}
        maxDate={new Date().setMonth(new Date().getMonth() + 1)}
      />
    </MuiPickersUtilsProvider>
  );
};
export default DateTimePickerField;