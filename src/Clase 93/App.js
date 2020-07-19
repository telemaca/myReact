import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { CharacterProvider } from "./contexts/CharacterContext";
import { PaginationProvider } from "./contexts/PaginationContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import { EpisodesProvider } from "./contexts/EpisodesContext";

import Nav from "./components/Nav";
import CharactersPage from "./views/Characters";
import Character from "./views/Character";
import Episodes from "./views/Episodes";
import Locations from "./views/Locations";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: rgb(42, 42, 42);
}
`;

const App = () => {
  return (
    <CharacterProvider>
      <PaginationProvider>
        <FiltersProvider>
          <EpisodesProvider>
            <GlobalStyle />
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/">
                  <CharactersPage />
                </Route>
                <Route path="/characters">
                  <CharactersPage />
                </Route>
                <Route path="/characters/:id">
                  <Character />
                </Route>
                <Route path="/episodes">
                  <Episodes />
                </Route>
                <Route path="/locations">
                  <Locations />
                </Route>
                <Route>
                  <h1>No encontrado</h1>
                </Route>
              </Switch>
            </Router>
          </EpisodesProvider>
        </FiltersProvider>
      </PaginationProvider>
    </CharacterProvider>
  );
};

export default App;
