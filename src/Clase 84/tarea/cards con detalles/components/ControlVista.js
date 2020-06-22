import React from "react";
import useViewContext from "../contexts/ViewContext";

const ControlVista = () => {
  const { handleUserDetails, btnText, handleBtnText } = useViewContext();

  const handleClick = () => {
    handleUserDetails();
    handleBtnText();
  };

  return <button onClick={handleClick}>{btnText}</button>;
};

export default ControlVista;
