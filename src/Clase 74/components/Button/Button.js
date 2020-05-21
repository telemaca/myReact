import React from "react";
import styles from "./button.module.scss";

const Button = ({
  iconLeft,
  iconRight,
  variant = "default",
  rounded = "none",
  children,
  text,
  ...props
}) => {
  return (
    <button
      className={`${styles[`btn-${variant}`]} ${styles[`rounded-${rounded}`]}`}
      {...props}
    >
      {iconLeft}
      {text}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
