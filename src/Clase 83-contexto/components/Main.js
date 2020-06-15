import React from "react";
import SearchResults from "./SearchResults";
import ResultOptions from "./ResultOptions";
import { VisualizationProvider } from "../contexts/VisualizationContext";

const Main = () => {
  return (
    <VisualizationProvider>
      <main>
        <ResultOptions />
        <SearchResults />
      </main>
    </VisualizationProvider>
  );
};

export default Main;
