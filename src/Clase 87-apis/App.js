import React from "react";
import { createGlobalStyle } from "styled-components";

import { AppProvider } from "./contexts/AppContext";

import Header from "./components/Header";

import VisualizationControl from "./components/VisualizationControl";
import CharacterCardVisualControl from "./components/CharacterCardVisualControl";
import EpisodeCardControl from "./components/EpisodeCardControl";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: rgb(42, 42, 42);
}
`;

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Header />
      <VisualizationControl />
      <CharacterCardVisualControl />
      <EpisodeCardControl />
    </AppProvider>
  );
};

export default App;
