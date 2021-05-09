// React
import React from "react";

// Style
// import styles from "./Button.module.css";

const Button = ({ label, onClick }) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
