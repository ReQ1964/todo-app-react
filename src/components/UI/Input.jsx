import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className={classes.input}
      type={props.type}
      placeholder={props.placeholder}
      required={true}
      ref={ref}
      min={props.min}
      max={props.max}
    ></input>
  );
});

export default Input;
