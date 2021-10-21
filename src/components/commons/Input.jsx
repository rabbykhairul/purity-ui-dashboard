import React from "react";

const Input = (props) => {
  const { title = "", type = "text", name="", value = "", placeholder = "Enter some text", onChange = () => {} } = props;

  return (
    <>
    <label htmlFor={name} className="color-gray-700">{title}</label>
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} id={name} className="color-gray-700" />
    </>
  )
};

export default Input;