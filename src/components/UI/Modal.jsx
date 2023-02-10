import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Overlay className={props.className}>{props.children}</Overlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
