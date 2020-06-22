import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

const ViewProvider = ({ children }) => {
  const [userDetailsShown, setUserDetailsShown] = useState(false);
  const [btnText, setBtnText] = useState("Mostrar detalles");

  const handleBtnText = () => {
    const newBtnText = userDetailsShown
      ? "Mostrar detalles"
      : "Mostrar resumen";
    setBtnText(newBtnText);
  };

  const handleUserDetails = () =>
    setUserDetailsShown(userDetailsShown ? false : true);

  return (
    <ViewContext.Provider
      value={{ userDetailsShown, handleUserDetails, btnText, handleBtnText }}
    >
      {children}
    </ViewContext.Provider>
  );
};

const useViewContext = () => useContext(ViewContext);

export { ViewProvider };
export default useViewContext;
