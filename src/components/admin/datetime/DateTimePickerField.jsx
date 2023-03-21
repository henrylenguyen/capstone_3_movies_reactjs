import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import { Controller } from "react-hook-form";
import DatePicker from "react-persian-datepicker";

const DateTimePickerField = ({ control, ...props }) => {
  return (
    <div className="flex flex-col gap-3">
      <Controller
        control={control}
        {...props}
        defaultValue={null}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <DatePicker
              defaultValue={moment().add(1, "months")}
              value={value ? moment(value) : null}
              onChange={(date) => onChange(date ? moment(date).toDate() : null)}
              allowClear
            />
            <TimePicker
              value={value ? moment(value) : null}
              onChange={(time) =>
                onChange(
                  time
                    ? moment(
                        `${moment(value).format("DD/MM/YYYY")} ${moment(
                          time
                        ).format("HH:mm:ss")}`,
                        "DD/MM/YYYY HH:mm:ss"
                      ).toDate()
                    : null
                )
              }
              format="HH:mm"
              allowClear
            />
            {error && (
              <span className="text-red-500 text-sm italic">
                {error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default DateTimePickerField;
