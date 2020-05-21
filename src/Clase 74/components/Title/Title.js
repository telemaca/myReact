import React from "react";
import styles from "./title.module.scss";

// Title
// Debe renderizar un elemento h1-h6
// Props
// as (h1-h6, define qué elemento renderiza)
// color
// align: left, right, center (default: left)
// children: el texto a incluir en el elemento p

const Title = ({
  as = "h2",
  color = "info",
  align = "left",
  children,
  ...props
}) => {
  const Heading = as;
  return (
    <Heading
      className={`${styles[`title-${color}`]} ${styles[`title-${align}`]}`}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
