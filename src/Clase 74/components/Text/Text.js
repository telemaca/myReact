import React from "react";
import styles from "./text.module.scss";

// Debe renderizar un elemento p
// Props
// size
// color
// align: left, right, center (default: left)
// children: el texto a incluir en el elemento p

const Text = ({
  color = "info",
  size = "xs",
  align = "left",
  children,
  ...props
}) => {
  return (
    <p
      className={`${styles[`text-${color}`]} ${styles[`text-${align}`]} ${
        styles[`text-${size}`]
      }`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
