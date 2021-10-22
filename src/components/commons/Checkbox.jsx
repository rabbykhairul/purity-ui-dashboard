import React from "react";

const Checkbox = (props) => {
  return (
    <div className="toggler">
      <input type="checkbox" id="toggle"/>
	    <label className="toggle-label bg-teal" for="toggle"></label>
      <span className="color-gray-700" >Remember me</span>
    </div>
  )
};

export default Checkbox;