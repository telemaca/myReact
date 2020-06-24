import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

const ViewProvider = ({ children }) => {
  const [userDetailsShown, setUserDetailsShown] = useState(false);

  const updateUserDetails = () => setUserDetailsShown(!userDetailsShown);

  return (
    <ViewContext.Provider value={{ userDetailsShown, updateUserDetails }}>
      {children}
    </ViewContext.Provider>
  );
};

const useViewContext = () => useContext(ViewContext);

export { ViewProvider };
export default useViewContext;
