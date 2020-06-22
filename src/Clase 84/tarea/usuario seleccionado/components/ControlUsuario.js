import React from "react";

import DetalleUsuario from "./DetalleUsuario";
import useUsersContext from "../contexts/UsersContext";

const ControlUsuario = () => {
  const { isSelected } = useUsersContext();
  return <div>{isSelected && <DetalleUsuario />}</div>;
};

export default ControlUsuario;
