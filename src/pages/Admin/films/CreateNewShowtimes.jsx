import Modal from "components/admin/modal/Modal";
import React from "react";
import * as Yup from "yup";


const CreateNewShowtimes = ({ open, onClose }) => {
  const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (data) => {
    console.log(data); // Do something with form data
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Login"
      submitText="Login"
      schema={schema}
      defaultValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          {...register("username")}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.username ? "border-red-500" : ""
          }`}
          id="username"
          type="text"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          {...register("password")}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password ? "border-red-500" : ""
          }`}
          id="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.password.message}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default CreateNewShowtimes;
