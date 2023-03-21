import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "../textArea/TextArea";
import CheckboxGroup from "../checkbox/Checkbox";
import Radio from "../radio/Radio";
import ImageUpload from "../uploadImage/ImageUpload";
import Dropdown from "../select/Dropdown";
import "react-datepicker/dist/react-datepicker.css";
import DateTimePickerField from "../datetime/DateTimePickerField";


const Form = ({
  schema,
  fields,
  closeModal,
  handleSubmitForm,
  title,
  color = "text-gray-700",
}) => {
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
    console.log("data:", data);
  };
  return (
    <>
      <h3 className="font-semibold uppercase text-[30px] text-center">
        {title}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {fields.map(({ label, name, type, placeholder, ...rest }) => (
          <div key={name} className="flex flex-col gap-3">
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
                name={name}
                control={control}
                errors={errors[name]}
              />
            ) : type === "select" ? (
              <Dropdown
                control={control}
                name={name}
                options={rest.options}
                errors={errors[name]}
              />
            ) : type === "datetime" ? (
              <DateTimePickerField
                name={name}
                control={control}
                errors={errors[name]}
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
          {closeModal && (
            <button
              onClick={() => closeModal()}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 w-full"
            >
              Hủy
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
