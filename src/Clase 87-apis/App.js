import React from "react";
import { createGlobalStyle } from "styled-components";

import { VisualizationProvider } from "./contexts/VisualizationContext";
import Header from "./components/Header";

import VisualizationControl from "./components/VisualizationControl";
import CharacterCardVisualControl from "./components/CharacterCardVisualControl";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: rgb(42, 42, 42);
}
`;

const App = () => {
  return (
    <VisualizationProvider>
      <GlobalStyle />
      <Header />
      <VisualizationControl />
      <CharacterCardVisualControl />
    </VisualizationProvider>
  );
};

export default App;
