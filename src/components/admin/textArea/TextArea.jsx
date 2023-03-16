import React from "react";
const TextArea = ({ name, value, placeholder, errors }) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`${
        errors ? "border border-red-500" : "border border-gray-300"
      } focus:outline-none focus:border-blue-400  focus:ring-2 focus:ring-blue-400 block w-full rounded-md  py-2 px-3 mt-2 text-black`}
    />
  );
};

export default TextArea;
