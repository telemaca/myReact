import React from "react";
import useViewContext from "../contexts/ViewContext";

const ControlVista = () => {
  const { userDetailsShown, updateUserDetails } = useViewContext();

  const [btnText, setBtnText] = useState("Mostrar detalles");

  const toggleBtnText = () => {
    const newBtnText = userDetailsShown
      ? "Mostrar detalles"
      : "Mostrar resumen";
    setBtnText(newBtnText);
  };

  const handleClick = () => {
    updateUserDetails();
    toggleBtnText();
  };

  return <button onClick={handleClick}>{btnText}</button>;
};

export default ControlVista;
