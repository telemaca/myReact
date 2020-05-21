import React from "react";
import styles from "./tag.module.scss";

const Tag = ({
  color = "info",
  size = "md",
  rounded = "none",
  children,
  ...props
}) => {
  return (
    <span
      className={`${styles[`tag-${color}`]} ${styles[`tag-${size}`]} ${
        styles[`rounded-${rounded}`]
      }`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
