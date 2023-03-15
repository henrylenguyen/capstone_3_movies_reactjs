import React from "react";

const TextArea = ({ name, label, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
