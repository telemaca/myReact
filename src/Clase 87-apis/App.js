import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CharacterProvider } from "./contexts/CharacterContext";
import { PaginationProvider } from "./contexts/PaginationContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import { EpisodesProvider } from "./contexts/EpisodesContext";

import Header from "./components/Header";
import Nav from "./components/Nav";

import CharactersPage from "./views/CharactersPage";
import EpisodesPage from "./views/EpisodesPage";
import LocationsPage from "./views/LocationsPage";
import NotFoundPage from "./views/NotFoundPage";
import CharacterPage from "./views/CharacterPage";
import EpisodePage from "./views/EpisodePage";

import VisualizationControl from "./components/VisualizationControl";
import CharacterCard from "./components/CharacterCard";
import EpisodeCard from "./components/EpisodeCard";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: rgb(42, 42, 42);
}
`;

const App = () => {
  return (
    <Router>
      <CharacterProvider>
        <PaginationProvider>
          <FiltersProvider>
            <EpisodesProvider>
              <GlobalStyle />
              <Header />
              <Nav />
              <Switch>
                <Route exact path="/">
                  <CharactersPage />
                </Route>
                <Route exact path="/characters">
                  <CharactersPage />
                </Route>
                <Route exact path="/locations">
                  <LocationsPage />
                </Route>
                <Route exact path="/episodes">
                  <EpisodesPage />
                </Route>
                <Route exact path="/character/:id">
                  <CharacterPage />
                </Route>
                <Route exact path="/episodes/:id">
                  <EpisodePage />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
              {/* <VisualizationControl />
              <CharacterCard />
              <EpisodeCard /> */}
            </EpisodesProvider>
          </FiltersProvider>
        </PaginationProvider>
      </CharacterProvider>
    </Router>
  );
};

export default App;
