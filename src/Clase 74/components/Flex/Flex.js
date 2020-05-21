import React from "react";
import styles from "./flex.module.scss";

// Debe renderizar un componente div
// Debe ser un contener flexible
// Otros nombres comunes son Container o Stack (por si quieren cambiarlo)
// Debe aceptar componentes dentro suyo
// Props
// direction: horizontal, vertical (default: horizontal) (corresponde a la propiedad flex-direction)
// justify: left, center, right (corresponde a la propiedad justify-content)

const Flex = ({
  children,
  direction = "horizontal",
  justify = "center",
  ...props
}) => {
  return (
    <div
      style={{ display: "flex" }}
      className={`${styles[`container-${direction}`]} ${
        styles[`container-${justify}`]
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
