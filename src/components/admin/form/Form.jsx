import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "../textArea/TextArea";
import CheckboxGroup from "../checkbox/Checkbox";
import Radio from "../radio/Radio";
import ImageUpload from "../uploadImage/ImageUpload";
import Dropdown from "../select/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";

registerLocale("vi", vi); // Đăng ký ngôn ngữ tiếng Việt cho DatePicker

const Form = ({
  schema,
  fields,
  closeModal,
  handleSubmitForm,
  title,
  color = "text-gray-700",
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });
  const onSubmit = (data) => {
    // console.log("Hình ảnh", imageUrl);
    console.log("Dữ liệu form", data);
    // handleSubmitForm(data);
    console.log("Ngày giờ đã chọn", selectedDate);
  };
  const disabledDate = (date) => {
    // Lấy thời gian hiện tại
    const now = new Date();
    // Lấy thời gian 30 ngày sau thời gian hiện tại
    const after30Days = new Date();
    after30Days.setDate(now.getDate() + 30);
    // So sánh với ngày được chọn
    return date < after30Days || date > now;
  };
  return (
    <>
      <h3 className="font-semibold uppercase text-[30px] text-center">
        {title}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {fields.map(({ label, name, type, placeholder, ...rest }) => (
          <div key={name} className="flex flex-col">
            <label className={`block font-medium ${color}`} htmlFor={name}>
              {label}
            </label>
            {type === "textarea" ? (
              <TextArea
                control={control}
                placeholder={placeholder}
                name={name}
                errors={errors[name]}
              />
            ) : type === "checkbox" ? (
              <CheckboxGroup
                control={control}
                placeholder={placeholder}
                options={rest.options}
                name={name}
                errors={errors[name]}
              />
            ) : type === "radio" ? (
              <Radio
                control={control}
                placeholder={placeholder}
                options={rest.options}
                name={name}
                errors={errors[name]}
              />
            ) : type === "file" ? (
              <ImageUpload
                name="image"
                control={control}
                errors={errors}
               
              />
            ) : type === "select" ? (
              <Dropdown control={control} name={name} options={rest.options} />
            ) : type === "datetime" ? (
              <DatePicker
                className="bg-white text-black px-5 py-2"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="dd/MM/yyyy HH:mm"
                timeFormat="HH:mm"
                placeholderText={placeholder}
                minDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                filterDate={disabledDate}
                locale="vi" // Thêm thuộc tính locale để sử dụng ngôn ngữ tiếng Việt
                timeIntervals={15} // Thêm prop timeIntervals với giá trị 15
              />
            ) : (
              <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                name={name}
                className={`${
                  errors[name]
                    ? "border border-red-500"
                    : "border border-gray-300"
                } focus:outline-none focus:border-blue-400  focus:ring-2 focus:ring-blue-400 block w-full rounded-md  py-2 px-3 mt-2 text-black`}
              />
            )}

            {errors[name] && (
              <span className="text-red-500 text-sm italic">
                {errors[name].message}
              </span>
            )}
          </div>
        ))}
        <div className="flex justify-between gap-5 mt-5">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
          >
            Lưu
          </button>
          <button
            onClick={() => closeModal()}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 w-full"
          >
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
