import React from "react";

const Button = (props) => {
  const { type = "button", className = "", onClick = () => {}, children } = props;

  return (
    <button className={`bg-teal color-white ${className}`} type={type} onClick={onClick}>{children}</button>
  );
}

export default Button;