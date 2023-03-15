import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = ({ schema, fields, closeModal, handleSubmitForm,title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <>
      <h3 className="font-semibold uppercase text-[30px] text-center">{title}</h3>
      <form
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        className="flex flex-col gap-3"
      >
        {fields.map(({ label, name, type, placeholder, ...rest }) => (
          <div key={name}>
            <label className="block font-medium text-gray-700" htmlFor={name}>
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              {...register(name)}
              {...rest}
              className={`${
                errors[name]
                  ? "border border-red-500"
                  : "border border-gray-300"
              } focus:outline-none focus:border-blue-400  focus:ring-2 focus:ring-blue-400 block w-full rounded-md  py-2 px-3 mt-2 text-black`}
            />
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
