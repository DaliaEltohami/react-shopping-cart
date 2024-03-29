import React from "react";

function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
export default Input;
