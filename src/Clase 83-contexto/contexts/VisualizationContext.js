import React, { createContext, useContext, useState } from "react";

const VisualizationContext = createContext();

const VisualizationProvider = ({ children }) => {
  const [visualization, setVisualization] = useState();
  const [order, setOrder] = useState("numberOrder");
  return (
    <VisualizationContext.Provider
      value={{ visualization, setVisualization, order, setOrder }}
    >
      {children}
    </VisualizationContext.Provider>
  );
};

const useVisualizationContext = () => useContext(VisualizationContext);

export { VisualizationProvider };
export default useVisualizationContext;
